import React from "react";
import styles from "./gradient.module.css";

export const Gradient = ({ children, className = "", style }) => {
  return (
    <p style={style} className={[styles.p, className].join(" ")}>
      {children}
    </p>
  );
};
