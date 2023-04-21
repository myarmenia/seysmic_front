import React from "react";
import styles from "./ul.module.css";
import { useRef } from "react";
import { useAnimation } from "../../../hooks";

export const Ul = ({ data, className = "" }) => {
  const ref = useRef(null);
  const bool = useAnimation(ref);
  return (
    <ul ref={ref} className={[className, styles.ul].join(" ")}>
      {data.map((text, i) => (
        <li
          key={i}
          style={{ opacity: bool ? 1 : 0, transitionDelay: `${i / 10}s` }}
          className={styles.li}
        >
          {text}
        </li>
      ))}
    </ul>
  );
};
