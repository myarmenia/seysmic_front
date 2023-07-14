import React from 'react';
import { useState } from 'react';
import { Swiper } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import swiper_arrow from '../../assets/icons/arrow-right-swiper.svg';

export const Carousel = ({ children, handleClose, open, initialSlide = 0, fileCount }) => {
  console.log('initialSlide', initialSlide);
  const [ref, setRef] = useState(null);
  if (!open) {
    return null;
  }
  document.addEventListener(
    'keydown',
    (e) => {
      if (e.code == 'ArrowRight') {
        ref?.slideNext();
      } else if (e.code == 'ArrowLeft') {
        ref?.slidePrev();
      }
    },
    false,
  );

  return (
    <div role="carousel" className="z-[99999] fixed top-0 left-0 w-full h-full ">
      <div className="absolute w-full h-full top-0 left-0 bg-black/30" onClick={handleClose} />
      <div className="max-w-[700px] w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex items-center justify-between gap-[30px] med-900:w-[80%] med-900:mx-auto med-600:w-[90%] med-600:gap-3 med-600:m-[0_auto] bg-white">
        {fileCount === 1 ? (
          <span></span>
        ) : (
          <img
            loading="lazy"
            onClick={() => ref?.slidePrev()}
            src={swiper_arrow}
            className="med-600:hidden rotate-180 cursor-pointer bg-white/40 px-4 py-2 rounded-full"
            alt="prev"
          />
        )}
        <Swiper
          slidesPerView={1}
          initialSlide={initialSlide}
          onSwiper={(swiper) => setRef(swiper)}
          allowTouchMove
          loop={true}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          className="w-auto"
          modules={[Navigation, A11y]}>
          {children}
        </Swiper>
        {fileCount === 1 ? (
          <span></span>
        ) : (
          <img
            loading="lazy"
            onClick={() => ref?.slideNext()}
            src={swiper_arrow}
            className="med-600:hidden cursor-pointer bg-white/40 px-4 py-2 rounded-full"
            alt="next"
          />
        )}
      </div>
    </div>
  );
};
