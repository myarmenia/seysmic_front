import React from "react";
import { Container, Title } from "../../../../components/reusable";
import styles from "../blocks/regionalBlock.module.css";

export const SchemaProcessing = () => {
  return (
    <Container className="mb-[60px]">
      <Title>СХЕМА ОБРАБОТКИ КОСМИЧЕСКИХ СНИМКОВ</Title>
      <div className={styles.schema_processing}>
        <p>
          Схема поэтапной обработки космических снимков изображена ниже.
          <br /> Для конкретного региона выбирается спутник и с помощью
          специализированных программ выбирается первичное космическое
          изображение. Для обработки первичных изображений и для выделения
          линеаментов на космических снимках используются специализированные
          программы.
        </p>
      </div>
    </Container>
  );
};
