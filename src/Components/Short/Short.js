import React from "react";
import { Link } from "react-router-dom";

import Styles from "./Short.module.css";
import SensitiveCover from "../SensitiveCover/SensitiveCover";

const Short = (props) => {
  return (
    <React.Fragment>
      <SensitiveCover show={props.sens} />
      <div className={props.prev ? Styles.contPreview : Styles.cont}>
        <div className={Styles.infot}>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="shortImage"
            className={Styles.image}
          />
        </div>
        <div className={Styles.descCont}>
          <p className={Styles.title}>
            'Basant Panchami' is a Hindu festival celebrating Saraswati, the
            goddess of knowledge, music and art. It is celebrated throughout the
            India.
          </p>
          <p className={Styles.content}>
            'Basant Panchami' is a Hindu festival celebrating Saraswati, the
            goddess of knowledge, music and art. It is celebrated throughout the
            India. It is celebrated every year on the fifth day (Panchami) of
            the Magh month according to Hindu Calander. Basant Panchami marks
            the end of the winter season. In this festival the kids are taught
            to write their first words according to the Hindu Custom. People
            usually wear yellow garments in this festival.
          </p>
          <p className={Styles.author}>Author : Saurav Singh Rauthan</p>
          <div className={Styles.tagCont}>
            <Link to='/search?tag="hello' className={Styles.tag}>
              #India
            </Link>
            <Link to='/search?tag="hello' className={Styles.tag}>
              #Festival
            </Link>
            <Link to='/search?tag="hello' className={Styles.tag}>
              #Celebrations
            </Link>
            <Link to='/search?tag="hello' className={Styles.tag}>
              #Basant Panchmi
            </Link>
            <Link to='/search?tag="hello' className={Styles.tag}>
              #Happy
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Short;
