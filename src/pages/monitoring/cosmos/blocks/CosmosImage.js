import React from "react";
import { Container, Title } from "../../../../components/reusable";
import styles from "../blocks/cosmos.module.css";
import { useTranslation } from "../../../../hooks";

export const CosmosImage = () => {
  const { schema_processing: language } = useTranslation().language;
  return (
    <Container bg="relative max-w-[1440px] mx-auto">
      <Title>{language?.title}</Title>
      <div className={styles.cosmos_img_box}>
        <p>{language?.text1}</p>
        <p>{language?.text4}</p>
        <div className={styles.line}></div>
        <span>{language?.text3}</span>
      </div>
    </Container>
  );
};
