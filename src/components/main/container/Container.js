import React from "react";
import styles from "./container.module.css";

export const Container = () => {
  return (
    <div className={[styles.my_container, "main_container"].join(" ")}>
      Container
    </div>
  );
};
