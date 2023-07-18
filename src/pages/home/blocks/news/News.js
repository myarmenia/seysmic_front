import React from 'react';
import { Container, Title } from '../../../../components/reusable';
import styles from './news.module.css';
import logo from '../../../../assets/main/logo.svg';
import img from '../../../../assets/main/book-img.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { generateArray, getLang } from '../../../../helper';
import { CustomBtn } from '../../../../components/forms';
import { useLoaderData } from 'react-router';
import { useTranslation } from '../../../../hooks';
import NewsIconSVG from './newsIconSVG';
import { Link } from 'react-router-dom';

export const News = () => {
  const {
    data: { news },
  } = useLoaderData();
  const { home: language } = useTranslation().language;

  return (
    <div className="py-[40px] max-w-[1440px] mx-auto">
      <div className="med-600:h-[44px] relative w-full mb-[55px] med-600:justify-between med-600:flex">
        <div className={styles.newsIconBox}>
          <NewsIconSVG />
          <Title className={styles.title}>{language?.news}</Title>
        </div>
      </div>
      <Container>
        <Swiper
          loop={true}
          autoplay={{
            delay: 6000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full">
          {news.map((el, i) => (
            <SwiperSlide key={i}>
              <Box {...el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <a
          className="mx-auto text-center"
          style={{ margin: '0 auto' }}
          href={news[0].button_link}
          target="_blank"
          rel="noreferrer">
          <div className="text-center mb-5">
            <CustomBtn transparent>{news[0].button_text}</CustomBtn>
          </div>
        </a>
      </Container>
    </div>
  );
};

// const news_keys = {
//   id,
//   title,
//   description,
//   image,
//   button_text,
//   status,
// };

const Box = ({ id, title, description, image, button_text, button_link }) => {
  return (
    <div className="flex flex-col gap-[35px] items-center mb-[50px]">
      <div className="grid grid-cols-2 gap-[50px] med-1200:inline med-600:grid med-600:grid-cols-1 med-600:gap-6">
        <img
          loading="lazy"
          className="med-1200:float-left mr-[10px] med-1200:w-[40%] med-600:w-full"
          src={image}
          alt=""
        />
        <div className="flex flex-col gap-1 text-black text-justify med-1200:inline">
          <b className="flex flex-col">
            <span className="font-semibold text-base">{title}</span>
            {/* <span className="font-semibold text-sm">{subtitle}</span> */}
            {/* <span className="text-xs font-normal my-2">{author}</span> */}
          </b>
          <div>
            {/* <span className="text-[10px] my-2">{place}</span> */}
            <p
              className="leading-[170%] text-xs"
              dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </div>
      {/* <CustomBtn>Купить книгу</CustomBtn> */}
    </div>
  );
};
