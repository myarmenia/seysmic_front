import React from "react";
import { useLoaderData } from "react-router";
import instance from "../../api";
import h1_img from "../../assets/trash/home/h1.svg";
import img from "../../assets/trash/press-release/press-rel.svg";
import { SingleBox } from "../../components/main";

const expl = {
  title: "Название организации",
  icon: h1_img,
  image: img,
  date: "24.02.2023",
  time: "16:00",
};
const Component = () => {
  const item = useLoaderData();
  console.log(item < "item");

  return (
    <SingleBox
      {...item}
      // Item={QuakeBox}
      // boxes_data={data1}
      description={item.body}
    />
  );
};

const loader = async ({ params: { lang, id } }) => {
  try {
    const res = await instance.get(`current-earthquake/${id}?lng=${lang}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const EarthQuake = Object.assign(Component, { loader });
