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
import link_to from "../../../../assets/icons/link-to.svg";
import { SwiperSlide } from "swiper/react";
import { generateArray } from "../../../../helper";

const data = generateArray(5, {
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
      <div>
        <SwiperNavigation className="!py-5">
          {data.map((el, i) => (
            <SwiperSlide key={i}>
              <Box {...el} />
            </SwiperSlide>
          ))}
        </SwiperNavigation>
      </div>
      <CustomBtn className="mx-auto">Узнать больше</CustomBtn>
    </Container>
  );
};

const Box = ({ title, describtion, icon, image, date, time }) => {
  return (
    <div className="bg-white flex flex-col gap-2 shadow-[0px_2px_11px_rgba(0,_0,_0,_0.15)] px-[23px] py-[22px] rounded-[6px]">
      <div className="flex justify-between gap-5">
        <div className="flex gap-3 items-center">
          <img src={icon} alt="" />
          <div className="flex flex-col gap-[6px]">
            <span className="font-bold text-dark-blue text-[11px]">
              {title}
            </span>
            <span className="text-[#415455] text-[10px]">
              {date} {time}
            </span>
          </div>
        </div>
        <img src={link_to} alt="" />
      </div>
      <p>{describtion}</p>
      <img src={image} alt="" />
    </div>
  );
};
