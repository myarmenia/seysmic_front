import React from "react";
import { Container } from "../../../../components/reusable";
import styles from "./globuses.module.css";
import { globuses } from "../../../../store/constats";

export const Globuses = () => {
  return (
    <>
      <Container className="overflow-hidden grid gap-y-10 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] justify-items-center py-[80px]">
        {globuses.map((el, i) => (
          <Globus key={i} {...el} />
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

      <img className="bg-cover" src={src} alt="" />
      <p className="text-lg leading-5 text-center text-dark-blue">{title}</p>
    </div>
  );
};
