import React from "react";
import { Container, Title } from "../../../../components/reusable";
import styles from "../blocks/regionalBlock.module.css";

export const MonitoringExample = () => {
  return (
    <Container>
      <Title>ПРИМЕР МОНИТОРИНГА</Title>
      <div className="border w-full h-[500px] grid ">
        <div className={styles.monitoring_box}>
          <h2 className={styles.title}>
            Очаговой зоны землетрясения на границе Иран-Ирак
          </h2>
          <div className={styles.date}>24.02.2023</div>
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
    </Container>
  );
};
