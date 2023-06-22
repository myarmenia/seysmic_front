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
  'Seismicity in Haiti is caused by the interaction of the Caribbean plate with the North American plate.',
  'Information on strong earthquakes since 1700 was used to identify the Haiti SS (M≥7.0).',
  'Three homogeneous seismotectonic zones have been identified in the SS: Septentrional (A), Hispaniola (B) and Enricuillo (C).',
  'Preparation of the Haiti earthquake begins with 1953. For the entire time duration of T=56 years and 7 months, 95% of the time in the system was not dangerous, 3% of the time was alarming, and only 2% of the time was dangerous. The track of preparation for a strong earthquake developed near the instability of zone C, periodically approaching zone A (see animation).',
  'The earthquake in Haiti has once again shown that traditional methods of constructing a seismic hazard map contain significant methodological errors. According to the traditional seismic hazard map, the capital of Haiti, Port-au-Prince, was located in the VI-VII point zone, and during the earthquake it was exposed to IX-X points.',
  'The seismic entropy method eliminates the disadvantages of traditional methods of assessing seismic hazard and allows you to build dynamic maps for both land and ocean floor.',
];
const list_data_am = [
  'Հայիթիում սեյսմիկությունը պայմանավորված է Կարիբյան և Հյուսիս-Ամերիկյան սալերի փոխազդեցությամբ:',
  'Հայիթիի ՍՀ-ը (M≥7.0) բացահայտելու համար օգտագործվել են ուժեղ երկրաշարժերի մասին տեղեկությունները սկսած՝ 1700 թ․:',
  'Հայիթիի ՍՀ-ում հայտնաբերվել են երեք համասեռ սեյսմատեկտոնական գոտիներ՝ Septentrional (A), Hispaniola (B) և Enriquillo (C):',
  'Վերլուծությունը ցույց է տալիս, որ երկրաշարժի նախապատրաստումը սկսվել է 1953թ․ և նախապատրաստման ամբողջ ժամանակահատվածի 95%-ում վտանգավոր չէր, 3%-ում տագնապալի էր, և միայն 2%-ում՝ վտանգավոր։ Ուժեղ երկրաշարժի նախապատրաստման գործընթացը զարգացել է C գոտու անկայունության մոտ՝ պարբերաբար մոտենալով A գոտուն (տե՛ս անիմացիան)։',
  'Հայիթիի երկրաշարժը կրկին ցույց տվեց, որ սեյսմիկ վտանգի քարտեզագրման ավանդական մեթոդները պարունակում են նշանակալի մեթոդական սխալներ: Ըստ ավանդական սեյսմիկ վտանգի քարտեզի՝ Հայիթիի մայրաքաղաք Պորտ-օ-Պրենսը գտնվում էր VI-VII ինտենսիվության գոտում, սակայն երկրաշարժի ինտենսիվությունը կազմեց IX-X բալ։',
  'ՍԷՄ-ը լրացնում է սեյսմիկ վտանգի գնահատման ավանդական մեթոդների թերությունները և թույլ է տալիս կազմել դինամիկ քարտեզներ ինչպես ցամաքի, այնպես էլ օվկիանոսի հատակի համար:',
];
const ul_data1 = [
  'По величине накопленной энтропии это землетрясение является самым сильным в мире, W=20.586.',
  'Подготовка землетрясения началась с 1946 г. и продолжалась 65 лет. За все это время (99.975% от времени подготовки) катастрофическое мега землетрясение исключалось. Траектория развивалась ниже зоны неустойчивости.',
  'Мониторинг землетрясения производился одновременно в двух СС Япония М≥7.8 и Мега Япония М≥8.4 с начала 2008 г.',
  'Последние три года опасность была локализована на СВ Хонсю и мигрировала от Токио вначале на восток в сторону океана, а затем вдоль СВ побережья на север.',
  'Только 9 марта 2011 года, после землетрясения с магнитудой 7.5, трек попал в зону неустойчивости и через два дня произошла катастрофа.',
  
];
const ul_data1_am = [
  'Ըստ կուտակած էնտրոպիայի (W = 20,586) արժեքի՝ այս երկրաշարժն աշխարհում ամենաուժեղն է:',
  'Երկրաշարժի նախապատրաստումը սկսվել է 1946թ․ և տևել 65 տարի։ Այդ ժամանակահատվածում (նախապատրաստման ժամանակի 99,975%-ը) աղետալի մեգաերկրաշարժի տեղի ունենալը բացառվել է (հետագիծը զարգացել է անկայունության գոտուց ներքև)։',
  'Վերջին երեք տարիների ընթացքում վտանգը տեղայնացվել էր հս-արլ Հոնսյուում և միգրացվել Տոկիոյից՝ սկզբում դեպի արևելք՝ օվկիանոսի կողմ, իսկ հետո՝ հյուսիս-արևելյան ափով դեպի հյուսիս:',
  '2011թ. մարտի 9-ին, 7․5 մագնիտուդով ուժեղ տրիգերային երկրաշարժի տեղի ունենալուց հետո հետագիծը մուտք գործեց անկայունության գոտի, որից երկու օր անց տեղի ունեցավ աղետը:',
];
const ul_data1_en = [
  'In terms of accumulated entropy, this earthquake is the strongest in the world, W = 20.586.',
  'Earthquake preparation began with 1946 and lasted 65 years. During all this time (99.98% of the preparation time), a catastrophic megaearthquake was excluded. The trajectory developed below the instability zone.',
  'Earthquake monitoring has been carried out simultaneously in two SS Japan M≥7.8 and Mega Japan M≥8.4 since the beginning of 2008.',
  'Over the past three years, the danger has been localized on the NE Honshu and migrated from Tokyo first to the east towards the ocean, and then along the east coast to the north.',
  'Only on March 9, 2011, after an earthquake with a magnitude of 7.5, the track fell into an unstable zone and two days later a disaster occurred.',
];

export const HaitiExample = () => {
  const { lang } = useParams();
  const data = useMemo(() => {
    if (lang === 'ru') {
      return [
        {
          title11: 'Визуализация процесса подготовки катастрофического землетрясения',
          title: 'ГАИТИ, 12 января 2010, М = 7.2 *',
          video: animateGif1,
          subtitle:
            ' Покажем это на примере катастрофического землетрясения Порт О’Пренс, ГАИТИ, 12 января 2010, М = 7.2 *. \nЭто землетрясение привело к огромному число жертв и разрушений',
          numbers: [
            { numbers: 222570, title: 'число погибших' },
            { numbers: 311000, title: 'число получивших ранения' },
            { numbers: 869, title: 'пропавших без вести' },
            {
              numbers: 5600_000_000,
              title: 'Материальный ущерб (евро)',
            },
          ],

          list_data: list_data,
          images: [
            { title: 'Интенсивность', img: exmpl_img1 },
            { title: 'Механизм очага', img: exmpl_img2 },
          ],
          quake_desc: {
            text: '* Землетрясение Порт О’Пренс, Гаити, USGS-EMSC',
            red_text: '2010.01.12 21:53:10 18.46N 72.53W H = 13 км М = 7.2',
          },
        },
        {
          title11: 'Визуализация процесса подготовки катастрофического землетрясения',
          title: ' Тохоку, ЯПОНИЯ, 11 марта 2011, М = 9.0 *',
          video: animateGif2,
          subtitle:
            'Покажем это на примере мониторинга неустойчивости при подготовке катастрофического землетрясения Тохоку, ЯПОНИЯ, 11 марта 2011, М = 9.0 *',
          numbers: [
            { numbers: 15896, title: 'число погибших' },
            { numbers: 6157, title: 'число получивших ранения' },
            { numbers: 2536, title: 'пропавших без вести' },
            { numbers: 122_000_000_000, title: 'Материальный ущерб (евро)' },
          ],
          list_data: ul_data1,
          images: [
            { title: 'Интенсивность', img: exmpl_img3 },
            { title: 'Афтершоки', img: exmpl_img4 },
            { title: 'Механизм очага', img: exmpl_img5 },
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
          subtitle: 'Visualization of the process of preparing a catastrophic earthquake',
          numbers: [
            {
              numbers: 222570,
              title: 'Deaths',
            },
            { numbers: 311000, title: 'Injured' },
            { numbers: 869, title: 'Missing persons' },
            {
              numbers: 5600_000_000,
              title: 'Material damage (euro)',
            },
          ],
          list_data: list_data_en,
          images: [
            { title: 'Intensity', img: exmpl_img1 },
            { title: 'Focal Mechanism', img: exmpl_img2 },
          ],
          quake_desc: {
            text: '* Port-au-Prince earthquake, Haiti, USGS-EMSC',
            red_text: '2010.01.12 21:53:10 18.46N 72.53W H = 13 km М = 7.2',
          },
        },
        {
          title: 'Tohoku, March 11, 2011, M = 9.0 *',
          video: animateGif2,
          subtitle: 'Visualization of the process of preparing a catastrophic earthquake',
          numbers: [
            {
              numbers: 15896,
              title: 'Deaths',
            },
            { numbers: 6157, title: 'Injured' },
            { numbers: 2536, title: 'Missing persons' },
            { numbers: 122_000_000_000, title: 'Material damage (euro)' },
          ],
          list_data: ul_data1_en,
          images: [
            { title: 'Intensity', img: exmpl_img3 },
            { title: 'Aftershocks', img: exmpl_img4 },
            { title: 'Focal Mechanism', img: exmpl_img5 },
          ],
          quake_desc: {
            text: '* Tohoku earthquake, Japan, USGS-EMSC',
            red_text: '2011.03.11 05:46:23 38.32N 142.37W H = 32 km М = 9.0',
          },
        },
      ];
    } else if (lang === 'am') {
      return [
        {
          title: 'ՀԱՅԻԹԻ, 12 հունվարի 2010, M = 7.2 *',
          video: animateGif1,
          subtitle: 'աղետալի երկրաշարժի նախապատրաստման վիզուալիզացիան',
          numbers: [
            { numbers: 222570, title: 'Զոհեր' },
            { numbers: 311000, title: 'Վիրավորներ' },
            { numbers: 869, title: 'Անհետ կորածներ' },
            {
              numbers: 5600_000_000,
              title: 'Նյութական վնաս (եվրո)',
            },
          ],
          list_data: list_data_am,
          images: [
            { title: 'Ինտենսիվություն', img: exmpl_img1 },
            { title: 'Օջախի մեխանիզմ', img: exmpl_img2 },
          ],
          quake_desc: {
            text: '* երկրաշարժ Պորտ օ Պրենս, Հայիթի, USGS-EMSC',
            red_text: '2010.01.12 21:53:10 18.46N 72.53W H = 13 km М = 7.2',
          },
        },
        {
          title: 'ՏՈՀՈԿՈՒ, 11 մարտի 2011, M = 9.0 *',
          video: animateGif2,
          subtitle: 'աղետալի երկրաշարժի նախապատրաստման վիզուալիզացիան',
          numbers: [
            { numbers: 15896, title: 'Զոհեր' },
            { numbers: 6157, title: 'Վիրավորներ' },
            { numbers: 2536, title: 'Անհետ կորածներ' },
            { numbers: 122_000_000_000, title: 'Նյութական վնաս (եվրո)' },
          ],
          list_data: ul_data1_am,
          ImageGif: 'haitivido',
          images: [
            { title: 'Ինտենսիվություն', img: exmpl_img3 },
            { title: 'Հետցնցուﬓեր', img: exmpl_img4 },
            { title: 'Ֆոկալ ﬔխանիզմ', img: exmpl_img5 },
          ],
          quake_desc: {
            text: '* երկրաշարժ Տոհոկու, ՃԱՊՈՆԻԱ, USGS-EMSC',
            red_text: '2011.03.11 05:46:23 38.32N 142.37W H = 32 km М = 9.0',
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
const Box = ({ title, title11, subtitle, numbers, list_data, images, quake_desc, video }) => {
  return (
    <>
      <Container className="flex flex-col gap-8 med-900:gap-6">
        {/* <Title>{title11}</Title> */}
        <Title>{title}</Title>
        <p className="text-[21px] text-center med-1200:text-[16px] med-1200:text-center whitespace-pre-line">
          {subtitle}
        </p>
        <Datas {...{ numbers }} />
        <div className="flex flex-col gap-[35px] med-1200:gap-[30px] med-900:gap-7 med-600:gap-5 py-5">
          {/* <Title>
          Визуализация процесса подготовки катастрофического землетрясения
        </Title> */}
          <div className="gap-4 med-900:flex med-900:flex-col med-600:gap-2">
            <video
              className=" w-[53%] float-left pr-[25px] pb-[25px] med-900:pb-[15px] med-900:w-full med-900:p-0"
              autoPlay
              loop
              src={video}
            />
            {list_data.map((text, i) => (
              <p className={styles['list-item']} key={i}>
                <span>{text}</span>
              </p>
            ))}
          </div>
          <div className="flex items-center justify-between gap-5 med-1200:flex-wrap w-[90%] mx-auto med-900:w-full">
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
      <img loading="lazy" className="max-w-[280px] med-900:w-full" src={img} alt="" />
    </div>
  );
};
const Datas = ({ numbers }) => {
  return (
    <div className="flex flex-col items-center gap-12 med-1200:gap-10 med-900:gap-8 med-600:gap-5">
      {/* <p className="text-[26px] w-fit med-600:text-sm med-600:text-center">
        По официальным данным
      </p> */}
      <div className="w-[80%] grid justify-items-center grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-5 med-600:grid-cols-2 med-900:w-full">
        {numbers.map((el, i) => (
          <RoundNum {...el} key={i} />
        ))}
      </div>
    </div>
  );
};
