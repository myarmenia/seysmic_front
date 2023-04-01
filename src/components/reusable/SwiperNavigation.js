import "swiper/css";
import { Navigation } from "swiper";
import { Swiper } from "swiper/react";
import swiper_arrow from "../../assets/icons/arrow-right-swiper.svg";
import { Container } from "./container/Container";
import { useRef } from "react";

export const SwiperNavigation = ({ children, className }) => {
  const swiperRef = useRef();
  return (
    <div className="flex items-center justify-between gap-[30px]">
      <img
        onClick={() => swiperRef.current?.slidePrev()}
        src={swiper_arrow}
        className="rotate-180 cursor-pointer"
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={"w-auto !px-[20px] " + className}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
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
