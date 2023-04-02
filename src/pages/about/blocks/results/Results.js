import React from "react";
import styles from "./results.module.css";
import { Container, Gradient, Title } from "../../../../components/reusable";

const results = [
  {
    bg: "linear-gradient(270deg, #BF2F96 -4.8%, #C3338B 8.23%, #CF4070 31.28%, #E35544 60.35%, #FF7208 95.43%)",
    title:
      "В области изучения Земли методом ее собственных колебаний (1971–1994)",
  },
  {
    bg: "linear-gradient(78.57deg, #4F8E4A -8.35%, #18C248 83.04%)",
    title: "В области прогноза землетрясений (1983–2023)",
  },
  {
    bg: "linear-gradient(90deg, #FF7208 -4.8%, #FE7C07 12.24%, #FD9706 41.31%, #FCC305 78.39%, #FCDA05 95.43%)",
    title:
      "В области сейсмотектоники, дистанционного зондирования и преподавания (1980–1987)",
  },
  {
    bg: "linear-gradient(90deg, #085CFF -4.8%, #05D0FC 95.43%)",
    title:
      "В области добычи нефти и газа, индуцированной сейсмичности (2013-2019)",
  },
  {
    bg: "linear-gradient(270deg, #00B8C4 -4.8%, #04BBB9 30.28%, #0FC39E 89.42%, #11C49C 95.43%)",
    title:
      "В области оценки сейсмического воздействия на здания и сооружения (1988–1994)",
  },
  {
    bg: "linear-gradient(270deg, #19D9E6 -4.8%, #114EC4 95.43%)",
    title: "В области энтропийной сейсмологии и космологии (2013–2023)",
  },
];

export const Results = () => {
  return (
    <Container
      bg="bg-[#F0F2F5]"
      className="pt-[45px] pb-[80px] flex flex-col gap-[55px]"
    >
      <Title>Основные научные результаты</Title>
      <div className="grid grid-cols-2 gap-x-5 gap-y-[23px] justify-items-center med-900:grid-cols-1">
        {results.map((el, i) => (
          <Box index={i + 1} {...el} key={i} />
        ))}
      </div>
    </Container>
  );
};

const Box = ({ bg, title, index }) => {
  return (
    <div
      style={{
        background: bg,
      }}
      className={styles.box}
    >
      <div className={styles.box_index}>
        <p
          style={{
            backgroundImage: bg,
          }}
        >
          {index}
        </p>
      </div>
      <p>{title}</p>
    </div>
  );
};
