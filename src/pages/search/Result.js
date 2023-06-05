import React from "react";
import styles from "./search.module.css";
import { getLang } from "../../helper";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export const Result = ({ section, title, describtion, to, search }) => {
  return (
    <div className={styles.result}>
      <p className={styles.result_title}>{section}</p>
      <Link to={getLang(to)}>{title}</Link>
      <p className={styles.result_describtion}>
        <span
          className="text-[#363636] font-bold text-[19px] med-600:text-sm"
          dangerouslySetInnerHTML={{ __html: describtion }}></span>
      </p>
    </div>
  );
};
