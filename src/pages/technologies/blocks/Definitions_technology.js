import React from "react";
import { Title, ViewPosition } from "../../../components/reusable";
import { generateArray } from "../../../helper";
import styles from "../../monitoring/main/blocks/allQuakes/allQuakes.module.css";
import { useTranslation } from "../../../hooks";

// const data1 = generateArray(11, {
//   name: 'Плотность состояния сейсмической системы (S) ',
//   about: 'Объем литосферы, в котором происходит подготовка сильных землетрясений',
// });
export default function Definitions_technology() {
  const { technology: language } = useTranslation().language;

  return (
    <div className="pt-10">
      <Title>{language.DefinationsTechnology.title}</Title>
      <p className="text-[32px] text-[#938E97] text-center leading-[150%] med-1200:text-[28px] med-900:text-[18px] pb-8">
        {language.DefinationsTechnology.subtitle}
      </p>
      <div className="flex flex-col gap-5">
        {language.DefinationsTechnology.data.map((el, i) => (
          <Item delay={i / 3} key={i} {...el} />
        ))}
      </div>
    </div>
  );
}

const Item = ({ name, about, delay }) => {
  return (
    <ViewPosition>
      {(bool) => (
        <div
          style={{
            opacity: bool ? 1 : 0,
            transform: bool ? "translateY(0)" : "translateY(50px)",
            transitionDelay: delay + "ms",
            height: "68px",
          }}
          className={styles.item2}>
          <div className={styles.magnitude2}>{name}</div>
          <div className={styles.wrapper}>
            <div className={styles.title2}>
              <p className="text-left w-full">{about}</p>
            </div>
            {/* {subtitle && <div className={styles.title}>{subtitle}</div>} */}
            {/* <div className={styles.country}>{country}</div> */}
          </div>
          {/* <div className={styles.date}>{date}</div> */}
        </div>
      )}
    </ViewPosition>
  );
};
