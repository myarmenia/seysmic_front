import React from 'react';
import { Link } from 'react-router-dom';

export const VideoBox = ({ link, title, description, date, icon, to,video_iframe }) => {
  console.log(link);
  return (
    <div className="p-[18px] bg-white rounded-[5px] shadow-light flex flex-col gap-2 h-fit mb-[40px]">
      {/* <iframe
        src="https://www.youtube.com/embed/Q_j_moCqre0" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe> */}
        {/* {video_iframe} */}
        <div dangerouslySetInnerHTML={{ __html: video_iframe }}></div>
      <div className="flex gap-[6px]">
        <img loading="lazy" className="w-[32px] h-[32px] rounded-full" src={icon} alt="" />
        <div className="flex flex-col gap-1">
          <Link to={link} className="text-dark-blue font-bold text-xs">
            {title}
          </Link>
          <p className="text-[#434343] text-xs leading-[150%]">{description}</p>
          <span className="text-[#415455] text-[10px]">{date}</span>
        </div>
      </div>
    </div>
  );
};
