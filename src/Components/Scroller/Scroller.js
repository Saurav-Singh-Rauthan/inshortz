import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, EffectCoverflow } from "swiper";
import { connect } from "react-redux";

import "swiper/css/bundle";
import Styles from "./Scroller.module.css";
import Short from "../Short/Short";

const Scroller = (props) => {
  let swiper = useRef();

  useEffect(() => {
    if (props.type !== "view") {
      swiper.current.swiper.slideTo(
        localStorage.getItem("lastVisited")
          ? localStorage.getItem("lastVisited")
          : 0,
        0
      );
    }
  }, []);

  const stopVideos = function () {
    let videos = document.querySelectorAll("iframe, video");
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === "video") {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    });
    localStorage.setItem("lastVisited", swiper.current.swiper.activeIndex);
  };

  let shorts = [];
  if (props.shorts) {
    const ascShorts = Object.keys(props.shorts).map((short) => {
      let data = {
        ...props.shorts[short],
        shortKey: short,
      };

      return data;
    });

    // for (let i = ascShorts.length - 1; i >= 0; i--) {
    for (let i = 0; i < ascShorts.length; i++) {
      shorts.push(ascShorts[i]);
    }
  }

  SwiperCore.use([Pagination]);
  return (
    <div className={Styles.comp}>
      <Swiper
        effect={"coverflow"}
        direction={"vertical"}
        slidesPerView={"auto"}
        centeredSlides
        mousewheel
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Mousewheel, Pagination, EffectCoverflow]}
        className="mySwiper"
        style={{ height: "inherit" }}
        onSlideChange={() => stopVideos()}
        ref={swiper}
      >
        {props.type !== "view" ? (
          shorts.map((short) => {
            return (
              <SwiperSlide key={short.shortKey}>
                <Short shortData={short} />
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide>
            <Short shortData={props.shortData} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    shorts: state.shorts.shorts,
  };
};

export default connect(mapStateToProps)(Scroller);
