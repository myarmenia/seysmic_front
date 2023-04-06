import React from "react";
import img from "../../assets/trash/press-release/press-rel.svg";
import h1_img from "../../assets/trash/home/h1.svg";
import link_to from "../../assets/icons/link-to.svg";
import { useLoaderData } from "react-router";
import { instance } from "../../api";
import { PressReleaseBox } from "../../components/main";

const expl = {
  title: "Название организации",
  icon: h1_img,
  image: img,
  date: "24.02.2023",
  time: "16:00",
};
const { title, date, icon, image, time } = expl;
// all above must come from loader data below

const Component = () => {
  const {
    item: { body },
    data,
  } = useLoaderData();
  return (
    <div>
      <img src={image} className="w-full" alt="" />
      <div className="grid grid-cols-[5fr_2fr]">
        <div className="flex flex-col gap-[34px] py-[41px] px-[68px]">
          <div className="flex justify-between gap-5">
            <div className="flex gap-5">
              <img className="h-[95px]" src={icon} alt="" />
              <div className="flex flex-col gap-[14px]">
                <h4 className="text-dark-blue text-[32px] font-bold">
                  {title}
                </h4>
                <span className="text-[#415455] text-base">
                  {date} {time}
                </span>
              </div>
            </div>
            <img className="w-[33px]" src={link_to} alt="" />
          </div>
          <p>{body}</p>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[17px]">
            <div className="bg-[#D9D9D9] h-[184px]"></div>
            <div className="bg-[#D9D9D9] h-[184px]"></div>
            <div className="bg-[#D9D9D9] h-[184px]"></div>
            <div className="bg-[#D9D9D9] h-[184px]"></div>
            <div className="bg-[#D9D9D9] h-[184px]"></div>
            <div className="bg-[#D9D9D9] h-[184px]"></div>
          </div>
        </div>
        <div className="py-[41px] px-[42px] bg-[#F9F9F9] flex flex-col gap-[28px]">
          {data.map(({ body, id }, i) => (
            <PressReleaseBox
              key={i}
              describtion={body.split(" ").slice(0, 8).join(" ") + "..."}
              to={`/press-release/${id}`}
              {...expl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const loader = async ({ params }) => {
  console.log(params.id);
  const item = await instance.get(`posts/${params.id}?userId=1`);
  const data = await instance.get(`posts?userId=1`);

  return { item: item.data, data: data.data.slice(0, 3) };
};

export const PressRel = Object.assign(Component, { loader });
