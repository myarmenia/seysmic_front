import React from "react";
import styles from "./ul.module.css";

export const Ul = ({ data, className = "" }) => {
  return (
    <ul className={[className, styles.ul].join(" ")}>
      {data.map((text, i) => (
        <li key={i} className={styles.li}>
          {text}
        </li>
      ))}
    </ul>
  );
};
