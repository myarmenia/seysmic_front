import React from "react";

import styles from "../blocks/product.module.css";
import { Container, Title } from "../../../components/reusable";

export const ApplicationProduct = () => {
  return (
    <Container className="mt-[60px]">
      <Title>Области применения продукции </Title>
      <div className={styles.main}>
        <div>
          <div id={styles.box_img}>
            <div id={styles.box_img0}></div>
            <div id={styles.box_img1}></div>
            <div id={styles.box_img2}></div>
            <div id={styles.box_img3}></div>
            <div id={styles.box_img4}></div>
            <div id={styles.box_img5}></div>
          </div>
          <div id={styles.box_img_second}>
            <div id={styles.box_img_second0}></div>
            <div id={styles.box_img_second1}></div>
            <div id={styles.box_img_second2}></div>
          </div>
        </div>
      </div>
    </Container>
  );
};
