import React from "react";
import link_to from "../../assets/icons/link-to.svg";

export const SingleBox = ({
  title,
  date,
  icon,
  image,
  time,
  boxes_data,
  Item,
  description,
}) => {
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
          <p>{description}</p>
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
          {boxes_data.map((el, i) => (
            <Item {...el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
