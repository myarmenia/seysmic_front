import React from "react";
import img1 from "../../../../assets/trash/home/globuses/globus1.svg";
import { Container } from "../../../../components/reusable";
import styles from "./globuses.module.css";
import { generateArray } from "../../../../helper";

const images = generateArray(4, {
  title: "Глобальный мониторинг",
  src: img1,
  description:
    "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
});

export const Globuses = () => {
  return (
    <>
      <Container className="overflow-hidden grid gap-y-10 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] justify-items-center py-[80px]">
        {images.map(({ description, src, title }, i) => (
          <Globus key={i} {...{ description, src, title }} />
        ))}
      </Container>
      <Container bg={styles.ad_box} className="h-[200px]"></Container>
    </>
  );
};

const Globus = ({ title, src, description }) => {
  return (
    <div className={styles.globus}>
      <div className={styles.globus_desc}>
        <span>{title}</span>
        <p>{description}</p>
      </div>

      <img src={src} alt="" />
      <p className="text-lg leading-5 text-center text-dark-blue">{title}</p>
    </div>
  );
};
