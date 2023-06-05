import React, { useMemo } from 'react';
import { Carousel, Container, RoundNum, Title } from '../../../../../components/reusable';
import exmpl_img1 from '../../../../../assets/main/monitoring/main/example-images/expl-img1.svg';
import exmpl_img2 from '../../../../../assets/main/monitoring/main/example-images/expl2.png';
import exmpl_img3 from '../../../../../assets/main/monitoring/main/example-images/expl3.png';
import exmpl_img4 from '../../../../../assets/main/monitoring/main/example-images/expl4.png';
import exmpl_img5 from '../../../../../assets/main/monitoring/main/example-images/expl5.png';
import animateGif1 from '../../../../../assets/main/monitoring/main/imageGif/animation.mp4';
import animateGif2 from '../../../../../assets/main/monitoring/main/imageGif/animation11.mp4';

import styles from './haitiExample.module.css';
import { useParams } from 'react-router';
import { useState } from 'react';
// import { CircularProgress } from "../../../../../components/reusable/roundNum/RoundNum";

const list_data = [
  'Сейсмичность в Гаити обусловлена взаимодействием Карибской плиты с Северо-Американской.',
  'Для выявления СС Гаити (М≥7.0) была использована информация о сильных землетрясениях c 1700.',
  'В СС выявлены три однородные сейсмотектонические зоны: Септентрионал (А),  Испаниола (B) и Энрикуилло (C).',
  'Подготовка землетрясения Порт О’Пренс начинается с 1953 года. За все время продолжительностью Т=56 лет 7 месяцев в системе 95% времени не было опасно, 3% времени было тревожно, и только 2% времени было опасно. Трек подготовки сильного землетрясения развивался вблизи неустойчивости зоны С  периодически приближаясь к зоне А.',
  'Землетрясение в Гаити в очередной раз показало, что традиционные методы построения карты сейсмической опасности содержат существенные методические ошибки. По традиционной карте сейсмической опасности столица Гаити Порт О’Пренс располагалась в VI-VII бальной зоне, а во время землетрясения подверглась воздействию в IX-X баллов.',
  'Метод сейсмической энтропии позволяет устранить недостатки традиционных методов оценки сейсмической опасности и позволяет строить динамические карты как для суши, таки для океанического дна.',
];
const list_data_en = [
  'Seismicity in Haiti is due to the interaction of the Caribbean plate with the North American.',
  'To identify the SS of Haiti (M≥7.0), information on strong earthquakes since 1700 was used.',
  'Three homogeneous seismotectonic zones have been identified in the SS: Septentrional (A), Hispaniola (B) and Enriquillo (C).',
  'Preparing for the Port au Prince earthquake begins in 1953. For the entire time of T=56 years 7 months in the system, 95% of the time it was not dangerous, 3% of the time it was alarming, and only 2% of the time it was dangerous. The preparation track for a strong earthquake developed near the instability of zone C, periodically approaching to zone A.',
  'The earthquake in Haiti once again showed that traditional methods of seismic hazard mapping contain significant methodological errors. According to the traditional seismic hazard map, the capital of Haiti, Port au Prince, was located in the VI-VII intensity area, and during the earthquake it was affected in the IX-X balls.',
  'The MSE eliminates the shortcomings of traditional seismic hazard assessment methods and allows you to build dynamic maps for both land and ',
];
const list_data_am = [
  'Сейсмичность в Гаити обусловлена взаимодействием Карибской плиты с Северо-Американской.',
  'To identify the SS of Haiti (M≥7.0), information on strong earthquakes since 1700 was used.',
  'Three homogeneous seismotectonic zones have been identified in the SS: Septentrional (A), Hispaniola (B) and Enriquillo (C).',
  'Preparing for the Port au Prince earthquake begins in 1953. For the entire time of T=56 years 7 months in the system, 95% of the time it was not dangerous, 3% of the time it was alarming, and only 2% of the time it was dangerous. The preparation track for a strong earthquake developed near the instability of zone C, periodically approaching to zone A.',
  'The earthquake in Haiti once again showed that traditional methods of seismic hazard mapping contain significant methodological errors. According to the traditional seismic hazard map, the capital of Haiti, Port au Prince, was located in the VI-VII intensity area, and during the earthquake it was affected in the IX-X balls.',
  'The MSE eliminates the shortcomings of traditional seismic hazard assessment methods and allows you to build dynamic maps for both land and ',
];
const ul_data1 = [
  'По величине накопленной энтропии это землетрясение является самым сильным в мире, W=20.586.',
  'Подготовка землетрясения началась с 1946 г. и продолжалась 65 лет. За все это время (99.975% от времени подготовки) катастрофическое мега землетрясение исключалось. Траектория развивалась ниже зоны неустойчивости.',
  'Мониторинг землетрясения производился одновременно в двух СС Япония М≥7.8 и Мега Япония М≥8.4 с начала 2008 г.',
  'Последние три года опасность была локализована на СВ Хонсю и мигрировала от Токио вначале на восток в сторону океана, а затем вдоль СВ побережья на север.',
  'Только 9 марта 2011 года, после землетрясения с магнитудой 7.5, трек попал в зону неустойчивости и через два дня произошла катастрофа.',
  'Если бы наша КТ мониторинга была бы взята официально на вооружение японскими сейсмологами и правительством, то землетрясение Тохоку была бы спрогнозирована на краткосрочном этапе за два дня до землетрясения с вероятностью Pt=99.975%.',
];
const ul_data1_am = [
  'По величине накопленной энтропии это землетрясение является самым сильным в мире, W=20.586.',
  'Подготовка землетрясения началась с 1946 г. и продолжалась 65 лет. За все это время (99.975% от времени подготовки) катастрофическое мега землетрясение исключалось. Траектория развивалась ниже зоны неустойчивости.',
  'Мониторинг землетрясения производился одновременно в двух СС Япония М≥7.8 и Мега Япония М≥8.4 с начала 2008 г.',
  'Последние три года опасность была локализована на СВ Хонсю и мигрировала от Токио вначале на восток в сторону океана, а затем вдоль СВ побережья на север.',
  'Только 9 марта 2011 года, после землетрясения с магнитудой 7.5, трек попал в зону неустойчивости и через два дня произошла катастрофа.',
  'Если бы наша КТ мониторинга была бы взята официально на вооружение японскими сейсмологами и правительством, то землетрясение Тохоку была бы спрогнозирована на краткосрочном этапе за два дня до землетрясения с вероятностью Pt=99.975%.',
];
const ul_data1_en = [
  'By the value of the accumulated entropy, this earthquake is the strongest in the world in the identified SS, W = 20.586.',
  'Preparation of the earthquake began in 1946 and lasted 65 years. During all this time (99.975% of the preparation time), a catastrophic mega-earthquake was excluded. The trajectory developed below the zone of instability.',
  'Earthquake monitoring was carried out simultaneously in two SS Japan М≥7.8 and Mega Japan М≥8.4 since the beginning of 2008.',
  'Over the last three years, the danger has been localized on the NE Honshu and migrated from Tokyo, first East to the ocean, and then along the NE coast to the North.',
  'Only on March 9, 2011, after a triggering earthquake with a magnitude of 7.5, the track jumped into an unstable zone and two days later there occurred a disaster.',
  'If our monitoring CT would have been officially adopted by Japanese seismologists and the government, the Tohoku earthquake would have been predicted at the short term two days before the earthquake with a probability of P=99.975%.',
];

export const HaitiExample = () => {
  const { lang } = useParams();
  const data = useMemo(() => {
    if (lang === 'ru') {
      return [
        {
          title: 'ГАИТИ, 12 января 2010, М = 7.2 *',
          video: animateGif1,
          subtitle:
            ' Покажем это на примере катастрофического землетрясения Порт О’Пренс, ГАИТИ, 12 января 2010, М = 7.2 *. Это землетрясение привело к огромному число жертв и разрушений',
          numbers: [
            { numbers: 222570, title: 'число погибших составило' },
            { numbers: 311000, title: 'число получивших ранения' },
            { numbers: 869, title: 'пропавших без вести  человек.' },
            {
              numbers: 5600_000_000,
              title: 'Материальный ущерб оценивается в  евро.',
            },
          ],

          list_data: list_data,
          images: [
            { title: 'Интенсивность', img: exmpl_img1 },
            { title: 'Интенсивность', img: exmpl_img2 },
          ],
          quake_desc: {
            text: '* Землетрясение Порт О’Пренс, Гаити, USGS-EMSC',
            red_text: '2010.01.12 21:53:10 18.46N 72.53W H = 13 км М = 7.2',
          },
        },
        {
          title: 'Тохоку, ЯПОНИЯ, 11 марта 2011, М = 9.0 *',
          video: animateGif2,
          subtitle:
            'Покажем это на примере мониторинга неустойчивости при подготовке катастрофического землетрясения Тохоку, ЯПОНИЯ, 11 марта 2011, М = 9.0 *',
          numbers: [
            { numbers: 15896, title: 'число погибших составило' },
            { numbers: 6157, title: 'число получивших ранения' },
            { numbers: 2536, title: 'пропавших без вести  человек.' },
          ],
          list_data: ul_data1,
          images: [
            { title: 'Интенсивность', img: exmpl_img3 },
            { title: 'Интенсивность', img: exmpl_img4 },
            { title: 'Интенсивность', img: exmpl_img5 },
          ],
          quake_desc: {
            text: '* Землетрясение Тохоку, ЯПОНИЯ, USGS-EMSC',
            red_text: '2010.01.12 05:46:23 38.32N 142.37W H = 32 км М = 9.0',
          },
        },
      ];
    } else if (lang === 'en') {
      return [
        {
          title: 'HAITI, January 12, 2010, M = 7.2 *',
          video: animateGif1,
          subtitle:
            'The catastrophic earthquake in Port au Prince, HAITI, January 12, 2010, M = 7.2 *.This earthquake led to a huge number of victims and destruction.',
          numbers: [
            {
              numbers: 222570,
              title: 'according to official figures, the death toll was people',
            },
            { numbers: 311000, title: 'people were injured,' },
            { numbers: 869, title: 'people were missing' },
            {
              numbers: 5600_000_000,
              title: 'material damage is estimated at euros',
            },
          ],
          list_data: list_data_en,
          images: [
            { title: 'Intensity', img: exmpl_img1 },
            { title: 'Intensity', img: exmpl_img2 },
          ],
          quake_desc: {
            text: '* Tohoku earthquake, JAPAN, USGS-EMSC',
            red_text: '2011.03.11   05:46:23   38.32N  142.37W   H = 32 km    М = 9.0 ',
          },
        },
        {
          title: 'Tohoku, JAPAN, March 11, 2011, M = 9.0 *',
          video: animateGif2,
          subtitle:
            'Monitoring of instability in preparation of the catastrophic earthquake Tohoku, JAPAN, March 11, 2011, M = 9.0 *',
          numbers: [
            {
              numbers: 15896,
              title:
                'according to official figures, the death toll from the earthquake and tsunami in Japan is 15,896 people,',
            },
            { numbers: 6157, title: 'people are missing' },
            { numbers: 2536, title: 'people people are injured' },
          ],
          list_data: ul_data1_en,
          images: [
            { title: 'Intensity', img: exmpl_img3 },
            { title: 'Intensity', img: exmpl_img4 },
            { title: 'Intensity', img: exmpl_img5 },
          ],
          quake_desc: {
            text: '* Earthquake Port au Prince, Haiti, USGS-EMSC',
            red_text: '2010.01.12   21:53:10   18.46N   72.53W   H = 13 km    М = 7.2   ',
          },
        },
      ];
    } else if (lang === 'am') {
      return [
        {
          title: 'HAITI, January 12, 2010, M = 7.2 *',
          video: animateGif1,
          subtitle:
            ' Покажем это на примере катастрофического землетрясения Порт О’Пренс, ГАИТИ, 12 января 2010, М = 7.2 *. Это землетрясение привело к огромному число жертв и разрушений',
          numbers: [
            { numbers: 222570, title: 'число погибших составило' },
            { numbers: 311000, title: 'число получивших ранения' },
            { numbers: 869, title: 'пропавших без вести  человек.' },
            {
              numbers: 5600_000_000,
              title: 'Материальный ущерб оценивается в  евро.',
            },
          ],
          list_data: list_data,
          images: [
            { title: 'Интенсивность', img: exmpl_img1 },
            { title: 'Интенсивность', img: exmpl_img2 },
          ],
          quake_desc: {
            text: '* Землетрясение Порт О’Пренс, Гаити, USGS-EMSC',
            red_text: '2010.01.12 21:53:10 18.46N 72.53W H = 13 км М = 7.2',
          },
        },
        {
          title: 'на прИМЕРе тохоку',
          video: animateGif2,
          subtitle:
            'Покажем это на примере мониторинга неустойчивости при подготовке катастрофического землетрясения Тохоку, ЯПОНИЯ, 11 марта 2011, М = 9.0 *',
          numbers: [
            { numbers: 15896, title: 'число погибших составило' },
            { numbers: 6157, title: 'число получивших ранения' },
            { numbers: 2536, title: 'пропавших без вести  человек.' },
          ],
          list_data: ul_data1,
          ImageGif: 'haitivido',
          images: [
            { title: 'Интенсивность', img: exmpl_img3 },
            { title: 'Интенсивность', img: exmpl_img4 },
            { title: 'Интенсивность', img: exmpl_img5 },
          ],
          quake_desc: {
            text: '* Землетрясение Тохоку, ЯПОНИЯ, USGS-EMSC',
            red_text: '2010.01.12 05:46:23 38.32N 142.37W H = 32 км М = 9.0',
          },
        },
      ];
    }
  }, [lang]);
  return (
    <>
      <div className="flex flex-col gap-16 py-10 med-1200:gap-12 med-600:gap-8 med-600:py-5">
        {data.map((el, i) => (
          <Box {...el} key={i} />
        ))}
      </div>
    </>
  );
};
const Box = ({ title, subtitle, numbers, list_data, images, quake_desc, video }) => {
  return (
    <>
      <Container className="flex flex-col gap-8 med-900:gap-6">
        <Title>{title}</Title>
        <p className="text-[21px] med-1200:text-[16px] med-1200:text-center">{subtitle}</p>
        <Datas {...{ numbers }} />
        <div className="flex flex-col gap-[35px] med-1200:gap-[30px] med-900:gap-7 med-600:gap-5 py-5">
          {/* <Title>
          Визуализация процесса подготовки катастрофического землетрясения
        </Title> */}
          <div className="gap-4 med-900:flex med-900:flex-col med-600:gap-2">
            <video className="h-[277px] w-[390px] float-left pr-[25px] pb-[25px] med-900:pb-[15px] med-900:w-full med-900:p-0" autoPlay loop src={video}></video>
            {list_data.map((text, i) => (
              <p className={styles['list-item']} key={i}>
                <span>{text}</span>
              </p>
            ))}
          </div>
          <div className="flex items-center justify-between gap-5 med-1200:flex-wrap">
            <div className="flex gap-[34px] med-1200:gap-5 med-900:gap-3 med-600:grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] med-600:w-full">
              {images.map((el, i) => (
                <ImageBox {...el} key={i} />
              ))}
            </div>
            <div className="flex flex-col gap-2 text-[26px] leading-[168.5%] text-justify med-600:text-sm">
              <p>{quake_desc.text}</p>
              <p className="text-[#F05328]">{quake_desc.red_text}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

// Current page's componentsn -------------------
const ImageBox = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span>{title}</span>
      <img className="max-w-[280px] med-900:w-full" src={img} alt="" />
    </div>
  );
};
const Datas = ({ numbers }) => {
  return (
    <div className="flex flex-col items-center gap-12 med-1200:gap-10 med-900:gap-8 med-600:gap-5">
      {/* <p className="text-[26px] w-fit med-600:text-sm med-600:text-center">
        По официальным данным
      </p> */}
      <div className="w-[90%] grid justify-items-center grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-5 med-600:grid-cols-2">
        {numbers.map((el, i) => (
          <RoundNum {...el} key={i} />
        ))}
      </div>
    </div>
  );
};
