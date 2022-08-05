import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Styles from "./Skeleton.module.css";

const SkeletonVid = (props) => {
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
      <iframe
        src={props.link ? props.link : null}
        width={"100%"}
        height={"100%"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => props.loaded()}
      ></iframe>
    </React.Fragment>
  );
};

export default SkeletonVid;
