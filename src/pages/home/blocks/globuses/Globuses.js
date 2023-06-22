import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ad_img from "../../../../assets/gif.gif";
import { Container } from "../../../../components/reusable";
import { globuses } from "../../../../store/constats";
import styles from "./globuses.module.css";
import { useTranslation } from "../../../../hooks";

export const Globuses = () => {
  const { lang } = useParams();
  const { home: language } = useTranslation().language;

  return (
    <>
      <Container className={styles.globuses} bg_style={{ overflow: "unset" }}>
        {globuses[lang]?.map((el, i) => (
          <Globus key={i} {...el} />
        ))}
      </Container>
      <Text title={language?.animation_text} />
    </>
  );
};
// #060615
const Globus = ({ title, src, description, to }) => {
  return (
    <Link to={to} className={styles.globus}>
      <div className={styles.globus_desc}>
        <span>{title}</span>
        <p>{description}</p>
      </div>

      <div className={styles.globus_box}>
        <img
          loading="lazy"
          className="bg-cover shadow-normal rounded-full"
          src={src}
          alt=""
        />
        <p className={styles.globus_title}>{title}</p>
      </div>
    </Link>
  );
};

const Text = ({ title }) => {
  return (
    <div className="w-full relative py-[52px] med-600:py-[30px]">
      <img
        loading="lazy"
        className="w-full min-h-[136px] med-1200:object-cover h-[80px]"
        src={ad_img}
        alt=""
      />
      <p className={styles.ad_p}>
        {title.split("").map((el, i) => (
          <span
            style={{
              animationDelay: i * title.split("").length + "ms",
            }}
            key={i}>
            {el}
          </span>
        ))}
      </p>
    </div>
  );
};
