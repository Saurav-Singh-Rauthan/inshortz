import React, { useState, useEffect } from "react";

import Styles from "./SensitiveCover.module.css";

const SensitiveCover = (props) => {
  const [sens, setsens] = useState(false);

  const sensitiveStateHandler = () => {
    setsens((prevState) => !prevState);
  };

  useEffect(() => {
    setsens(props.show);
  }, [props.show]);

  return (
    <div className={Styles.cont} style={{ display: sens ? "block" : "none" }}>
      <div className={Styles.change}>
        <p>
          This Short contains sensitive content, which some people may find
          offensive or disturbing
        </p>
        <button className={Styles.Btn} onClick={sensitiveStateHandler}>
          See Short
        </button>
      </div>
    </div>
  );
};

export default SensitiveCover;
