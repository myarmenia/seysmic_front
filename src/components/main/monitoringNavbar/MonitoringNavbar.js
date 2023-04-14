import React from "react";
import styles from "./monitoringNavbar.module.css";
import { globuses } from "../../../store/constats";
import { NavLink } from "react-router-dom";

export const MonitoringNavbar = ({ className = "" }) => {
  return (
    <div className={[styles.nav, className].join(" ")}>
      {globuses.map((el, i) => (
        <Box key={i} {...el} />
      ))}
    </div>
  );
};

const Box = ({ title, src, to }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `${isActive ? styles.active : ""} ${styles.nav_item}`
      }
    >
      <img src={src} className="med-600:w-[9vw]" alt="" />
      <span>{title}</span>
    </NavLink>
  );
};
