import React from "react";
import src from "../../../../assets/trash/slider-img1.svg";
import { Container } from "../../../../components/reusable";
import styles from "./imageSlider.module.css";
// Import Swiper
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { generateArray } from "../../../../helper";

const images = generateArray(3, {
  src,
  description:
    "Каждый человек имеет право получать информацию о готовящихся землетрясениях в том или ином регионе мира, знать об опасных временных интервалах для самостоятельного выбора места жительства, пребывания и отдыха. Такая возможность сегодня имеется!",
});

export const ImageSlider = () => {
  return (
    <Container className="!max-w-max !p-0 overflow-x-hidden">
      <Swiper
        pagination={true}
        mousewheel={true}
        allowTouchMove={true}
        modules={[Pagination, Mousewheel]}
        className="w-full h-[60vh] max-h-[622px] min-h-[229px] med-400:h-[229px]"
        // className="w-full h-[622px]"
      >
        {images.map(({ src, description }, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slide}>
              <img
                src={src}
                className="absolute top-0 left-0 object-cover w-full h-full"
                alt=""
              />
              <div className="relative w-fll h-full max-w-[1440px] mx-auto">
                <p>{description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container
        bg="bg-dark-blue relative"
        className={"w-full h-[44px] text-white"}
      >
        <p className={styles.marquee}>
          Something
        </p>
      </Container>
    </Container>
  );
};
