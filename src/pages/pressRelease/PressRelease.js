import React from "react";
import { PressReleaseBox } from "../home/blocks";
import { Container, Title } from "../../components/reusable";
import { generateArray } from "../../helper";
import h1_icon from "../../assets/trash/home/h1.svg";
import organization from "../../assets/trash/home/organization.svg";

const data = generateArray(8, {
  title: "Название организации",
  describtion:
    "Компания Терморобот занимается производством котельного оборудования с 2010 г.",
  icon: h1_icon,
  image: organization,
  date: "24.02.2023",
  time: "16:00",
});

export const PressRelease = () => {
  return (
    <Container bg="bg-[#F0F2F5]" className="flex flex-col gap-[44px] py-[42px]">
      <Title>Пресс-релиз</Title>
      <div className="flex  w-full flex-wrap gap-[20px] ">
        {data.map((el, i) => (
          <div className="w-[32%] min-w-[297px]">
            <PressReleaseBox {...el} />
          </div>
        ))}
      </div>
    </Container>
  );
};
