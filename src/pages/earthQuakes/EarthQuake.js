import React from "react";
import { useLoaderData } from "react-router";
import instance from "../../api";
import h1_img from "../../assets/trash/home/h1.svg";
import img from "../../assets/trash/press-release/press-rel.svg";
import {
  SingleBox,
  // QuakeBox
} from "../../components/main";
import axios from "axios";

const expl = {
  title: "Название организации",
  icon: h1_img,
  image: img,
  date: "24.02.2023",
  time: "16:00",
};
const Component = () => {
  // const { item, data } = useLoaderData();
  const item = useLoaderData();
  console.log(item);

  // const data1 = data.map((el) => ({
  //   description: el.body.split("").slice(0, 68).join("") + "...",
  //   to: `/earth-quakes/${el.id}`,
  //   ...expl,
  // }));
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
  // const item = await instance.get(`posts/${params.id}?userId=1`);
};

export const EarthQuake = Object.assign(Component, { loader });
