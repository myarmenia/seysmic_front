import React from "react";
import styles from "./customUl.module.css";
import { Container } from "../container/Container";
import { Title } from "../titles/Title";
import { Ul } from "../ul/Ul";

export const CustomUl = ({ title, subtitle, data }) => {
  return (
    <Container
      bg={styles.bg}
      className="py-[48px] flex flex-col gap-[50px] med-600:gap-5"
    >
      <div className="mb-[40px] med-600:mb-3">
        <Title>{title}</Title>
        {subtitle && <p className="text-[32px] text-center">{subtitle}</p>}
      </div>
      <div className="relative">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full w-[1px] bg-[#6998AB] med-600:hidden" />
        <Ul data={data} className={styles.ul} />
      </div>
    </Container>
  );
};
