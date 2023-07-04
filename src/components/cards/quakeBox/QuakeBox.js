import React from 'react';
import { Gradient } from '../../reusable';
import { CustomBtn } from '../../forms';
import styles from './quakeBox.module.css';
import { useNavigate } from 'react-router-dom';
import { getLang } from '../../../helper';
import { useTranslation } from '../../../hooks';

export const QuakeBox = ({ image, title, description, date, to, id, length }) => {
  const {
    earth_quakes: { button },
  } = useTranslation().language;
  const navigate = useNavigate();
  return (
    <div className={`${styles.box}`}>
      <img loading="lazy" className={styles.img} src={image} alt="" />
      <div className={styles.content}>
        {/* <Gradient className="text-[16px] leading-6 text-center font-bold line-clamp-2">
          
        </Gradient> */}
        <div className="text-[16px] leading-6 text-center font-bold line-clamp-2">{title}</div>
        <span className="text-[#909090]">{date}</span>
        {/* <p
          className="text-[#3C3C3C] text-center"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 30) }}></p> */}
        <CustomBtn onClick={() => navigate(getLang(`/earth-quakes/earth-quake/${id}`))}>
          {button || 'Узнать больше'}
        </CustomBtn>
      </div>
    </div>
  );
};

// ==============================================================

// title,
// description,
// icon,
// image,
// date,
// time,
// to,

// ==============================================================

// src,
// title,
// description,
// date,
// to

// ==============================================================
