import React from "react";
import styles from "./burger.module.css";

export const Burger = ({ className = "", ...props }) => {
  return (
    <div {...props} className={[styles.burger, className].join(" ")}>
      <div />
      <div />
      <div />
    </div>
  );
};
