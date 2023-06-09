import { Link } from "react-router-dom";
import { getLang } from "../../helper";
import { Share } from "../reusable";

export const PressReleaseBox = ({
  id,
  title,
  description,
  logo,
  image,
  date,
  time,
  files,
  to,
}) => {
  console.log(window.location.origin);
  return (
    <div className="bg-white w-full flex flex-col justify-between gap-2 shadow-[0px_2px_11px_rgba(0,_0,_0,_0.15)] px-[23px] py-[22px] rounded-[6px] max-w-[430px] hover:scale-[1.1] duration-300 med-900:max-w-none med-900:w-full med-600:hover:scale-[1.05] h-[400px]">
      <div className="flex justify-between gap-5">
        <Link
          to={getLang(`/press-release/release-page/${id}`)}
          className="flex items-center gap-3">
          <img className="max-w-[64px]" loading="lazy" src={logo} alt="" />
          <div className="flex flex-col gap-[6px]">
            <span className="font-bold text-dark-blue text-[11px]">
              {title}
            </span>
            <span className="text-[#415455] text-[10px]">
              {date} {time}
            </span>
          </div>
        </Link>
        <Share
          title={title}
          text={description}
          url={
            window.location.origin +
            getLang(`/press-release/release-page/${id}`)
          }
        />
      </div>
      <Link
        to={getLang(`/press-release/release-page/${id}`)}
        dangerouslySetInnerHTML={{ __html: description.slice(0, 70) }}></Link>
      <img
        loading="lazy"
        className="max-h-[231.18px] w-full h-full"
        src={image}
        alt=""
      />
    </div>
  );
};
