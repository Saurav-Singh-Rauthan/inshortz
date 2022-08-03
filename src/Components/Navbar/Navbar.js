import React from "react";

import Styles from "./Navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Navbar = (props) => {
  return (
    <div className={Styles.cont}>
      <p>INSHORTZ</p>
      <div className={Styles.iconCont}>
        <div className={Styles.icon}>
          <AddCircleIcon />
        </div>
        <div className={Styles.icon}>
          <FindInPageIcon />
        </div>
        <div className={Styles.icon}>
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
