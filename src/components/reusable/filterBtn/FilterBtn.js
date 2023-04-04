import React from "react";
import styles from "./filterBtn.module.css";

export const FilterBtn = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
