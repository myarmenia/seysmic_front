import React from "react";
import fcbook from "../../assets/icons/social_networks/fcbook.svg";
import gmail from "../../assets/icons/social_networks/gmail.svg";
import instagram from "../../assets/icons/social_networks/instagram.svg";
import telegram from "../../assets/icons/social_networks/telegram.svg";
import yt from "../../assets/icons/social_networks/yt.svg";
import { Link } from "react-router-dom";

export const SocIcons = ({ className = "", links }) => {
  if (!Array.isArray(links)) {
    return null;
  }
  return (
    <div className="flex items-center gap-[10px] [&_a]:duration-300 [&_a]:shrink-0 [&_a:hover]:scale-125">
      {links.map(({ link, logo }) => (
        <Link to={link} target="_blank" key={link}>
          <img src={logo} className="w-[49px] h-[49px] object-contain" alt="" />
        </Link>
      ))}
    </div>
  );
};
