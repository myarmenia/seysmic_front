import React from "react";
import { useLoaderData } from "react-router";
import { SwiperSlide } from "swiper/react";
import quake_img from "../../../assets/main/home/quake.svg";
import img from "../../../assets/main/home/world_map_blue.svg";
import { QuakeBox as Box } from "../../../components/cards";
import { Container, SwiperNavigation } from "../../../components/reusable";
import { CustomBtn } from "../../../components/forms";
import { Link } from "react-router-dom";
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
    <div>
      <div
        style={{ backgroundImage: `url('${img}')` }}
        className="w-full bg-cover bg-center bg-fixed bg-no-repeat min-h-[307px] max-h-[500px] h-[33vw]"
      />
      <Container
        bg="mt-[-20%] med-900:mt-[-40%] med-400:mt-[-50%]"
        className="flex flex-col pb-10"
      >
        <SwiperNavigation className="h-[622px]">
          {earth_quakes.map((elem, i) => (
            <SwiperSlide key={i}>
              <Box {...elem} />
            </SwiperSlide>
          ))}
        </SwiperNavigation>
        <Link className="mx-auto" to={getLang("/earth-quakes")}>
          <CustomBtn>Узнать больше</CustomBtn>
        </Link>
      </Container>
    </div>
  );
};
