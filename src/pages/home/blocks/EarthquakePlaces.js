import React from "react";
import { SwiperSlide } from "swiper/react";
import quake_img from "../../../assets/main/home/quake.svg";
import img from "../../../assets/main/home/world_map_blue.svg";
import { QuakeBox as Box } from "../../../components/main";
import { Container, SwiperNavigation } from "../../../components/reusable";
import { generateArray } from "../../../helper";

const data = generateArray(6, {
  image: quake_img,
  title: "Землетрясение в Турции",
  description:
    "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
  date: "06.02.2023",
});

export const EarthquakePlaces = () => {
  return (
    <div>
      <img
        className="w-full object-cover mb-[-17%] min-h-[307px] med-400:mb-[-69%]"
        src={img}
        alt=""
      />
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
