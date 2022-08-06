import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

import * as actions from "../../Store/actions/index";

const Account = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <div>
      <button onClick={() => props.logout()}>LOGOUT</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop,
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
