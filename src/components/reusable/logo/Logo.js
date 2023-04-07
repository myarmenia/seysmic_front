import React from "react";
import styles from "./logo.module.css";
import logo_rounded from "../../../assets/main/logo-rounded.svg";
import { Link } from "react-router-dom";

export const Logo = ({ color, className = "" }) => {
  return (
    <Link to={"/home"} className={[styles.logo, className].join(" ")}>
      <img alt="" src={logo_rounded} />
      <span className={styles.span + " " + color}>
        Международный Центр глобального мониторинга сейсмического риска
      </span>
    </Link>
  );
};
