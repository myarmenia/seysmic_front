import React from "react";
// import styles from "./pressRelease.module.css";
import { useLoaderData } from "react-router";
import { SwiperSlide } from "swiper/react";
import h1_icon from "../../../assets/trash/home/h1.svg";
import organization from "../../../assets/trash/home/organization.svg";
import { CustomBtn } from "../../../components/forms";
import { PressReleaseBox } from "../../../components/cards";
import {
  Container,
  SwiperNavigation,
  Title,
} from "../../../components/reusable";
import { Link } from "react-router-dom";
import { getLang } from "../../../helper";

// const data = {
//   title: "Название организации",
//   description:
//     "Компания Терморобот занимается производством котельного оборудования с 2010 г.",
//   icon: h1_icon,
//   image: organization,
//   date: "24.02.2023",
//   time: "16:00",
//   to: "/press-release/1",
// };

export const PressRelease = () => {
  const { press_release } = useLoaderData();
  return (
    <Container
      bg="bg-[#F0F2F5]"
      className="flex flex-col gap-[44px] py-[42px] med-600:gap-[10px]"
    >
      <Title>Пресс-релиз</Title>
      <SwiperNavigation className="!py-5 med-600:!px-0">
        {press_release.map((el, i) => (
          <SwiperSlide key={i}>
            <PressReleaseBox {...el} />
          </SwiperSlide>
        ))}
      </SwiperNavigation>
      <Link className="mx-auto" to={getLang("/press-release")}>
        <CustomBtn transparent>Узнать больше</CustomBtn>
      </Link>
    </Container>
  );
};
