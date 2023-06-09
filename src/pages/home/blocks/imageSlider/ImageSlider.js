import React from "react";
import src from "../../../../assets/trash/slider-img1.svg";
import { Container } from "../../../../components/reusable";
import styles from "./imageSlider.module.css";
// Import Swiper
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { generateArray } from "../../../../helper";
import { useLoaderData } from "react-router";

const images = generateArray(3, {
  src,
  description:
    "Каждый человек имеет право получать информацию о готовящихся землетрясениях в том или ином регионе мира, знать об опасных временных интервалах для самостоятельного выбора места жительства, пребывания и отдыха. Такая возможность сегодня имеется!",
});

export const ImageSlider = () => {
  const { banner } = useLoaderData();
  return (
    <div className="overflow-x-hidden">
      <Swiper
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[60vh] max-h-[622px] min-h-[229px] med-600:h-[229px] med-600:min-w-full">
        {banner?.banner.map(({ path, content }, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slide}>
              <img
                loading="lazy"
                src={path}
                className="absolute top-0 left-0 object-cover w-full h-full"
                alt=""
              />
              <div className="relative w-fll h-full max-w-[1440px] mx-auto">
                <p>{content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container
        bg="bg-dark-blue relative"
        className={"w-full h-[44px] text-white"}>
        <a href={banner?.running_text?.path} className={styles.marquee}>
          {banner?.running_text?.content}
        </a>
      </Container>
    </div>
  );
};
