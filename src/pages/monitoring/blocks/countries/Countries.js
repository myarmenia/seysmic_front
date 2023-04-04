import React from "react";
import styles from "./countries.module.css";
import img from "../../../../assets/main/monitoring/globus.svg";
import { MonitoringNavbar } from "../../../../components/main";

export const Countries = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.img_box}>
        <img src={img} alt="" className={styles.img} />
        <div className={styles.nums}>
          <div className={styles.num}>
            <div>1</div>
          </div>
          <div className={styles.num}>
            <div>2</div>
          </div>
          <div className={styles.num}>
            <div>3</div>
          </div>
          <div className={styles.num}>
            <div>4</div>
          </div>
          <div className={styles.num}>
            <div>5</div>
          </div>
        </div>
      </div>
      <MonitoringNavbar />
    </div>
  );
};
