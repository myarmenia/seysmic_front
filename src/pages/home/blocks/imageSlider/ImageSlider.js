import React from "react";
import src from "../../../../assets/trash/slider-img1.svg";
import { Container } from "../../../../components/reusable";
import styles from "./imageSlider.module.css";
// Import Swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

const images = [
  {
    src,
    description:
      "Каждый человек имеет право получать информацию о готовящихся землетрясениях в том или ином регионе мира, знать об опасных временных интервалах для самостоятельного выбора места жительства, пребывания и отдыха. Такая возможность сегодня имеется!",
  },
  {
    src,
    description:
      "Каждый человек имеет право получать информацию о готовящихся землетрясениях в том или ином регионе мира, знать об опасных временных интервалах для самостоятельного выбора места жительства, пребывания и отдыха. Такая возможность сегодня имеется!",
  },
  {
    src,
    description:
      "Каждый человек имеет право получать информацию о готовящихся землетрясениях в том или ином регионе мира, знать об опасных временных интервалах для самостоятельного выбора места жительства, пребывания и отдыха. Такая возможность сегодня имеется!",
  },
];

export const ImageSlider = () => {
  return (
    <Container className="!w-[95vw] !max-w-max !p-0 overflow-x-hidden">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="w-full h-[622px]"
      >
        {images.map(({ src, description }, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slide}>
              <img
                src={src}
                className="absolute top-0 left-0 object-cover w-full"
                alt=""
              />
              <p>{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container bg={"bg-dark-blue"} className={"w-full py-2 text-white"}>
        Something
      </Container>
    </Container>
  );
};
