import { useRef } from "react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import { Swiper } from "swiper/react";
import swiper_arrow from "../../assets/icons/arrow-right-swiper.svg";

export const SwiperNavigation = ({ children, className = "" }) => {
  const swiperRef = useRef();
  return (
    <div className="flex items-center justify-between gap-[30px] med-900:w-[80%] med-900:mx-auto med-600:w-[90%] med-600:gap-3 med-600:m-[0_auto] med-400:w-full">
      <img
        onClick={() => swiperRef.current?.slidePrev()}
        src={swiper_arrow}
        className="rotate-180 cursor-pointer"
        alt=""
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        allowTouchMove
        className={"w-auto !px-[20px] med-400:!p-0 " + className}
        modules={[Navigation, A11y]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          950: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {children}
      </Swiper>
      <img
        onClick={() => swiperRef.current?.slideNext()}
        src={swiper_arrow}
        className="cursor-pointer"
        alt=""
      />
    </div>
  );
};
