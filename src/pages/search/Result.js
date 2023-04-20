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
        {describtion.split(search).map((text, i) => {
          if (i < describtion.split(search).length - 1) {
            return (
              <Fragment key={i}>
                {text}
                <span className="text-[#363636] font-bold text-[19px]">
                  {search}
                </span>
              </Fragment>
            );
          }
          return text;
        })}
      </p>
    </div>
  );
};
