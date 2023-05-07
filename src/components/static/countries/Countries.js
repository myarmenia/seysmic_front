import React from "react";
import img from "../../../assets/main/monitoring/globus.svg";
import { monitoring_countries as countries } from "../../../store/constats";
import { ViewPosition } from "../../reusable";
import styles from "./countries.module.css";

export const Countries = ({ className = "" }) => {
  return (
    <ViewPosition className={[styles.cont, className].join(" ")}>
      {(bool) => (
        <div className={styles.img_box}>
          <img src={img} alt="" className={styles.img} />
          <div className={styles.nums}>
            {countries.map((el, i) => (
              <Box
                style={{ opacity: bool ? 1 : 0, transitionDelay: `${i / 4}s` }}
                key={el.index}
                {...el}
              />
            ))}
          </div>
        </div>
      )}
    </ViewPosition>
  );
};

const Box = ({ index, title, description, style }) => {
  return (
    <div className={styles.num}>
      <span>{index}</span>
      <div style={style}>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};
