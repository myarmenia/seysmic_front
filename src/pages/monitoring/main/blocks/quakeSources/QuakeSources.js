import React, { useMemo } from 'react';
import img2 from '../../../../../assets/main/monitoring/main/sources/A2.png';
import img1 from '../../../../../assets/main/monitoring/main/sources/A1.png';
import B1 from '../../../../../assets/main/monitoring/main/sources/B1.png';
import B2 from '../../../../../assets/main/monitoring/main/sources/B2.png';
import C1 from '../../../../../assets/main/monitoring/main/sources/C1.png';
import C2 from '../../../../../assets/main/monitoring/main/sources/C2.png';
import D1 from '../../../../../assets/main/monitoring/main/sources/D1.png';
import D2 from '../../../../../assets/main/monitoring/main/sources/D2.png';
import { Gradient, Title } from '../../../../../components/reusable';
import { useTranslation } from '../../../../../hooks';
import { useParams } from 'react-router';

export const QuakeSources = () => {
  const {
    monitoring_and_prediction: {
      movements_at_the_borders: { title, subtitle },
    },
  } = useTranslation().language;
  const { lang } = useParams();
  const data = useMemo(() => {
    if (lang === 'en') {
      return [
        {
          title: 'Normal Fault',
          number: 'A',
          img1: img1,
          img2: img2,
        },
        {
          title: 'Thrust Fault',
          number: 'B',
          img1: B1,
          img2: B2,
        },
        {
          title: 'Strick-Slip Transform Fault',
          number: 'C',
          img1: C1,
          img2: C2,
        },
        {
          title: 'Strick-Slip-Normal Fault',
          number: 'D',
          img1: D1,
          img2: D2,
        },
      ];
    }
    if (lang === 'ru') {
      return [
        {
          title: 'Сброс',
          number: 'A',
          img1: img1,
          img2: img2,
        },
        {
          title: 'Надвиг-Подвиг',
          number: 'B',
          img1: B1,
          img2: B2,
        },
        {
          title: 'Сдвиг',
          number: 'C',
          img1: C1,
          img2: C2,
        },
        {
          title: 'Сбросо-сдвиг',
          number: 'D',
          img1: D1,
          img2: D2,
        },
      ];
    }
    if (lang === 'am') {
      return [
        {
          title: 'Վարնետք',
          number: 'A',
          img1: img1,
          img2: img2,
        },
        {
          title: 'Վերնետք',
          number: 'B',
          img1: B1,
          img2: B2,
        },
        {
          title: 'Կողաշարժ',
          number: 'C',
          img1: C1,
          img2: C2,
        },
        {
          title: 'Վարնետք\n\n\n-Կողաշարժ',
          number: 'D',
          img1: D1,
          img2: D2,
        },
      ];
    }
    return [];
  }, [lang]);
  let a = Math.floor(window.innerWidth / 3);
  console.log(window.innerWidth);
  return (
    <div className="flex flex-col gap-7 py-20 med-900:py-10">
      <Title className="whitespace-pre-line">{title}</Title>
      <div
        style={{ width: "90%", margin: '0 auto' }}
        className="flex gap-4 justify-around med-600:grid med-600:grid-cols-2 med-600:gap-x-[2.5rem] med-600:gap-y-4 justify-items-center w-[100%]">
        {data?.length && data.map((el, i) => <Box key={i} {...el} />)}
      </div>
      <p className="text-[24px] text-center leading-[165%] med-900:text-sm">{subtitle}</p>
    </div>
  );
};

const Box = ({ title, number, img1, img2 }) => {
  return (
    <div className="flex gap-1">
      <Gradient className="text-[26px] ">{number}</Gradient>
      <div className="flex flex-col gap-1 items-center">
        <div className="flex flex-col gap-2">
          <img loading="lazy" src={img1} alt="" className="min-h-[75px]" />
          <img src={img2} loading="lazy" alt="" className="min-h-[75px]" />
        </div>
        <Gradient className="text-[18px] text-center w-full med-600:text-sm">{title}</Gradient>
      </div>
    </div>
  );
};
