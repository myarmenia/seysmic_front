import React from "react";
import img1 from "../../../../../assets/main/monitoring/main/sources/under-img.svg";
import img2 from "../../../../../assets/main/monitoring/main/sources/upper-img.svg";
import { Gradient, Title } from "../../../../../components/reusable";

const data = [
  {
    title: "Сброс",
    number: "А",
    img1: img1,
    img2: img2,
  },
  {
    title: "Сброс",
    number: "А",
    img1: img1,
    img2: img2,
  },
  {
    title: "Сброс",
    number: "А",
    img1: img1,
    img2: img2,
  },
  {
    title: "Сброс",
    number: "А",
    img1: img1,
    img2: img2,
  },
];

export const QuakeSources = () => {
  return (
    <div className="flex flex-col gap-7 py-20">
      <Title>Характерные Движения на границах плит</Title>
      <div className="flex gap-4 justify-around">
        {data?.length && data.map((el, i) => <Box key={i} {...el} />)}
      </div>
      <p className="text-[26px] text-center leading-[165%]">
        Основные типы А, В, С, D границ плит и характерные фокальные механизмы
        очагов землетрясений
      </p>
    </div>
  );
};

const Box = ({ title, number, img1, img2 }) => {
  return (
    <div className="flex gap-1">
      <Gradient className="text-[26px]">{number}</Gradient>
      <div className="flex flex-col gap-1 items-center">
        <div className="flex flex-col gap-2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <Gradient className="text-[26px] text-center w-full">{title}</Gradient>
      </div>
    </div>
  );
};
