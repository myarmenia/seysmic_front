import { useRef } from "react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import { Swiper } from "swiper/react";
import swiper_arrow from "../../assets/icons/arrow-right-swiper.svg";

export const SwiperNavigation = ({ children, className = "" }) => {
  const swiperRef = useRef();
  return (
    <div className="flex items-center justify-between gap-[30px] med-900:w-[80%] med-900:mx-auto med-600:w-[90%]">
      <img
        onClick={() => swiperRef.current?.slidePrev()}
        src={swiper_arrow}
        className="rotate-180 cursor-pointer"
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={"w-auto !px-[20px] " + className}
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
      />
    </div>
  );
};
