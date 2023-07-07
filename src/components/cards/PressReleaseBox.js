import { Link } from 'react-router-dom';
import { getLang } from '../../helper';
import { Share } from '../reusable';

export const PressReleaseBox = ({ id, title, description, logo, image, date, time, files, to }) => {
  console.log(window.location.origin);
  return (
    <div className="bg-white w-full h-[400px] flex flex-col justify-between gap-2 shadow-[0px_2px_11px_rgba(0,_0,_0,_0.15)] px-[23px] py-[22px] rounded-[6px] max-w-[430px] hover:scale-[1.1] duration-300 med-900:max-w-none med-900:w-full med-600:hover:scale-[1.05] med-600:h-[350px] med-450:w-[112%]">
      <div className="flex justify-between">
        <Link to={getLang(`/press-release/release-page/${id}`)} className="flex items-center gap-3">
          <img className="max-w-[56px] med-600:max-w-[40px]" loading="lazy" src={logo} alt="" />
          <div className="flex flex-col gap-[6px]">
            <span className="font-bold text-dark-blue text-[11px] med-600:text-[9px] line-clamp-2">
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
          url={window.location.origin + getLang(`/press-release/release-page/${id}`)}
        />
      </div>
      <Link
        to={getLang(`/press-release/release-page/${id}`)}
        dangerouslySetInnerHTML={{ __html: description.slice(0, 70) }}
        className="line-clamp-2"></Link>
      <img loading="lazy" className="max-h-[231.18px] w-full" src={image} alt="" />
    </div>
  );
};
