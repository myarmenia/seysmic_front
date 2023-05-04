import React from "react";
import styles from "./allQuakes.module.css";
import {
  Container,
  Title,
  ViewPosition,
} from "../../../../../components/reusable";
import { generateArray } from "../../../../../helper";

const data = generateArray(25, {
  magnitude: "M=6.2",
  title: "42.40 N 13.32 E H=10 км",
  country: "Италия (L'Aquila)",
  date: "2009.04.06",
});

export const AllQuakes = () => {
  return (
    <Container className="py-16 flex flex-col gap-6">
      <Title>
        Мониторинг и прогноз землетрясений в ONLine режиме в 2009–2023 гг.
      </Title>
      <p className="text-[32px] text-[#938E97] text-center leading-[150%] med-1200:text-[28px] med-900:text-[24px]">
        26 землетрясения были успешно спрогнозированы (из них 4 – краткосрочно,
        4* – неточно по одному параметру, 2 прогноза отрицательные)
      </p>
      <div className="flex flex-col gap-[24px] med-900:gap-4">
        {data.map((el, i) => (
          <Item {...el} delay={i / 3} key={i} />
        ))}
      </div>
    </Container>
  );
};

const Item = ({ magnitude, title, country, date, delay }) => {
  return (
    <ViewPosition>
      {(bool) => (
        <div
          style={{
            opacity: bool ? 1 : 0,
            transform: bool ? "translateY(0)" : "translateY(50px)",
            transitionDelay: delay + "ms",
          }}
          className={styles.item}
        >
          <div className={styles.magnitude}>{magnitude}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.country}>{country}</div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
    </ViewPosition>
  );
};
