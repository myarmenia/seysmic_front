import { useRef, useState } from 'react';
import styles from './faq.module.css';
import postter from '../../assets/faq/poster_faq.jpg';
import faq from '../../assets/faq/faq.png';
import arrow from '../../assets/faq/arrow.svg';
import { useTranslation } from '../../hooks';
import globus from '../../assets/gif.gif';

export function FAQ({}) {
  const { title, data } = useTranslation().language.FAQ;

  return (
    <div>
      <img
        loading="lazy"
        src={globus}
        className="w-full min-h-[185px] object-cover max-h-[512px]"
        alt=""
      />
      <div className="w-full">
        <img
          loading="lazy"
          src={faq}
          className="object-cover max-h-[208px] max-w-[297px] m-auto mt-4 med-900:hidden"
          alt=""
        />
      </div>
      <div className="mt-4 mb-[126px] m-auto max-w-[1519px] px-[15px]">
        {data.map((el, i) => (
          <Box key={i} {...el} />
        ))}
      </div>
    </div>
  );
}
const Box = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={[
          'flex justify-between items-center pb-2 cursor-pointer',
          styles.question_box,
        ].join(' ')}
        onClick={() => {
          setOpen(!open);
        }}>
        <h3 className={styles.question}>{question} </h3>
        <img
          loading="lazy"
          src={arrow}
          className={
            !open
              ? 'object-cover max-h-[23px] max-w-[12px] ml-[10px] mr-[20px] transition-all'
              : 'object-cover max-h-[23px] max-w-[12px] ml-[10px] mr-[20px] rotate-180 transition-all'
          }
          alt=""
        />
      </div>
      <p
        className={[styles.answer, 'mb-[24px] mt-[21px] transition-all'].join(' ')}
        style={{
          height: !open ? '0px' : '100%',
          overflow: 'hidden',
          fontFamily: 'Inter, sans-serif',
        }}>
        {answer}
      </p>
    </div>
  );
};
