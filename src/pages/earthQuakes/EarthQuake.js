import React from "react";
import { useLoaderData } from "react-router";
import instance from "../../api";
import h1_img from "../../assets/trash/home/h1.svg";
import img from "../../assets/trash/press-release/press-rel.svg";
import { SingleBox } from "../../components/main";
import { QuakeBox } from "../../components/cards";

const expl = {
  title: "Название организации",
  icon: h1_img,
  image: img,
  date: "24.02.2023",
  time: "16:00",
};
const Component = () => {
  const { single_current_earthquakes, lastes_current_earthquake } =
    useLoaderData();

  return (
    <SingleBox
      {...single_current_earthquakes}
      // current_earthquake={lastes_current_earthquake}
      Item={QuakeBox}
      boxes_data={lastes_current_earthquake}
      description={single_current_earthquakes.body}
    />
  );
};

const loader = async ({ params: { lang, id } }) => {
  try {
    const res = await instance.get(`current-earthquake/${id}?lng=${lang}`);
    console.log(res.data.data, "boz");
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const EarthQuake = Object.assign(Component, { loader });
