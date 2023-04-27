import React from "react";
import { Container, Title } from "../../../../components/reusable";
import styles from "../blocks/regionalBlock.module.css";

export const MonitoringExample = () => {
  return (
    <Container>
      <Title>ПРИМЕР МОНИТОРИНГА</Title>
      <p>
        Oчаговой зоны землетрясения на границе Иран-Ирак от 12 ноября 2017,
        М=7.3 (слева) и прогноз этого землетрясения в СС Загрос по МСЭ (справа)
        во время Презентации в ГК Росатом
      </p>
      <div className={styles.img_box}>
      </div>
    </Container>
  );
};
