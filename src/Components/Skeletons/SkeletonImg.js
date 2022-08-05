import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Styles from "./Skeleton.module.css";

const SkImg = (props) => {
  return (
    <React.Fragment>
      {props.loading ? (
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={"100%"}
          animation="wave"
        />
      ) : null}
      <img
        src={props.link}
        alt="shortImage"
        className={Styles.image}
        onLoad={() => {
          props.loaded();
        }}
        style={{ display: props.loading ? "none" : "block" }}
      />
    </React.Fragment>
  );
};

export default SkImg;
