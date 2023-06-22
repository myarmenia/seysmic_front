import React, { useMemo } from "react";
import styles from "./logo.module.css";
import logo_rounded from "../../../assets/main/logo-rounded.svg";
import { Link, useParams } from "react-router-dom";
import { getLang } from "../../../helper";

export const Logo = ({ color, className = "" }) => {
  const { lang } = useParams();
  const text = useMemo(() => {
    if (lang === "ru") {
      return "Международный Центр глобального мониторинга сейсмического риска";
    } else if (lang === "am") {
      return "Սեյսմիկ ռիսկի գլոբալ մոնիտորինգի միջազգային կենտրոն";
    } else if (lang === "en") {
      return "International Center of the Seismic Risk Global Monitoring";
    }
    return "";
  }, [lang]);
  return (
    <Link to={getLang("/home")} className={[styles.logo, className].join(" ")}>
      <img loading="lazy" alt="" src={logo_rounded} />
      <span className={styles.span + " " + color}>{text}</span>
    </Link>
  );
};
