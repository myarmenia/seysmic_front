import React from "react";
import styles from "./filterBtn.module.css";

export const FilterBtn = ({ children, className = "", active, ...props }) => {
  return (
    <button
      {...props}
      className={[styles.btn, className, active ? styles.active : ""].join(" ")}
    >
      {children}
    </button>
  );
};
