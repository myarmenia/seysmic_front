import React, { useRef } from "react";
import { Container, Title } from "../../../../components/reusable";
import { useAnimation } from "../../../../hooks";
import styles from "./results.module.css";

const results = [
  {
    title:
      "В области изучения Земли методом ее собственных колебаний (1971–1994)",
  },
  {
    title: "В области прогноза землетрясений (1983–2023)",
  },
  {
    title:
      "В области сейсмотектоники, дистанционного зондирования и преподавания (1980–1987)",
  },
  {
    title:
      "В области добычи нефти и газа, индуцированной сейсмичности (2013-2019)",
  },
  {
    title:
      "В области оценки сейсмического воздействия на здания и сооружения (1988–1994)",
  },
  {
    title: "В области энтропийной сейсмологии и космологии (2013–2023)",
  },
];

export const Results = () => {
  const ref = useRef(null);
  const bool = useAnimation(ref);
  return (
    <Container
      myRef={ref}
      bg="bg-[#F0F2F5]"
      className="pt-[45px] pb-[80px] flex flex-col gap-[55px] med-600:gap-[35px]"
    >
      <Title>Основные научные результаты</Title>
      <div className="grid grid-cols-2 gap-x-5 gap-y-[26px] justify-items-center med-900:grid-cols-1">
        {results.map((el, i) => (
          <Box
            key={i}
            index={i + 1}
            {...el}
            style={{
              opacity: bool ? 1 : 0,
              transform: bool ? "translateY(0)" : "translateY(50px)",
              transitionDelay: `${i / 10}s`,
            }}
          />
        ))}
      </div>
    </Container>
  );
};

const Box = ({ title, index, style }) => {
  return (
    <div className={styles.box} style={style}>
      <div className={styles.box_index}>
        <p>{index}</p>
      </div>
      <p>{title}</p>
    </div>
  );
};
