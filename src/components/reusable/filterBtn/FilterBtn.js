import React from "react";
import styles from "./filterBtn.module.css";

export const FilterBtn = ({
  children,
  className = "",
  active,
  type = "button",
  ...props
}) => {
  return (
    <button
      {...props}
      className={[styles.btn, className, active ? styles.active : ""].join(" ")}
      type={type}
    >
      {children}
    </button>
  );
};
