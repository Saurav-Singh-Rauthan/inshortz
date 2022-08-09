import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import Styles from "./Account.module.css";
import * as actions from "../../Store/actions/index";
import TextField from "@mui/material/TextField";
import Search from "../Search/Search";

const Account = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    if (!props.isAuthenticated) {
      navigate('/auth');
    }
  });

  return (
    <div className={Styles.container}>
      <div className={Styles.userDetails}>
        <p className={Styles.heading}>User Details</p>
        <TextField
          id="outlined-basic"
          label="Username"
          required
          variant="outlined"
          value={
            localStorage.getItem("username")
              ? localStorage.getItem("username")
              : ""
          }
          disabled={true}
        />
        <TextField
          id="outlined-basic"
          label="User email"
          required
          variant="outlined"
          value={
            localStorage.getItem("email") ? localStorage.getItem("email") : ""
          }
          disabled={true}
        />
        <button className={Styles.Btn} onClick={() => props.logout()}>
          LOGOUT
        </button>
      </div>
      <div className={Styles.userShorts}>
        <p className={Styles.heading2}>User Shorts</p>
        <div className={Styles.shortsCont}>
          <Search userShorts={true} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(actions.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
