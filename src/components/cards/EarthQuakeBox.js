import React from "react";
import { Link } from "react-router-dom";

export const EarthQuakeBox = ({
  date,
  description,
  id,
  image,
  time,
  title,
}) => {
  return (
    <div className="p-[18px] bg-white rounded-[5px] shadow-light flex flex-col gap-2">
      {/* <iframe
        src="https://www.youtube.com/embed/DtvfnOtO1Wk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe> */}
      <img src={image} className="" alt="" loading="lazy"></img>
      <div className="flex gap-[6px]">
        {/* <img className="w-[32px] h-[32px] rounded-full" src={icon} alt="" /> */}
        <div className="flex flex-col gap-1">
          <Link
            to={`../earth-quake/${id}`}
            className="text-dark-blue font-bold text-xs">
            {title}
          </Link>
          <p
            className="text-[#434343] text-xs leading-[150%]"
            dangerouslySetInnerHTML={{ __html: description }}></p>
          <span className="text-[#415455] text-[10px]">{`${date} ${time}`}</span>
        </div>
      </div>
    </div>
  );
};
