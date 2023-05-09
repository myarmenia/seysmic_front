import React from "react";
import { useLoaderData } from "react-router";
import instance from "../../api";
import h1_img from "../../assets/trash/home/h1.svg";
import img from "../../assets/trash/press-release/press-rel.svg";
import {
  // PressReleaseBox,
  SingleBox,
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
  // const {
  //   item: { body },
  //   data,
  // } = useLoaderData();
  const item = useLoaderData();

  // const data1 = data.map((el) => ({
  //   description: el.body.split("").slice(0, 68).join("") + "...",
  //   to: `/press-release/${el.id}`,
  //   ...expl,
  // }));
  return (
    <SingleBox
      {...expl}
      // Item={PressReleaseBox}
      // boxes_data={data1}
      description={item.body}
    />
  );
};

const loader = async ({ params }) => {
  // const item = await instance.get(`posts/${params.id}?userId=1`);
  const item = await axios.get(
    `https://jsonplaceholder.typicode.com/postsposts/${params.id}?userId=1`
  );
  return item.data;
};

export const PressRel = Object.assign(Component, { loader });
