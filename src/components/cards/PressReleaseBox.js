import { Link } from "react-router-dom";
import { getLang } from "../../helper";
import { Share } from "../reusable";

export const PressReleaseBox = ({
  title,
  description,
  logo,
  image,
  date,
  time,
  to,
}) => {
  return (
    <div className="bg-white flex flex-col justify-between gap-2 shadow-[0px_2px_11px_rgba(0,_0,_0,_0.15)] px-[23px] py-[22px] rounded-[6px] max-w-[430px] hover:scale-[1.1] duration-300 med-900:max-w-none med-900:w-full med-600:hover:scale-[1.05]">
      <div className="flex justify-between gap-5">
        <Link to={getLang(to)} className="flex items-center gap-3">
          <img src={logo} alt="" />
          <div className="flex flex-col gap-[6px]">
            <span className="font-bold text-dark-blue text-[11px]">
              {title}
            </span>
            <span className="text-[#415455] text-[10px]">
              {date} {time}
            </span>
          </div>
        </Link>
        <Share url={window.location.origin + getLang(to)} />
      </div>
      <Link to={getLang(to)}>{description}</Link>
      <img src={image} alt="" />
    </div>
  );
};
