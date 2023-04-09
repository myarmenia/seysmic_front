import React from "react";
import { useLoaderData } from "react-router";
import instance from "../../api";
import h1_img from "../../assets/trash/home/h1.svg";
import img from "../../assets/trash/press-release/press-rel.svg";
import { SingleBox, QuakeBox } from "../../components/main";

const expl = {
  title: "Название организации",
  icon: h1_img,
  image: img,
  date: "24.02.2023",
  time: "16:00",
};
const Component = () => {
  const {
    item: { body },
    data,
  } = useLoaderData();

  const data1 = data.map((el) => ({
    description: el.body.split(" ").slice(0, 8).join(" ") + "...",
    to: `/earth-quakes/${el.id}`,
    ...expl,
  }));
  return (
    <SingleBox
      {...expl}
      Item={QuakeBox}
      boxes_data={data1}
      description={body}
    />
  );
};

const loader = async ({ params }) => {
  console.log(params.id);
  const item = await instance.get(`posts/${params.id}?userId=1`);
  const data = await instance.get(`posts?userId=1`);

  return { item: item.data, data: data.data.slice(0, 3) };
};

export const EarthQuake = Object.assign(Component, { loader });
