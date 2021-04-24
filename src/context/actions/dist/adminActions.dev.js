"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLoading = startLoading;
exports.stopLoading = stopLoading;
exports.adminLoginAction = adminLoginAction;
exports.getCategoryCountAction = getCategoryCountAction;
exports.getCategoryCountFail = getCategoryCountFail;
exports.adminLogoutAction = adminLogoutAction;
exports.loginFailAction = loginFailAction;
exports.deleteSucessfull = deleteSucessfull;
exports.deleteUnSucessfull = deleteUnSucessfull;
exports.adminActions = void 0;
var adminActions = {
  ADMIN_LOGIN: "ADMIN_LOGIN",
  ADMIN_LOGOUT: "ADMIN_LOGOUT",
  DELETE_SUCESSFULL: "DELETE_SUCESSFULL",
  DELETE_UNSUCESSFULL: "DELETE_UNSUCESSFULL",
  GET_CATEGORY_COUNT: "GET_CATEGORY_COUNT",
  GET_CATEGORY_COUNT_FAIL: "GET_CATEGORY_COUNT_FAIL",
  LOGIN_FAIL: "LOGIN_FAIL",
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING"
};
exports.adminActions = adminActions;

function startLoading(type) {
  return {
    type: adminActions.START_LOADING,
    data: {
      flag: true,
      type: type
    }
  };
}

function stopLoading(type) {
  return {
    type: adminActions.STOP_LOADING,
    data: {
      flag: false,
      type: type
    }
  };
}

function adminLoginAction() {
  return {
    type: adminActions.ADMIN_LOGIN,
    data: {
      message: "loginSucessfull",
      login: true
    }
  };
}

function getCategoryCountAction(data) {
  return {
    type: adminActions.GET_CATEGORY_COUNT,
    data: data
  };
}

function getCategoryCountFail(err) {
  return {
    type: adminActions.GET_CATEGORY_COUNT_FAIL,
    data: {
      sucessfull: false,
      message: err
    }
  };
}

function adminLogoutAction() {
  return {
    type: adminActions.ADMIN_LOGOUT,
    data: false
  };
}

function loginFailAction() {
  return {
    type: adminActions.LOGIN_FAIL,
    data: {
      message: "loginFailed",
      login: false
    }
  };
}

function deleteSucessfull(data) {
  // console.log(data, "<>?");
  return {
    type: adminActions.DELETE_SUCESSFULL,
    data: data
  };
}

function deleteUnSucessfull(error) {
  return {
    type: adminActions.DELETE_UNSUCESSFULL,
    data: error
  };
}