import React from "react";
import { PressReleaseBox } from "../../components/main";
import { Container, Title } from "../../components/reusable";
import { generateArray } from "../../helper";
import h1_icon from "../../assets/trash/home/h1.svg";
import organization from "../../assets/trash/home/organization.svg";
import { useLoaderData } from "react-router";
import { instance } from "../../api";

// const data = generateArray(8, {
//   title: "Название организации",
//   describtion:
//     "Компания Терморобот занимается производством котельного оборудования с 2010 г.",
//   icon: h1_icon,
//   image: organization,
//   date: "24.02.2023",
//   time: "16:00",
// });
const expl = {
  title: "Название организации",
  icon: h1_icon,
  image: organization,
  date: "24.02.2023",
  time: "16:00",
};

export const Component = () => {
  const data = useLoaderData();
  return (
    <Container bg="bg-[#F0F2F5]" className="flex flex-col gap-[44px] py-[42px]">
      <Title>Пресс-релиз</Title>
      <div className="grid grid-cols-3 w-full gap-[64px_27px] ">
        {data.map(({ body, id }, i) => (
          <PressReleaseBox
            key={i}
            describtion={body.split(" ").slice(0, 8).join(" ") + "..."}
            to={`/press-release/${id}`}
            {...expl}
          />
        ))}
      </div>
    </Container>
  );
};

const loader = async () => {
  const data = await instance.get(`posts?userId=1`);
  return data.data;
};

export const PressReleases = Object.assign(Component, { loader });
