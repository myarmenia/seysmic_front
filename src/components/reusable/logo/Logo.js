import React from "react";
import styles from "./logo.module.css";
import logo_rounded from "../../../assets/main/logo-rounded.svg";

export const Logo = ({ color }) => {
  return (
    <div className={styles.logo}>
      <img alt="" src={logo_rounded} />
      <span className={styles.span + " " + color}>
        Международный Центр глобального мониторинга сейсмического риска
      </span>
    </div>
  );
};
