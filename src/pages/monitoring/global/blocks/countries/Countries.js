import React, { useRef } from "react";
import img from "../../../../../assets/main/monitoring/globus.svg";
import { monitoring_countries as countries } from "../../../../../store/constats";
import styles from "./countries.module.css";

export const Countries = () => {
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        // TO SOMETHING HERE
        console.log("Reached bottom");
      }
    }
  };

  return (
    <div ref={ref} onScroll={handleScroll} className={styles.cont}>
      <div className={styles.img_box}>
        <img src={img} alt="" className={styles.img} />
        <div className={styles.nums}>
          {countries.map((el) => (
            <Box key={el.index} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Box = ({ index, title, description }) => {
  return (
    <div className={styles.num}>
      <span
        onMouseEnter={(e) => {
          e.target.nextElementSibling.classList.add("!opacity-100");
        }}
      >
        {index}
      </span>
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};
