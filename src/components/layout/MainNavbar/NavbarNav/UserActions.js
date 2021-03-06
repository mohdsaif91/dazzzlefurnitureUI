import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink,
} from "shards-react";
import { AdminContext } from "../../../../context/state/AdminState";

export default function UserActions() {
  const [visible, setVisible] = useState(false);

  const history = useHistory();
  const { adminLogOut } = useContext(AdminContext);

  const toggleUserActions = () => {
    setVisible(!visible);
  };

  const logout = () => {
    adminLogOut();
    history.push("/");
  };

  return (
    <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
      <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
        <img
          className="user-avatar rounded-circle mr-2"
          src={require("./../../../../images/avatars/0.jpg")}
          alt="User Avatar"
        />
        <span className="d-none d-md-inline-block">Sierra Brooks</span>
      </DropdownToggle>
      <Collapse tag={DropdownMenu} right small open={visible}>
        <DropdownItem tag={Link} to="user-profile">
          <i className="material-icons">&#xE7FD;</i> Profile
        </DropdownItem>
        <DropdownItem tag={Link} to="edit-user-profile">
          <i className="material-icons">&#xE8B8;</i> Edit Profile
        </DropdownItem>
        <DropdownItem tag={Link} to="file-manager-list">
          <i className="material-icons">&#xE2C7;</i> Files
        </DropdownItem>
        <DropdownItem tag={Link} to="transaction-history">
          <i className="material-icons">&#xE896;</i> Transactions
        </DropdownItem>
        <DropdownItem tag={Link} to="/signIn">
          <i className="material-icons">login</i> Log In
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          // tag={Link}
          onClick={logout}
          // to="/"
          className="text-danger"
        >
          <i className="material-icons text-danger">&#xE879;</i> Logout
        </DropdownItem>
      </Collapse>
    </NavItem>
  );
}

// export default class UserActions extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       visible: false
//     };

//     this.toggleUserActions = this.toggleUserActions.bind(this);
//   }

//   toggleUserActions() {
//     this.setState({
//       visible: !this.state.visible
//     });
//   }

//   render() {
//     return (
//       <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
//         <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
//           <img
//             className="user-avatar rounded-circle mr-2"
//             src={require("./../../../../images/avatars/0.jpg")}
//             alt="User Avatar"
//           />{" "}
//           <span className="d-none d-md-inline-block">Sierra Brooks</span>
//         </DropdownToggle>
//         <Collapse tag={DropdownMenu} right small open={this.state.visible}>
//           <DropdownItem tag={Link} to="user-profile">
//             <i className="material-icons">&#xE7FD;</i> Profile
//           </DropdownItem>
//           <DropdownItem tag={Link} to="edit-user-profile">
//             <i className="material-icons">&#xE8B8;</i> Edit Profile
//           </DropdownItem>
//           <DropdownItem tag={Link} to="file-manager-list">
//             <i className="material-icons">&#xE2C7;</i> Files
//           </DropdownItem>
//           <DropdownItem tag={Link} to="transaction-history">
//             <i className="material-icons">&#xE896;</i> Transactions
//           </DropdownItem>
//           <DropdownItem tag={Link} to="/signIn">
//             <i className="material-icons">login</i> Log In
//           </DropdownItem>
//           <DropdownItem divider />
//           <DropdownItem
//             tag={Link}
//             onClick={() => logout}
//             to="/"
//             className="text-danger"
//           >
//             <i className="material-icons text-danger">&#xE879;</i> Logout
//           </DropdownItem>
//         </Collapse>
//       </NavItem>
//     );
//   }
// }
