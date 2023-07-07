import React, { useRef, useState } from 'react';
import { CustomBtn } from '../../../../components/forms';
import { Carousel, Container, Title } from '../../../../components/reusable';
import { useTranslation } from '../../../../hooks';
import { useLoaderData } from 'react-router';
import { SwiperSlide } from 'swiper/react';
const arr = [
  'Армянское нагорье',
  'Армения',
  'Армения',
  'Армянское нагорье',
  'Армянское нагорье',
  'Армянское нагорье',
  'Армения',
  'Армянское нагорье',
];
const Description = ({ children }) => {
  const data = useLoaderData();
  const { regional_monitoring: language } = useTranslation().language;
  const [open, setOpen] = useState(false);

  const ref = useRef();

  return (
    <Container>
      <div className="h-[1px] bg-dark-blue w-[328px] my-0 mx-auto"></div>
      <Title className="my-[30px]">{language?.subtitle}</Title>
      {/* <h6 className="text-center pb-5">{language?.subTitle2}</h6> */}
      {/* <p className="text-xl mb-8 med-1200:text-base whitespace-pre-line">{language?.text}</p> */}
      <div className="my-[70px] flex gap-3 flex-wrap justify-center">
        {language?.data?.map((el, i) => {
          return (
            <CustomBtn
              onClick={() => {
                window.scroll({
                  top: ref.current.offsetTop - 150,
                  // left: 100,
                  behavior: 'smooth',
                });
                // ref.current.scrollIntoView();
              }}
              gradient
              key={i}>
              {el}
            </CustomBtn>
          );
        })}
      </div>
      <Title>{language?.hierarchy}</Title>
      <div
        ref={ref}
        className="text-center my-[30px] text-xl med-1200:text-base"
        dangerouslySetInnerHTML={{ __html: data?.title }}></div>
      <img alt=" " src={data.image} loading="lazy" className="m-[0_auto]" />
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[17px] mt-[120px] mb-[60px]">
        {data?.files?.map(({ type, path }, i) => (
          <div
            key={i}
            onClick={() => {
              setOpen(true);
            }}
            className="h-[184px] ">
            {type === 'image' ? (
              <img loading="lazy" src={path} className="h-full cursor-pointer" />
            ) : (
              <video className="h-[184px] cursor-pointer">
                <source src={path} />
              </video>
            )}
          </div>
        ))}
      </div>
      <Carousel {...{ open }} handleClose={() => setOpen(false)}>
        {data?.files.map(({ type, path }, i) => {
          if (type === 'image') {
            return (
              <SwiperSlide key={i}>
                <img
                  loading="lazy"
                  src={path}
                  className="w-full h-[500px] min-h-[500px] object-contain object-center"
                  alt=""
                />
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide key={i}>
              <center>
                <video controls className="w-full h-[500px] min-h-[500px] object-cover" alt="">
                  <source src={path} type="video/mp4" />
                </video>
              </center>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Description;
