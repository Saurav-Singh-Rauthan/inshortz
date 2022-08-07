import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, EffectCoverflow } from "swiper";
import { connect } from "react-redux";

import "swiper/css/bundle";
import Styles from "./Scroller.module.css";
import Short from "../Short/Short";

const Scroller = (props) => {
  SwiperCore.use([Pagination]);

  let shorts = [];
  if (props.shorts) {
    const ascShorts = Object.keys(props.shorts).map((short) => {
      let data = {
        ...props.shorts[short],
        shortKey: short,
      };

      return data;
    });

    for (let i = ascShorts.length - 1; i >= 0; i--) {
      shorts.push(ascShorts[i]);
    }
  }

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
        {shorts.map((short) => {
          return (
            <SwiperSlide
              key={short.shortKey}
              onMouseLeave={() => console.log("gya")}
              
            >
              <Short shortData={short} />
            </SwiperSlide>
          );
        })}
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
