import React from 'react';
import { Link } from 'react-router-dom';

export const VideoBox = ({ src, title, description, date, icon, to }) => {
  return (
    <div className="p-[18px] bg-white rounded-[5px] shadow-light flex flex-col gap-2 h-fit mb-[40px]">
      <iframe
        src="https://www.youtube.com/embed/QhZEWAA1vz8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <div className="flex gap-[6px]">
        <img loading="lazy" className="w-[32px] h-[32px] rounded-full" src={icon} alt="" />
        <div className="flex flex-col gap-1">
          <Link to={to} className="text-dark-blue font-bold text-xs">
            {title}
          </Link>
          <p className="text-[#434343] text-xs leading-[150%]">{description}</p>
          <span className="text-[#415455] text-[10px]">{date}</span>
        </div>
      </div>
    </div>
  );
};
