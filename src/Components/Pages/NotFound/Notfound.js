import React from "react";
import { Link } from "react-router-dom";

import notfound from "../../../assests/img/undraw_page_not_found_re_e9o6.svg";
import Styles from "./NotFound.module.css";

const NotFound = (props) => {
  return (
    <div className={Styles.cont}>
      <img src={notfound} alt="" className={Styles.img} />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
