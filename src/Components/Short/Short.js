import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Styles from "./Short.module.css";
import SensitiveCover from "../SensitiveCover/SensitiveCover";
import SkeletonImg from "../Skeletons/SkeletonImg";
import Skeleton from "@mui/material/Skeleton";

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

  const [loading, setloading] = useState(true);

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

  const changeStateHandler = () => {
    setloading(false);
  };

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
          {
            <SkeletonImg
              link={
                shortState.link
                  ? shortState.link
                  : "https://via.placeholder.com/1200"
              }
              loaded={changeStateHandler}
              loading={loading}
            />
          }
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
