import { Link } from "react-router-dom";
import link_to from "../../assets/icons/link-to.svg";

export const PressReleaseBox = ({
  title,
  description,
  icon,
  image,
  date,
  time,
  to,
}) => {
  return (
    <div className="bg-white flex flex-col gap-2 shadow-[0px_2px_11px_rgba(0,_0,_0,_0.15)] px-[23px] py-[22px] rounded-[6px]">
      <div className="flex justify-between gap-5">
        <div className="flex items-center gap-3">
          <img src={icon} alt="" />
          <div className="flex flex-col gap-[6px]">
            <span className="font-bold text-dark-blue text-[11px]">
              {title}
            </span>
            <span className="text-[#415455] text-[10px]">
              {date} {time}
            </span>
          </div>
        </div>
        <Link to={to}>
          <img src={link_to} alt="" />
        </Link>
      </div>
      <p>{description}</p>
      <img src={image} alt="" />
    </div>
  );
};
