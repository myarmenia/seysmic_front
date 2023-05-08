import React, { useState } from "react";
import { Carousel, Share } from "../reusable";
import { SwiperSlide } from "swiper/react";
import img_11 from "../../assets/trash/press-release/press-rel.svg";
import icon1 from "../../assets/main/logo-rounded.svg";
import { VideoBox } from "../cards";

const videos = [
  {
    icon: icon1,
    title: "Название ролика",
    description: "Компания Терморобот занимается производством котельного",
    date: "24.02.2023",
  },
  {
    icon: icon1,
    title: "Название ролика",
    description: "Компания Терморобот занимается производством котельного",
    date: "24.02.2023",
  },
  {
    icon: icon1,
    title: "Название ролика",
    description: "Компания Терморобот занимается производством котельного",
    date: "24.02.2023",
  },
];

export const SingleBox = ({
  title,
  date,
  icon,
  image,
  time,
  description,
  ul_data,
  // videos,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <img src={image} className="w-full min-h-[185px] object-cover" alt="" />
        <div className="grid grid-cols-[5fr_2fr] med-1200:grid-cols-1">
          <div className="flex flex-col gap-[34px] py-[41px] px-[68px] med-900:px-[32px] med-600:px-5 med-600:py-6">
            <div className="flex justify-between gap-5">
              <div className="flex gap-5 med-600:gap-2">
                <img className="h-[95px] med-600:h-[50px]" src={icon} alt="" />
                <div className="flex flex-col gap-[14px]">
                  <h4 className="text-dark-blue text-[32px] font-bold med-600:text-[20px]">
                    {title}
                  </h4>
                  <span className="text-[#415455] text-base med-600:text-sm">
                    {date} {time}
                  </span>
                </div>
              </div>
              <Share url={window.location.href} />
            </div>
            <p>{description}</p>
            {ul_data?.length && (
              <ol type="1" style={{ listStyle: "auto inside" }}>
                {ul_data.map(({ text, to }, i) => (
                  <li
                    key={i}
                    className="text-[#1267CB] text-justify text-[20px]"
                  >
                    <a className="underline" href={to}>
                      {text}
                    </a>
                  </li>
                ))}
              </ol>
            )}
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[17px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(true)}
                  className="bg-[#D9D9D9] h-[184px]"
                ></div>
              ))}
            </div>
          </div>
          <div className="py-[41px] px-[42px] bg-[#F9F9F9] grid grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] justify-items-center gap-[28px] med-900:px-[32px] med-600:p-[25px_20px]">
            {videos.map((el, i) => (
              <VideoBox {...el} key={i} />
            ))}
          </div>
        </div>
      </div>
      <Carousel {...{ open }} handleClose={() => setOpen(false)}>
        {Array.from({ length: 5 }).map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={img_11}
              className="w-full h-full min-h-[500px] object-cover object-center"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
};
