import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Styles from "./Short.module.css";
import SensitiveCover from "../SensitiveCover/SensitiveCover";

const Short = (props) => {
  const [shortState, setshortState] = useState({
    type: null,
    link: null,
    title: null,
    content: null,
    author: null,
    sensitive: false,
    tags: [],
  });

  useEffect(() => {
    setshortState({
      type: props.shortData?.type,
      link: props.shortData?.link,
      title: props.shortData?.title,
      content: props.shortData?.content,
      author: props.shortData?.author,
      sensitive: props.shortData?.sensitive,
      tags: props.shortData?.tags,
    });
  }, [props]);

  const tags = shortState.tags
    ? shortState.tags.map((tag, index) => {
        return (
          <Link
            to={`/search?tag="${tag}`}
            key={`${tag}_${index}`}
            className={Styles.tag}
          >
            {`#${tag}`}
          </Link>
        );
      })
    : null;

  return (
    <React.Fragment>
      <SensitiveCover show={shortState.sensitive} />
      <div className={props.prev ? Styles.contPreview : Styles.cont}>
        <div className={Styles.infot}>
          <img
            src={
              shortState.link
                ? shortState.link
                : "https://via.placeholder.com/1200"
            }
            alt="shortImage"
            className={Styles.image}
          />
        </div>
        <div className={Styles.descCont}>
          <p className={Styles.title}>
            {shortState.title ? shortState.title : ""}
          </p>
          <p className={Styles.content}>
            {shortState.content ? shortState.content : ""}
          </p>
          <p className={Styles.author}>
            Author : {shortState.author ? shortState.author : ""}
          </p>
          <div className={Styles.tagCont}>{tags}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Short;
