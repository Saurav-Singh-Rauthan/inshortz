import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, EffectCoverflow } from "swiper";

import "swiper/css/bundle";
import Styles from "./Scroller.module.css";
import Short from "../Short/Short";

const Scroller = (props) => {
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
      >
        <SwiperSlide>
          <Short shortData={{ type: "img" }} />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Scroller;
