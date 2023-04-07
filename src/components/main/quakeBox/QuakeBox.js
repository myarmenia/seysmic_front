import React from "react";
import { Gradient } from "../../reusable";
import { CustomBtn } from "../../forms";
import styles from "./quakeBox.module.css";
import { Link, useNavigate } from "react-router-dom";

export const QuakeBox = ({ image, title, description, date, to }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <img
          className="mt-[-50%] w-full max-w-[160px] h-[160px] object-cover rounded-[20px] border-[5px] border-[#fff] shadow-light"
          src={image}
          alt=""
        />
        <Gradient className="text-[22px] leading-6 text-center font-bold">
          {title}
        </Gradient>
        <span className="text-[#909090]">{date}</span>
        <p className="text-[#3C3C3C] text-center">{description}</p>
        <CustomBtn onClick={() => navigate(to)}>Узнать больше</CustomBtn>
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
