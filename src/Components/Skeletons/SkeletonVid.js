import React from "react";

import Skeleton from "@mui/material/Skeleton";

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
        style={{ display: props.loading ? "none" : "block" }}
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
