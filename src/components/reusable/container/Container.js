import React from "react";
import styles from "./container.module.css";

export const Container = ({
  children,
  className = "",
  bg = "",
  bg_style,
  myRef,
}) => {
  return (
    <div
      style={bg_style}
      className={[styles.my_container, bg].join(" ")}
      ref={myRef}
    >
      <div className={[styles.content, className].join(" ")}>{children}</div>
    </div>
  );
};
