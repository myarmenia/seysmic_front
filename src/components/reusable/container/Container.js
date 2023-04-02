import React from "react";
import styles from "./container.module.css";

export const Container = ({ children, className = "", bg = "", bg_style }) => {
  return (
    <div style={bg_style} className={[styles.my_container, bg].join(" ")}>
      <div className={[styles.content, className].join(" ")}>{children}</div>
    </div>
  );
};
