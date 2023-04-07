import React from "react";
import styles from "./pressRelease.module.css";
import {
  Container,
  SwiperNavigation,
  Title,
} from "../../../../components/reusable";
import { CustomBtn } from "../../../../components/forms";
import h1_icon from "../../../../assets/trash/home/h1.svg";
import organization from "../../../../assets/trash/home/organization.svg";
import { SwiperSlide } from "swiper/react";
import { generateArray } from "../../../../helper";
import { PressReleaseBox } from "../../../../components/main";

const data = generateArray(5, {
  title: "Название организации",
  description:
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

      <SwiperNavigation className="!py-5">
        {data.map((el, i) => (
          <SwiperSlide key={i}>
            <PressReleaseBox {...el} />
          </SwiperSlide>
        ))}
      </SwiperNavigation>
          
      <CustomBtn className="mx-auto">Узнать больше</CustomBtn>
    </Container>
  );
};
