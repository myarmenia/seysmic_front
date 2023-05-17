import React, { useMemo, useState } from "react";
import styles from "./monitoringNavbar.module.css";
import { NavLink, useLocation, useParams } from "react-router-dom";
import useMedia from "../../../hooks/useMedia";
import { globuses as globus1 } from "../../../store/constats";

export const MonitoringNavbar = ({ className = "" }) => {
  const media = useMedia(1000);
  const [open, setOpen] = useState(false);
  console.log(media);
  const { pathname } = useLocation();
  const { lang } = useParams();
  const globuses = useMemo(() => {
    return globus1[lang];
  }, [lang]);
  return (
    <nav
      className={[
        styles.nav,
        className,
        ["login", "registration"].some((e) => e === pathname.split("/")[2]) &&
          styles.hidden_nav,
        "home" === pathname.split("/")[2] && "hidden",
      ].join(" ")}>
      <div>aaaaaaaaaa</div>
      {globuses?.map((el, i) => (
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
      }>
      <img src={src} className="med-600:w-[9vw]" alt="" />
      <span>{title}</span>
    </NavLink>
  );
};
