import { useState } from 'react';
import { A11y, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import swiper_arrow from '../../assets/icons/arrow-right-swiper.svg';

export const SwiperNavigation = ({ children, className = '', count = 3 }) => {
  const [ref, setRef] = useState(null);

  return (
    <div className="flex items-cente  r justify-between gap-[30px] med-900:w-[100%] med-900:mx-auto med-600:w-[80%] med-600:gap-3 med-600:m-[0_auto] med-400:w-full">
      {count > 2 && (
        <img
          onClick={() => ref?.slidePrev()}
          src={swiper_arrow}
          className="rotate-180 z-10 cursor-pointer med-600:w-[15px] med-600:h-[30px] med-560:hidden"
          alt=""
        />
      )}
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        onSwiper={(swiper) => setRef(swiper)}
        allowTouchMove
        // loop={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        className={'w-full !px-[20px] ' + className}
        modules={[Navigation, Autoplay, A11y]}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}>
        {children}
      </Swiper>
      {count > 2 && (
        <img
          onClick={() => ref?.slideNext()}
          src={swiper_arrow}
          className="cursor-pointer z-10 med-600:w-[15px] med-600:h-[30px] med-560:hidden"
          alt=""
        />
      )}
    </div>
  );
};
