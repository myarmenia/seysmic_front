import React from "react";
import styles from "./monitoringNavbar.module.css";
import { globuses } from "../../../store/constats";
import { NavLink } from "react-router-dom";

export const MonitoringNavbar = () => {
  return (
    <div className={styles.nav}>
      {globuses.map((el, i) => (
        <Box key={i} {...el} />
      ))}
    </div>
  );
};

const Box = ({ title, src, to }) => {
  return (
    <NavLink to={to} className={styles.nav_item}>
      <img src={src} alt="" />
      <span>{title}</span>
    </NavLink>
  );
};
