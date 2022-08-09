import React, { useState, useEffect } from "react";
import "./App.css";
import "./muiglobal.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { connect } from "react-redux";

import * as actions from "./Components/Store/actions/index";

import Home from "./Components/Pages/Home/Home";
import AddRecord from "./Components/Pages/AddRecord/AddRecord";
import NotFound from "./Components/Pages/NotFound/Notfound";
import Auth from "./Components/Pages/Auth/Auth";
import Account from "./Components/Pages/Account/Account";
import Search from "./Components/Pages/Search/Search";
import Viewer from "./Components/Pages/Viewer/Viewer";
import Navbar from "./Components/Navbar/Navbar";
import Alert from "./Components/Alert/Alert";

const App = (props) => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AuthDomain,
    databaseURL: process.env.REACT_APP_BaseURL,
    projectId: process.env.REACT_APP_ProjectID,
    storageBucket: process.env.REACT_APP_StorageBucket,
    messagingSenderId: process.env.REACT_APP_MessagingSenderId,
    appId: process.env.REACT_APP_AppId,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const [alert, setalert] = useState({
    type: null,
    msg: null,
    open: false,
  });

  useEffect(() => {
    props.auto_login();
    props.fetch_shorts();
  });

  useEffect(() => {
    if (props.fetchStatus === false) {
      setalert({
        open: true,
        type: "error",
        msg: "Couldn't fetch shorts, try again!!!",
      });
    }
  }, [props.fetchStatus]);

  return (
    <Router>
      <div className="App">
        <Alert type={alert.type} open={alert.open} msg={alert.msg} />
        <Routes>
          <Route path="/add-short" element={<AddRecord />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/search/:shortID" element={<Viewer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Navbar />
      </div>
    </Router>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.token !== null,
    fetchStatus: state.shorts.fetchStatus,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    auto_login: () => {
      dispatch(actions.auto_login());
    },
    fetch_shorts: () => {
      dispatch(actions.fetch_shorts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
