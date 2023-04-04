import React from "react";
import styles from "./rotateCountries.module.css";
import img from "../../../../assets/main/monitoring/globus.svg";

export const RotateCountries = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.img_box}>
        <img src={img} alt="" />
        <div className={styles.nums}>
          <div className={styles.num}>
            <span>1</span>
          </div>
          <div className={styles.num}>
            <span>2</span>
          </div>
          <div className={styles.num}>
            <span>3</span>
          </div>
          <div className={styles.num}>
            <span>4</span>
          </div>
          <div className={styles.num}>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};
