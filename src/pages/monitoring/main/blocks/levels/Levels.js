import React from "react";
import styles from "./levels.module.css";
import { Container, Title } from "../../../../../components/reusable";
import flag1 from "../../../../../assets/main/monitoring/main/flags/flag1.svg";
import flag2 from "../../../../../assets/main/monitoring/main/flags/flag2.svg";
import flag3 from "../../../../../assets/main/monitoring/main/flags/flag3.svg";
import flag4 from "../../../../../assets/main/monitoring/main/flags/flag4.svg";

const items = [
  {
    flag: flag1,
    text: "надежный — число завершившихся сейсмических циклов ≥ 15;",
    imgClassName: "med-900:w-[20%]",
  },
  {
    flag: flag2,
    text: "хороший — число завершившихся сейсмических циклов ≥ 10;",
    imgClassName: "med-900:w-[27%]",
  },
  {
    flag: flag3,
    text: "посредственный— число завершившихся сейсмических циклов ≥ 5;",
    imgClassName: "med-900:w-[34%]",
  },
  {
    flag: flag4,
    text: "плохой — число завершившихся сейсмических циклов от 2 до 5 ",
    imgClassName: "med-900:w-[41%]",
  },
];
export const Levels = () => {
  return (
    <div className="py-8">
      <Title className="py-5">
        СС ПО НАДЕЖНОСТИ ПРОГНОЗОВ ПОДРАЗДЕЛЯЮТСЯ НА ЧЕТЫРЕ УРОВНЯ
      </Title>
      <Container bg={styles.bg} className={styles.my_container}>
        <div className="flex flex-col gap-[24px] justify-center relative">
          {items.map((el, i) => (
            <Box {...el} key={i} />
          ))}
        </div>
        <p className={styles.describtion}>
          После каждого сильного землетрясения качество прогноза улучшается и со
          временем все СС перейдут на первый уровень надежности.
        </p>
      </Container>
    </div>
  );
};

const Box = ({ text, flag, imgClassName }) => {
  return (
    <div className="flex gap-6 items-center">
      <img
        className={"h-[135px] shrink-[1] med-900:h-fit " + imgClassName}
        src={flag}
        alt="asdfas"
      />
      <p className="font-extrabold text-[26px] mt-5 shrink-[2] med-900:text-[12px]">{text}</p>
    </div>
  );
};
