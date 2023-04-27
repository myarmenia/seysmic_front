import React from "react";
import fcbook from "../../assets/icons/social_networks/fcbook.svg";
import gmail from "../../assets/icons/social_networks/gmail.svg";
import instagram from "../../assets/icons/social_networks/instagram.svg";
import telegram from "../../assets/icons/social_networks/telegram.svg";
import yt from "../../assets/icons/social_networks/yt.svg";
import { Link } from "react-router-dom";

export const SocIcons = ({ className = "" }) => {
  return (
    <div className="flex items-center gap-[10px] [&_a]:duration-300 [&_a]:shrink-0 [&_a:hover]:scale-125">
      <Link>
        <img src={fcbook} alt="" />
      </Link>
      <Link>
        <img src={gmail} alt="" />
      </Link>
      <Link>
        <img src={yt} alt="" />
      </Link>
      <Link>
        <img src={instagram} alt="" />
      </Link>
      <Link>
        <img src={telegram} alt="" />
      </Link>
    </div>
  );
};
