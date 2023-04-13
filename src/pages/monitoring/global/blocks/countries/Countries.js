import React, { useRef } from "react";
import img from "../../../../../assets/main/monitoring/globus.svg";
import { useAnimation } from "../../../../../hooks";
import { monitoring_countries as countries } from "../../../../../store/constats";
import styles from "./countries.module.css";

export const Countries = () => {
  const ref = useRef(null);
  const bool = useAnimation(ref);
  return (
    <div ref={ref} className={styles.cont}>
      <div className={styles.img_box}>
        <img src={img} alt="" className={styles.img} />
        <div className={styles.nums}>
          {countries.map((el, i) => (
            <Box
              style={{ opacity: bool ? 1 : 0, transitionDelay: `${i / 2}s` }}
              key={el.index}
              {...el}
            />
          ))}
        </div>
      </div>
    </div>
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
