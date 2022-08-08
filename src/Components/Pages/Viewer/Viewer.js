import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axiosI from "../../../axiosInstance";

import Scroller from "../../Scroller/Scroller";
import CircularProgress from "@mui/material/CircularProgress";

const Viewer = (props) => {
  let { shortID } = useParams();
  const [shortData, setshortData] = useState();

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
      });
  };

  return (
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
  );
};

export default Viewer;
