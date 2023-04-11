import React from "react";
import { Container } from "../../../../components/reusable";
import styles from "./globuses.module.css";
import { globuses } from "../../../../store/constats";
import { Link } from "react-router-dom";
import ad_img from "../../../../assets/main/home/ad1.svg";

export const Globuses = () => {
  return (
    <>
      <Container className={styles.globuses}>
        {globuses.map((el, i) => (
          <Globus key={i} {...el} />
        ))}
      </Container>
      <div className="w-full relative py-[52px] med-400:py-[30px]">
        <img
          className="w-full min-h-[136px] med-1200:object-cover"
          src={ad_img}
          alt=""
        />
        <p className={styles.ad_p}>
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
      <p className={styles.globus_title}>{title}</p>
    </Link>
  );
};
