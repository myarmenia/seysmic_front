import React from "react";
import {
  Container,
  Gradient,
  Title,
  ViewPosition,
} from "../../../../../components/reusable";
import styles from "./nationalScheme.module.css";

const data = [
  {
    title: "Глобальный и Ближневосточный",
    describtion: "С Центром в Армении (Ереван) функционирует",
  },
  {
    title: "Азиатский",
    describtion: "С центром в Китае (Пекин) ведутся переговоры",
  },
  {
    title: "Евроазиатский (РФ)",
    describtion: "Центр мониторинга в России (Москва) функционирует",
  },
  {
    title: "Страны BRICS",
    describtion: "Центр мониторинга в России (Москва) функционирует",
  },
  {
    title: "Средиземноморский",
    describtion: "С Центром на Мальте открыт",
  },
  {
    title: "Американский",
    describtion: "С центром в Коста-Рика планируется",
  },
];

export const NationalScheme = () => {
  return (
    <div className="py-8">
      <Title className="py-5">
        ПЛАН ОТКРЫТИЯ ГЛОБАЛЬНЫХ И РЕГИОНАЛЬНЫХ ЦЕНТРОВ
      </Title>
      <Container bg={styles.bg} className={styles.my_container}>
        {data.map((el, i) => (
          <Box delay={i * 100} {...el} key={i} />
        ))}
        <div className={styles["line-through"]} />
      </Container>
    </div>
  );
};

const Box = ({ title, describtion, delay }) => {
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
          <div className="shrink-0 w-5 h-5 rounded-full bg-[linear-gradient(180deg,_#0026AA_0%,_#30CFFF_100%)]" />
          <div className="flex flex-col gap-1 ">
            <Gradient className="text-[32px] med-600:text-[24px]">
              {title}
            </Gradient>
            <span className="text-[24px] med-600:text-[18px]">
              {describtion}
            </span>
          </div>
        </div>
      )}
    </ViewPosition>
  );
};
