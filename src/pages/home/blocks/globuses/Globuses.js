import React, { useEffect, useState } from "react";
import styles from "./globuses.module.css";
import { Container } from "../../../../components/reusable";
import img1 from "../../../../assets/trash/home/globuses/globus1.svg";

const images = [
  {
    title: "Глобальный мониторинг",
    src: img1,
    description:
      "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
  },
  {
    title: "Глобальный мониторинг",
    src: img1,
    description:
      "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
  },
  {
    title: "Глобальный мониторинг",
    src: img1,
    description:
      "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
  },
  {
    title: "Глобальный мониторинг",
    src: img1,
    description:
      "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
  },
];

export const Globuses = () => {
  return (
    <>
      <Container className="flex justify-around gap-5 py-[80px]">
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
