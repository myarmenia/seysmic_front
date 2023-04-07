import React from "react";
import { useLoaderData } from "react-router";
import { instance } from "../../api";
import h1_icon from "../../assets/trash/home/h1.svg";
import organization from "../../assets/trash/home/organization.svg";
import { Boxes, PressReleaseBox } from "../../components/main";

const expl = {
  title: "Название организации",
  icon: h1_icon,
  image: organization,
  date: "24.02.2023",
  time: "16:00",
};

export const Component = () => {
  const data = useLoaderData();
  const data1 = data.map((el) => ({
    description: el.body.split(" ").slice(0, 8).join(" ") + "...",
    to: `/press-release/${el.id}`,
    ...expl,
  }));
  return <Boxes data={data1} title="Пресс-релиз" Item={PressReleaseBox} />;
};

const loader = async () => {
  const data = await instance.get(`posts?userId=1`);
  return data.data;
};

export const PressReleases = Object.assign(Component, { loader });
