import React from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import quake_img from "../../../assets/main/home/quake.svg";
import img from "../../../assets/main/home/world_map_blue.svg";
import { QuakeBox as Box } from "../../../components/cards";
import { CustomBtn } from "../../../components/forms";
import { Container, SwiperNavigation } from "../../../components/reusable";
import { getLang } from "../../../helper";

const data = {
  image: quake_img,
  title: "Землетрясение в Турции",
  description:
    "Our private company LLC SeiEn was established in October 2022 in Yerevan, Armenia",
  date: "06.02.2023",
};

export const EarthquakePlaces = () => {
  const earth_quakes = useLoaderData().earth_quakes.map((el) => ({
    ...data,
    ...el,
    to: `/earth-quakes/${el.id}`,
    description: el.body.split("").slice(0, 68).join("") + "...",
    title: el.title.split("").slice(0, 20).join("") + "...",
  }));
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url('${img}')` }}
        className="absolute top-0 left-0 w-full h-[55%] bg-cover bg-center bg-fixed bg-no-repeat med-600:h-[48%]"
      />
      <Container className="flex flex-col pb-10 pt-[17%] gap-[44px] med-1200:pt-[23%] med-900:pt-[40%] med-600:gap-[10px]">
        <SwiperNavigation className="py-[50px] mt-[-50px] med-1200:mt-[-100px] med-900:mt-[-150px] med-600:py-[18px]">
          {earth_quakes.map((elem, i) => (
            <SwiperSlide key={i}>
              <Box {...elem} />
            </SwiperSlide>
          ))}
        </SwiperNavigation>
        <Link className="mx-auto" to={getLang("/earth-quakes")}>
          <CustomBtn transparent>Узнать больше</CustomBtn>
        </Link>
      </Container>
    </div>
  );
};
