import React, { createContext, useReducer } from "react";
import AdminReducer from "../reducers/AdminReducer";
import { AuthLogin, AddCategory, getCountCategory } from "../../api";

const initialState = {
  adminAccess: { message: "", login: false },
  category: {}
};

//create createContext
export const AdminContext = createContext(initialState);

//Provider Component
export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);

  //Actions
  const adminLogin = async data => {
    await AuthLogin(data)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: "ADMIN_LOGIN",
            data: { message: "loginSucessfull", login: true }
          });
        }
      })
      .catch(error => {
        dispatch({
          type: "LOGIN_FAIL",
          data: {
            message: "loginFailed",
            login: false
          }
        });
      });
  };

  const refreshLogin = () => {
    dispatch({
      type: "ADMIN_LOGIN",
      data: { message: "loginSucessfull", login: true }
    });
  };
  const ab = "";

  const adminLogOut = () => {
    dispatch({
      type: "ADMIN_LOGOUT",
      data: false
    });
  };
  const addMethodCategory = async data => {
    await AddCategory(data)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  };
  const getCategoryCount = async () => {
    await getCountCategory()
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: "GET_CATEGORY_COUNT",
            data: res.data
          });
        }
      })
      .catch(err => {
        dispatch({
          type: "GET_CATEGORY_COUNT_FAIL",
          data: {
            sucessfull: false,
            message: err
          }
        });
      });
  };

  return (
    <AdminContext.Provider
      value={{
        adminAccess: state.adminAccess,
        category: state.category,
        adminLogin,
        adminLogOut,
        refreshLogin,
        addMethodCategory,
        getCategoryCount
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};