import React from "react";
import { Gradient } from "../../reusable";
import { CustomBtn } from "../../forms";
import styles from "./quakeBox.module.css";
import { useNavigate } from "react-router-dom";
import { getLang } from "../../../helper";

export const QuakeBox = ({ image, title, description, date, to }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <img
          className={styles.img}
          src={image}
          alt=""
        />
        <Gradient className="text-[22px] leading-6 text-center font-bold">
          {title}
        </Gradient>
        <span className="text-[#909090]">{date}</span>
        <p className="text-[#3C3C3C] text-center">{description}</p>
        <CustomBtn onClick={() => navigate(getLang(to))}>
          Узнать больше
        </CustomBtn>
      </div>
    </div>
  );
};

// ==============================================================

// title,
// description,
// icon,
// image,
// date,
// time,
// to,

// ==============================================================

// src,
// title,
// description,
// date,
// to

// ==============================================================
