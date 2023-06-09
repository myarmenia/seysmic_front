import React from "react";
import {
  Container,
  CustomUl,
  Title,
  TitleBorder,
} from "../../../components/reusable";
import {
  AllQuakes,
  Describtion,
  HaitiExample,
  Levels,
  Map,
  MonitoringTable,
  NationalScheme,
  QuakeSources,
} from "./blocks";

// Images
import bg_img from "../../../assets/main/monitoring/main/bg-img.svg";
import img1 from "../../../assets/main/monitoring/main/monitoring-img1.png";
import tableImg1 from "../../../assets/main/monitoring/main/table-imgs/table-img1.svg";
import { useEffect } from "react";
import axios from "axios";
import { useTranslation } from "../../../hooks";
import { AboutCoputerTechologies } from "./blocks/aboutCoputerTechologies/AboutCoputerTechologies";

const data = [
  {
    src: tableImg1,
    describtion:
      "Граница плит спрединг – плиты расходятся и образуется новая кора (Тип А)",
  },
  {
    src: tableImg1,
    describtion: "Граница столкновения плит (Тип B, D)",
  },
  {
    src: tableImg1,
    describtion: "Граница трансформных разломов (Тип C)",
  },
  {
    src: tableImg1,
    describtion: "Бывшие границы плит, теперь неактивные.",
  },
  {
    src: tableImg1,
    describtion:
      "Диффузные зоны – области накопления напряжений и образования микроплит (Типы А, В, С, D)",
  },
  {
    src: tableImg1,
    describtion: "Горячие точки",
  },
  {
    src: tableImg1,
    describtion: "Движение плит",
  },
];

export const MainMonitoring = () => {
  const { monitoring_and_prediction: language } = useTranslation().language;
  return (
    <>
      <Container className="pb-[50px] py-[var(--py)]">
        <Title className="mb-4">{language?.title}</Title>
        <TitleBorder title={language?.subTitle} />
        <img loading="lazy" className="py-5" src={img1} alt="" />
        {/* <MonitoringTable {...{ data }} /> */}
        <QuakeSources />
      </Container>
      <div
        className="relative w-full min-h-[247.88px] med-600:object-cover"
        style={{
          background:
            "linear-gradient(269.98deg, #0026AA -1.43%, #1267CB 51.39%, #0026AA 99.98%)",
        }}>
        {/* <img
          className="w-full min-h-[247.88px] med-600:object-cover"
          src={bg_img}
          alt=""
        /> */}
        <Container
          bg="absolute top-0 left-0 w-full h-full"
          className="h-full flex justify-center items-center">
          <p className="font-semibold text-[26px] text-white leading-[168.5%] py-3 text-center med-1200:text-[14px]">
            {language?.text}
          </p>
        </Container>
      </div>

      <Map />
      <AboutCoputerTechologies />
      <CustomUl
        title={language?.forecast_accuracy?.title}
        // subtitle={language?.forecast_accuracy?.subtitlt}
        data={language?.forecast_accuracy?.data}
      />
      {/* <NationalScheme /> */}
      <Levels />
      {/* <Describtion /> */}
      <HaitiExample />
      <AllQuakes />
    </>
  );
};
