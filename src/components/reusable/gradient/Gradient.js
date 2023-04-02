import React from "react";
import styles from "./gradient.module.css";

export const Gradient = ({ children, className="" }) => {
  return <p className={[styles.p, className].join(" ")}>{children}</p>;
};
