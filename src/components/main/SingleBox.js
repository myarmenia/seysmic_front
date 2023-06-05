import React, { useState } from "react";
import { Carousel, Share } from "../reusable";
import { SwiperSlide } from "swiper/react";
import img_11 from "../../assets/trash/press-release/press-rel.svg";
import icon1 from "../../assets/main/logo-rounded.svg";
import { VideoBox } from "../cards";
import { useParams } from "react-router";
import { EarthQuakeBox } from "../cards/EarthQuakeBox";

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

const leng = {
  am: "մագնիտուդ",
  ru: "магнитуда",
  en: "magnitude",
};

export const SingleBox = ({
  date,
  description,
  files,
  links,
  logo,
  time,
  title,
  magnitude,
  current_earthquake,
  boxes_data,
  Item,
}) => {
  const { lang } = useParams();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <img
          src={files?.filter((el) => el.type === "image")[0]?.path}
          className="w-full min-h-[185px] object-cover max-h-[512px]"
          alt=""
        />
        <div className="grid grid-cols-[5fr_2fr] med-1200:grid-cols-1">
          <div className="flex flex-col gap-[34px] py-[41px] px-[68px] med-900:px-[32px] med-600:px-5 med-600:py-6">
            <div className="flex justify-between gap-5">
              <div className="flex gap-5 med-600:gap-2">
                <img className="h-[95px] med-600:h-[50px]" src={logo} alt="" />
                <div className="flex flex-col gap-[14px]">
                  <h4 className="text-dark-blue text-[32px] font-bold med-600:text-[20px]">
                    {title}
                  </h4>
                  <span className="text-[#415455] text-base med-600:text-sm">
                    {date} {time}
                    {magnitude && `${magnitude} ${leng[lang]}`}
                  </span>
                </div>
              </div>

              <Share url={window.location.href} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            {links?.length && (
              <ol type="1" style={{ listStyle: "auto inside" }}>
                {links.map((el, i) => (
                  <li
                    key={i}
                    className="text-[#1267CB] text-justify text-[20px]">
                    <a className="underline" href={el} target="_blank">
                      {el}
                    </a>
                  </li>
                ))}
              </ol>
            )}
            <div className="grid gap[8px] grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[17px]">
              {files?.map(({ type, path }, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(true)}
                  className="h-[184px] ">
                  {type === "image" ? (
                    <img src={path} className="h-full cursor-pointer" />
                  ) : (
                    <video className="h-[184px] cursor-pointer">
                      <source src={path} />
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="py-[41px] px-[42px] bg-[#F9F9F9] grid grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] justify-items-center gap-[28px] med-900:px-[32px] med-600:p-[25px_20px]">
            {boxes_data.map((el, i) => (
              <Item {...el} key={i} />
            ))}
          </div>
        </div>
      </div>
      <Carousel {...{ open }} handleClose={() => setOpen(false)}>
        {files.map(({ type, path }, i) => {
          if (type === "image") {
            return (
              <SwiperSlide key={i}>
                <img
                  src={path}
                  className="w-full h-full min-h-[500px] object-cover object-center"
                  alt=""
                />
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide key={i}>
              <center>
                <video
                  controls
                  className="w-full h-full min-h-[500px] object-cover object-center"
                  alt="">
                  <source src={path} type="video/mp4" />
                </video>
              </center>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </>
  );
};
