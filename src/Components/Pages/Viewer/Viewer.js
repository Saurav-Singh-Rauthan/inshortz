import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axiosI from "../../../axiosInstance";

import Scroller from "../../Scroller/Scroller";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "../../Alert/Alert";

const Viewer = (props) => {
  let { shortID } = useParams();
  let navigate = useNavigate();

  const [shortData, setshortData] = useState();
  const [alert, setalert] = useState({
    type: null,
    msg: null,
    open: false,
  });

  useEffect(() => {
    loadShortHandler();
  }, []);

  const loadShortHandler = () => {
    axiosI
      .get(`/shorts/${shortID}.json`)
      .then((res) => {
        setshortData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setalert({
          open: true,
          type: "error",
          msg: "Couldn't fetch short!!",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
  };

  return (
    <React.Fragment>
      <Alert type={alert.type} open={alert.open} msg={alert.msg} />
      <div>
        {shortData ? (
          <Scroller type="view" shortData={shortData} />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
              height: "100%",
            }}
          >
            <CircularProgress sx={{ color: "#ffe26a" }} size={48} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Viewer;
