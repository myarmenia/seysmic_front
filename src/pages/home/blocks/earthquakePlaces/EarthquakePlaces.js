import React from "react";
import { SwiperSlide } from "swiper/react";
import quake_img from "../../../../assets/main/home/quake.svg";
import img from "../../../../assets/main/home/world_map_blue.svg";
import { CustomBtn } from "../../../../components/forms";
import {
  Container,
  Gradient,
  SwiperNavigation,
} from "../../../../components/reusable";
import styles from "./earthquakePlaces.module.css";
import { generateArray } from "../../../../helper";

const data = generateArray(6, {
  src: quake_img,
  title: "Землетрясение в Турции",
  description:
    "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
  date: "06.02.2023",
});

export const EarthquakePlaces = () => {
  return (
    <div>
      <img className="w-full object-cover mb-[-17%]" src={img} alt="" />
      <Container>
        <SwiperNavigation className="h-[622px]">
          {data.map((elem, i) => (
            <SwiperSlide key={i}>
              <Box {...elem} />
            </SwiperSlide>
          ))}
        </SwiperNavigation>
      </Container>
    </div>
  );
};

const Box = ({ src, title, description, date }) => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <img
          className="object-contain mt-[-50%] max-w-[160px] rounded-[20px] border-[5px] border-[#fff] shadow-light"
          src={src}
          alt=""
        />
        <Gradient>{title}</Gradient>
        <span className="text-[#909090]">{date}</span>
        <p className="text-[#3C3C3C] text-center">{description}</p>
        <CustomBtn>Узнать больше</CustomBtn>
      </div>
    </div>
  );
};
