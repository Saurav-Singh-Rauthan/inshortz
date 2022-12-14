import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Styles from "./Short.module.css";
import SensitiveCover from "../SensitiveCover/SensitiveCover";
import SkeletonImg from "../Skeletons/SkeletonImg";
import SkeletonVid from "../Skeletons/SkeletonVid";

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
  const [fullscreen, setfullscreen] = useState(false);
  const [showtags, setshowTags] = useState(false);

  useEffect(() => {
    setshortState({
      type: props.shortData?.type,
      link: fetchUrlHandler(props.shortData?.link ? props.shortData?.link : ""),
      title: props.shortData?.title,
      content: props.shortData?.content,
      author: props.shortData?.author,
      authorEmail: props.shortData?.authorEmail,
      sensitive: props.shortData?.sensitive,
      tags: props.shortData?.tags,
    });
  }, [props]);

  const changeStateHandler = () => {
    setloading(false);
  };

  const fetchUrlHandler = (link) => {
    const reg =
      /^(https?:)?(\/\/)?((www\.|m\.)?youtube(-nocookie)?\.com\/((watch)?\?(feature=\w*&)?vi?=|embed\/|vi?\/|e\/)|youtu.be\/)([\w\-]{10,20})/i;
    const match = link.match(reg);
    if (match) {
      const ytlink = `https://www.youtube-nocookie.com/embed/${match[9]}?rel=0&enablejsapi=1&showinfo=0&autohide=1`;
      return ytlink;
    } else {
      return link;
    }
  };

  const fullscreenHandler = (type) => {
    if (type === "btn") {
      setfullscreen(false);
    } else {
      setfullscreen(true);
    }
  };

  const tags = shortState.tags
    ? shortState.tags.map((tag, index) => {
        return (
          <Link
            to={`/search?tag=${
              new URLSearchParams(tag).toString().split("=")[0]
            }`}
            key={`${tag}_${index}`}
            className={Styles.tag}
          >
            {`${tag}`}
          </Link>
        );
      })
    : null;

  return (
    <React.Fragment>
      <SensitiveCover show={shortState.sensitive} />
      <div className={props.prev ? Styles.contPreview : Styles.cont}>
        <button
          className={Styles.closeFullscreen}
          style={{ display: fullscreen ? "block" : "none" }}
          onClick={() => fullscreenHandler("btn")}
        >
          X
        </button>
        <div
          className={[Styles.infot, fullscreen ? Styles.fullscreen : ""].join(
            " "
          )}
          onClick={() => fullscreenHandler("div")}
        >
          {shortState.type === "img" ? (
            <SkeletonImg
              link={
                shortState.link
                  ? shortState.link
                  : "https://via.placeholder.com/1200"
              }
              loaded={changeStateHandler}
              loading={loading}
              fullscreen={fullscreen}
            />
          ) : (
            <SkeletonVid
              link={
                shortState.link
                  ? shortState.link
                  : "https://www.youtube.com/embed/BBJa32lCaaY?rel=0&enablejsapi=1&showinfo=0&autohide=1"
              }
              loaded={changeStateHandler}
              loading={loading}
            />
          )}
        </div>
        <div className={Styles.descCont}>
          <div
            style={{ display: showtags ? "block" : "none" }}
            className={Styles.tagCover}
            onClick={() => setshowTags(0)}
          ></div>
          <p className={Styles.title}>
            {shortState.title ? shortState.title : ""}
          </p>
          <p className={Styles.content}>
            {shortState.content ? shortState.content : ""}
          </p>
          <p className={Styles.author}>
            Author : {shortState.author ? shortState.author : ""}
          </p>
          <div
            className={Styles.tagCont}
            onClick={() => setshowTags(!showtags)}
          >
            <div className={!showtags ? Styles.tagsDiv : Styles.tagDivVisible}>
              {shortState.tags?.length > 0 ? (
                tags
              ) : (
                <p className={Styles.noTags}>No tags available for the short</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Short;
