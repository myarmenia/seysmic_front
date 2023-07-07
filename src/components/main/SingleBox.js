import React, { useState } from 'react';
import { Carousel, Share } from '../reusable';
import { SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router';

const leng = {
  am: 'մագնիտուդ',
  ru: 'магнитуда',
  en: 'magnitude',
};

export const SingleBox = ({
  date,
  description,
  files,
  links,
  logo,
  time,
  title,
  magnitude,
  current_earthquake,
  boxes_data,
  Item,
}) => {
  const { lang } = useParams();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        {/* <img
          loading="lazy"
          src={files?.filter((el) => el.type === "image")[0]?.path}
          className="w-full min-h-[185px] object-contain max-h-[512px]"
          alt=""
        /> */}
        <div className="grid grid-cols-[5fr_2fr] med-1255:grid-cols-1">
          <div className="flex flex-col gap-[34px] py-[41px] px-[68px] med-900:px-[32px] med-600:px-5 med-600:py-6">
            <div className="flex justify-between gap-5">
              <div className="flex gap-5 med-600:gap-2">
                <img
                  loading="lazy"
                  className="h-[95px] w-[77px] object-contain med-600:h-[50px]"
                  src={logo || files[0].path}
                  alt=""
                />
                <div className="flex flex-col gap-[14px]">
                  <h4 className="text-dark-blue text-[32px] font-bold med-600:text-[20px]">
                    {title}
                  </h4>
                  <span className="text-[#415455] text-base med-600:text-sm">
                    {date} {time}
                    {magnitude && ` ${magnitude} ${leng[lang]}`}
                  </span>
                </div>
              </div>

              <Share title={title} description={description} url={window.location.href} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <div className="">
              {links?.length && (
                <ol type="1" style={{ listStyle: 'auto inside', marginBottom: '40px' }}>
                  {links.map((el, i) => (
                    <li key={i} className="text-[#1267CB] text-[20px] text-center">
                      <a className="underline" href={el} target="_blank" rel="noreferrer">
                        {el}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] justify-items-center gap-[17px] w-full">
                {files?.map(({ type, path }, i) => (
                  <div key={i} onClick={() => setOpen(true)} className="h-[184px]">
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
            </div>
          </div>
          <div
            // style={{height:"maxContent" }}
            className="py-[41px] px-[42px] h-fit bg-[#F9F9F9] grid-cols-[repeat(auto-fit,_minmax(310px,_1fr))] justify-items-center gap-[28px] med-900:px-[32px] med-600:p-[25px_20px]">
            {boxes_data.map((el, i) => (
              <Item {...el} key={i} />
            ))}
          </div>
        </div>
      </div>
      <Carousel {...{ open }} handleClose={() => setOpen(false)}>
        {files.map(({ type, path }, i) => {
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
    </>
  );
};
