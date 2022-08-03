import React from "react";
import { NavLink } from "react-router-dom";

import Styles from "./Navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = (props) => {
  return (
    <div className={Styles.cont}>
      <NavLink to="/">
        <p>INSHORTZ</p>
      </NavLink>
      <div className={Styles.iconCont}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? Styles.active : Styles.icon)}
        >
          <HomeIcon />
        </NavLink>
        <NavLink
          to="/add-short"
          className={({ isActive }) => (isActive ? Styles.active : Styles.icon)}
        >
          <AddCircleIcon />
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? Styles.active : Styles.icon)}
        >
          <FindInPageIcon />
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? Styles.active : Styles.icon)}
        >
          <AccountCircleIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
