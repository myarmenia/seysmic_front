import React from "react";
import styles from "./container.module.css";

export const Container = ({
  children,
  className = "",
  style,
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
      <div {...{ style }} className={[styles.content, className].join(" ")}>
        {children}
      </div>
    </div>
  );
};
