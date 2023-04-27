import React from "react";
import styles from "./monitoringBox.module.css";

export const MonitoringBox = ({
  title = "Очаговой зоны землетрясения на границе Иран-Ирак",
}) => {
  return (
    <div className={styles.box}>
      <div className="flex flex-col gap-2">
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.date}>24.02.2023</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className={styles.tag}>
          #теги#теги#теги#теги#теги#теги#теги#теги#
        </div>
        <div className={styles.img_box}>
          <div className={styles.img}></div>
          <div className={styles.img}></div>
        </div>
        <div className={styles.img_text}>
          М=7.3 (слева) и прогноз этого землетрясения в СС Загрос по МСЭ
          (справа) во время Презентации в ГК Росатом
        </div>
      </div>
    </div>
  );
};
