import React from "react";
import { useState } from "react";
import { Swiper } from "swiper/react";
import { A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import swiper_arrow from "../../assets/icons/arrow-right-swiper.svg";

export const Carousel = ({ children, handleClose, open }) => {
  const [ref, setRef] = useState(null);

  if (!open) {
    return null;
  }
  return (
    <div role="carousel" className="z-[99999] fixed top-0 left-0 w-full h-full">
      <div
        className="absolute w-full h-full top-0 left-0 bg-black/30"
        onClick={handleClose}
      />
      <div className="max-w-[1200px] w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex items-center justify-between gap-[30px] med-900:w-[80%] med-900:mx-auto med-600:w-[90%] med-600:gap-3 med-600:m-[0_auto] bg-white">
        <img
          onClick={() => ref?.slidePrev()}
          src={swiper_arrow}
          className="med-600:hidden rotate-180 cursor-pointer bg-white/40 px-4 py-2 rounded-full"
          alt=""
        />
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => setRef(swiper)}
          allowTouchMove
          className="w-auto"
          modules={[Navigation, A11y]}>
          {children}
        </Swiper>
        <img
          onClick={() => ref?.slideNext()}
          src={swiper_arrow}
          className="med-600:hidden cursor-pointer bg-white/40 px-4 py-2 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};
