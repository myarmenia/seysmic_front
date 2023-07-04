import React, { useMemo } from 'react';
import styles from './levels.module.css';
import { Container, Title } from '../../../../../components/reusable';
import flag1 from '../../../../../assets/main/monitoring/main/flags/flag1.svg';
import flag2 from '../../../../../assets/main/monitoring/main/flags/flag2.svg';
import flag3 from '../../../../../assets/main/monitoring/main/flags/flag3.svg';
import flag4 from '../../../../../assets/main/monitoring/main/flags/flag4.svg';
import flag1en from '../../../../../assets/main/monitoring/main/flags/flag_en1.svg';
import flag2en from '../../../../../assets/main/monitoring/main/flags/flag_en2.svg';
import flag3en from '../../../../../assets/main/monitoring/main/flags/flag_en3.svg';
import flag4en from '../../../../../assets/main/monitoring/main/flags/flag_en4.svg';
import flag1am from '../../../../../assets/main/monitoring/main/flags/flag_am1.svg';
import flag2am from '../../../../../assets/main/monitoring/main/flags/flag_am2.svg';
import flag3am from '../../../../../assets/main/monitoring/main/flags/flag_am3.svg';
import flag4am from '../../../../../assets/main/monitoring/main/flags/flag_am4.svg';
import { useParams } from 'react-router';
import { useTranslation } from '../../../../../hooks';

export const Levels = () => {
  const { lang } = useParams();
  const {
    monitoring_and_prediction: { forecast_are_divided: language },
  } = useTranslation().language;
  console.log(language.text);
  const items = useMemo(() => {
    if (lang === 'ru') {
      return [
        {
          flag: flag1,
          text: 'Надежный — число завершившихся сейсмических циклов ≥ 15',
          imgClassName: 'med-900:w-[24%]',
        },
        {
          flag: flag2,
          text: 'Хороший — число завершившихся сейсмических циклов ≥ 10',
          imgClassName: 'med-900:w-[31%]',
        },
        {
          flag: flag3,
          text: 'Посредственный— число завершившихся сейсмических циклов ≥ 5',
          imgClassName: 'med-900:w-[38%]',
        },
        {
          flag: flag4,
          text: 'Плохой — число завершившихся сейсмических циклов от 2 до 5 ',
          imgClassName: 'med-900:w-[45%]',
        },
      ];
    } else if (lang === 'en') {
      return [
        {
          flag: flag1en,
          text: 'Reliable — the number of completed seismic cycles ≥ 15',
          imgClassName: 'med-900:w-[24%]',
        },
        {
          flag: flag2en,
          text: 'Good — the number of completed seismic cycles ≥ 10',
          imgClassName: 'med-900:w-[31%]',
        },
        {
          flag: flag3en,
          text: 'Mediocre — the number of completed seismic cycles ≥ 5',
          imgClassName: 'med-900:w-[38%]',
        },
        {
          flag: flag4en,
          text: 'Bad — the number of completed seismic cycles from 2 to 5',
          imgClassName: 'med-900:w-[45%]',
        },
      ];
    } else if (lang === 'am') {
      return [
        {
          flag: flag1am,
          text: 'Հուսալի - ավարտված սեյսմիկ ցիկլերի քանակը ≥ 15',
          imgClassName: 'med-900:w-[24%]',
        },
        {
          flag: flag2am,
          text: 'Լավ - ավարտված սեյսմիկ ցիկլերի քանակը ≥ 10',
          imgClassName: 'med-900:w-[31%]',
        },
        {
          flag: flag3am,
          text: 'Միջին - ավարտված սեյսմիկ ցիկլերի քանակը ≥ 5',
          imgClassName: 'med-900:w-[38%]',
        },
        {
          flag: flag4am,
          text: 'Վատ - ավարտված սեյսմիկ ցիկլերի քանակը 2-ից 5-ը:',
          imgClassName: 'med-900:w-[45%]',
        },
      ];
    }
    return [];
  }, [lang]);
  return (
    <div className="py-8 med-600:py-5">
      <Title className="py-5">{language?.title}</Title>
      <Container bg={styles.bg} className={styles.my_container}>
        <div className="flex flex-col gap-[24px] px-[35px] justify-center relative med-600:gap-[3px]">
          {items.map((el, i) => (
            <Box {...el} key={i} />
          ))}
        </div>
        <p className={styles.describtion}>{language.text}</p>
      </Container>
    </div>
  );
};

const Box = ({ text, flag, imgClassName }) => {
  return (
    <div className="flex gap-6 items-center med-600:gap-[14px]">
      <img
        loading="lazy"
        className={'h-[135px] shrink-[1] med-900:h-fit ' + imgClassName}
        src={flag}
        alt="asdfas"
      />
      <p className="font-semibold text-[22px] mt-5 shrink-[2] med-900:text-[12px] med-600:text-[9px] med-600:leading-[11px]">
        {text}
      </p>
    </div>
  );
};
