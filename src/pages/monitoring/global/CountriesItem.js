import React, { useState } from 'react';
import globalMap from '../../../assets/main/monitoring/globalMap.svg';
import { Carousel, Container, Title } from '../../../components/reusable';
import instance from '../../../api';
import { useLoaderData, useLocation, useParams } from 'react-router';
import { useTranslation } from '../../../hooks';
import { SwiperSlide } from 'swiper/react';

const Component = () => {
  const data = useLoaderData();
  const [open, setOpen] = useState(false);
  const [openSlideId, setOpenSlideId] = useState(0);
  const { global: language } = useTranslation().language.monitoring;

  return (
    <Container className="py-[var(--py)]">
      <Title>{language.CountriesItem.title}</Title>
      <img loading="lazy" src={data.image_path} alt="" className="mx-auto mb-0 mt-[20px]" />
      <div className="flex gap-3 med-900:flex-col">
        <div className="grid gap-3 mt-[110px] med-1200:mt-5 med-1200:grid-cols-1">
          <div className="flex flex-col gap-3">
            <span className="text-[26px] font-semibold med-600:text-base">{data?.title}</span>

            <p
              className="text-xl med-600:text-xs "
              dangerouslySetInnerHTML={{ __html: data?.description }}></p>
          </div>
        </div>
        <img
          loading="lazy"
          src={data?.schema_path}
          alt=""
          className="mx-auto w-1/2 object-contain mb-0 mt-[50px]"
        />
      </div>
      <div className="grid grid-cols-4 gap-[17px] mt-[120px] med-900:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] med-600:grid-cols-2">
        {data?.files.map(({ path, type }, i) => (
          <div
            key={i}
            onClick={() => {
              setOpen(true);
              setOpenSlideId(i);
            }}
            className="h-[184px] ">
            {type === 'image' ? (
              <img
                loading="lazy"
                key={path}
                src={path}
                className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"
              />
            ) : type === 'video' ? (
              <video
                controls
                className="w-full object-cover h-[200px] med-1200:h-[150px] med-600:h-[100px]"
                alt="">
                <source src={path} type="video/mp4" />
              </video>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
      <Carousel {...{ open }} initialSlide={openSlideId} handleClose={() => setOpen(false)}>
        {data?.files.map(({ type, path }, i) => {
          if (type === 'image') {
            return (
              <SwiperSlide key={i}>
                <img
                  loading="lazy"
                  src={path}
                  className="w-full h-full min-h-[500px] object-contain object-center"
                  alt=""
                />
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide key={i}>
              <center>
                <video controls className="w-full h-full min-h-[500px] object-cover" alt="">
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
const loader1 = async ({ params: { lang, id } }) => {
  try {
    const res = await instance.get(`region-info/${id}?lng=${lang}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
const loader2 = async ({ params: { lang, id } }) => {
  try {
    const res = await instance.get(`map-region-info/${id}?lng=${lang}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const CountriesItem = Object.assign(Component, { loader1, loader2 });
