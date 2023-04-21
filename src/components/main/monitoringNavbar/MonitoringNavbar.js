import React from "react";
import styles from "./monitoringNavbar.module.css";
import { globuses } from "../../../store/constats";
import { NavLink, useLocation } from "react-router-dom";

export const MonitoringNavbar = ({ className = "" }) => {
  const { pathname } = useLocation();
  return (
    <nav
      className={[
        styles.nav,
        className,
        ["login", "registration"].some((e) => e === pathname.split("/")[2]) &&
          styles.hidden_nav,
        "home" === pathname.split("/")[2] && "hidden",
      ].join(" ")}
    >
      {globuses.map((el, i) => (
        <Box key={i} {...el} />
      ))}
    </nav>
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
