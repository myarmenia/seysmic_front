import React from "react";
import styles from "./technologiesBlock.module.css";
import { Title } from "../../../components/reusable";

export const AccumulatedExperience = () => {
  return (
    <div className="mt-[60px]">
      <div className="flex flex-col gap-[20px] justify-between">
      <Title>Накопленный опыт и апробация</Title>
        <div className={styles.accumulator}></div>
        <p className=" text-xl text-justify text-black mt-[92px]">
          В On-Line режиме на сайте www.geoq.ru с 2008 по 2012 гг. было
          прогнозировано 18 землетрясений. На основе новых разработок к 2023
          году выявлено более 300 сейсмических систем верхнего энергетического
          уровня, расположенных на территории более 80 стран мира. КТ
          разрабатывалась и апробировалась на протяжении 30 лет. С 1988 года
          были сделаны многочисленные прогнозы землетрясений по всему миру в том
          числе в Калифорнии, в Италии, в Китае, в Иране, в Турции и Японии.
        </p>
      </div>
    </div>
  );
};
