import React from "react";
import { Container } from "../../../../components/reusable";
import styles from "./globuses.module.css";
import { globuses } from "../../../../store/constats";
import { Link } from "react-router-dom";
import ad_img from "../../../../assets/main/home/ad1.svg";

export const Globuses = () => {
  return (
    <>
      <Container className="overflow-hidden grid gap-y-10 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] justify-items-center py-[80px] med-400:grid-cols-2 med-400:gap-5 med-400:py-[30px]">
        {globuses.map((el, i) => (
          <Globus key={i} {...el} />
        ))}
      </Container>
      {/* <Container bg={styles.ad_box} className="h-[200px]"></Container> */}
      <div className="w-full relative py-[52px] med-400:py-[30px]">
        <img
          className="w-full min-h-[136px] med-400:object-cover"
          src={ad_img}
          alt=""
        />
        <p className="max-w-[90%] text-white w-max py-2 px-5 bg-[#00194A] font-bold text-[24px] text-center absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 med-400:text-base med-400:leading-5">
          Землетрясения нельзя остановить, но можно предсказать!
        </p>
      </div>
    </>
  );
};

const Globus = ({ title, src, description, to }) => {
  return (
    <Link to={to} className={styles.globus}>
      <div className={styles.globus_desc}>
        <span>{title}</span>
        <p>{description}</p>
      </div>

      <img className="bg-cover" src={src} alt="" />
      <p className="text-lg leading-5 text-center text-dark-blue med-400:text-sm med-400:leading-4">
        {title}
      </p>
    </Link>
  );
};
