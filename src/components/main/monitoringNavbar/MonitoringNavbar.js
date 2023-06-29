import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./monitoringNavbar.module.css";
import { NavLink, useLocation, useParams } from "react-router-dom";
import useMedia from "../../../hooks/useMedia";
import { globuses } from "../../../store/constats";
import chev_down from "../../../assets/icons/chev-down-gray-big.svg";

export const MonitoringNavbar = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const media = useMedia(900);
  const ref = useRef(null);
  const { pathname } = useLocation();
  const { lang } = useParams();
  const openHandler = () => {
    setOpen((p) => !p);
  };

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
      <div
        ref={ref}
        className={styles.boxes}
        style={{
          height: open ? 70 + "px" : lang === "en" ? 514 + "px" : 495 + "px",
        }}
      >
        {globuses[lang]?.map((el, i) => (
          <Box key={i} {...el} />
        ))}
      </div>
      {!media && (
        <div
          className="z-[10] p-1 py-2 bg-[#F7F7F7] flex justify-center"
          onClick={openHandler}
          style={{
            rotate: open ? "0deg" : "180deg",
          }}
        >
          <img
            loading="lazy"
            className={styles.chev_down}
            src={chev_down}
            alt=""
          />
        </div>
      )}
    </nav>
  );
};

const Box = ({ title, src, to }) => {
  return (
    <NavLink
      to={to()}
      end
      className={({ isActive }) =>
        `${isActive ? styles.active : ""} ${styles.nav_item}`
      }
    >
      <img loading="lazy" src={src} className="med-600:w-[9vw]" alt="" />
      <span>{title}</span>
    </NavLink>
  );
};
