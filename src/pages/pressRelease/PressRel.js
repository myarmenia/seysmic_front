import React from "react";
import { useLoaderData } from "react-router";
import instance from "../../api";
import h1_img from "../../assets/trash/home/h1.svg";
import img from "../../assets/trash/press-release/press-rel.svg";
import { PressReleaseBox } from "../../components/cards";
import {
  // PressReleaseBox,
  SingleBox,
} from "../../components/main";

const expl = {
  title: "Название организации",
  icon: h1_img,
  image: img,
  date: "24.02.2023",
  time: "16:00",
};
const Component = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <SingleBox
      {...expl}
      Item={PressReleaseBox}
      // boxes_data={item.video_boxes}
      description={item.body}
      {...item}
    />
  );
};

const loader = async ({ params: { id, lang } }) => {
  try {
    const res = await instance.get(`press-releases/${id}?lng=${lang}`);
    console.log(res.data);
    if (res.status === 200) {
      return res.data.data;
    } else {
      return new Error("Somting when wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

export const PressRel = Object.assign(Component, { loader });
