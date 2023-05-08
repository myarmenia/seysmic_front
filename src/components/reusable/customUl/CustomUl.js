import React from "react";
import styles from "./customUl.module.css";
import { Container } from "../container/Container";
import { Title } from "../titles/Title";
import { Ul } from "../ul/Ul";

const splitToArrays = (data) => {
  const half = Math.ceil(data.length / 2);
  return [data.slice(0, half), data.slice(half, data.length)];
};

export const CustomUl = ({ title, subtitle, data }) => {
  const [data1, data2] = splitToArrays(data);
  return (
    <Container
      bg={styles.bg}
      className="py-[48px] flex flex-col gap-[50px] med-600:gap-5 med-600:py-5"
    >
      <div className="mb-[40px] med-600:mb-3">
        <Title>{title}</Title>
        {subtitle && <p className="text-[32px] text-center med-600:text-base">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-[auto_1px_auto] gap-[65px] med-900:grid-cols-1 med-900:gap-[18px]">
        <Ul data={data1} className={styles.ul} />
        <div className={styles.hr} />
        <Ul data={data2} className={styles.ul} />
      </div>
    </Container>
  );
};
