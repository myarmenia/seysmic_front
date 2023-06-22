import React, { useMemo } from 'react';
import { Container, Title, Ul, ViewPosition } from '../../../../components/reusable';
import styles from './publications.module.css';
import { useTranslation } from '../../../../hooks';
import pdf1 from '../../../../assets/main/about/pdf/1.pdf';
import pdf3 from '../../../../assets/main/about/pdf/3.pdf';
import pdf4 from '../../../../assets/main/about/pdf/4.pdf';
import pdf5 from '../../../../assets/main/about/pdf/5.pdf';
import pdf6 from '../../../../assets/main/about/pdf/6.pdf';
import pdf7 from '../../../../assets/main/about/pdf/7.pdf';
import pdf8 from '../../../../assets/main/about/pdf/8.pdf';
import pdf9 from '../../../../assets/main/about/pdf/9.pdf';
import pdf10 from '../../../../assets/main/about/pdf/10.pdf';
import pdf12 from '../../../../assets/main/about/pdf/12.pdf';
import pdf13 from '../../../../assets/main/about/pdf/13.pdf';
import pdf14 from '../../../../assets/main/about/pdf/14.pdf';
import pdf15 from '../../../../assets/main/about/pdf/15.pdf';
import pdf16 from '../../../../assets/main/about/pdf/16.pdf';
import pdf17 from '../../../../assets/main/about/pdf/17.pdf';
import pdf18 from '../../../../assets/main/about/pdf/18.pdf';
import pdf19 from '../../../../assets/main/about/pdf/19.pdf';
import pdf20 from '../../../../assets/main/about/pdf/20.pdf';
import filepdf from '../../../../assets/icons/file-pdf.svg';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const Publications = () => {
  const { about: language } = useTranslation().language;
  const { lang } = useParams();
  const data = useMemo(() => {
    if (lang === 'am' || lang === 'ru') {
      return [
        {
          text: '1. Akopian S.Ts. 2023. “Entropy, Seismology, and the View of Cosmology: Origin and Evolutionary Theory. Cambridge Scholars Publishing, London. 432.',
          faile: pdf1,
        },
        {
          text: '2. Акопян С.Ц. 2020. Выявление особенностей сильного землетрясения на востоке от Курильских островов от 25 марта 2020 на основе метода сейсмической энтропии. Вопросы инженерной сейсмологии. 47. №2. С. 5–18.',
          faile: false,
        },
        {
          text: '3. Акопян С.Ц. 2018. Анализ уральского землетрясения 4 сентября 2018 на основе метода сейсмической энтропии. Вопросы инженерной сейсмологии. 55. №4. С. 37-46.',
          faile: pdf3,
        },
        {
          text: '4. Акопян С.Ц. 2018. Двойные землетрясения, их природа и прогноз методом сейсмической энтропии. Вопросы инженерной сейсмологии. 45. №2. С. 43–56.',
          faile: pdf4,
        },
        {
          text: '5. Akopian, S.Ts. 2017. Entropic seismology and the view of cosmology: Dark energy, dark matter, and gravitation. Nat. Ac. of Sci. of RA Electronic Journal of Natural sciences, 1(28). P. 74–94.',
          faile: pdf5,
        },
        {
          text: '6. Akopian S.Ts. 2017. Entropy seismology and the view of cosmology: Seismic formalism and alphabet of evolution. Nat. Ac. of Sci. of RA Electronic Journal of Natural sciences 2017, 1 (28). P.53-73.',
          faile: pdf6,
        },
        {
          text: '7. Акопян С.Ц. 2017. Энтропийная сейсмология: Нефть и сланец северо-восточного Китая. Neftegaz. RU, 10. C. 20–24.',
          faile: pdf7,
        },
        {
          text: '8. Акопян С.Ц. 2017. Энтропия, мониторинг сейсмичности на Армянском нагорье и динамика заполнения Ахурянского водохранилища. Вопросы инженерной сейсмологии. 44, №2. С. 5–14.',
          faile: pdf8,
        },
        {
          text: '9. Акопян С.Ц., Бондур В.Г., Рогожин Е.А. 2017. Технология мониторинга и прогнозирования сильных землетрясений на территории России с использованием метода сейсмической энтропии. Изв. РАН, Физика Земли, 1. C. 1–20.',
          faile: pdf9,
        },
        {
          text: '10. Акопян С.Ц., Цидилина М.Н., Митюшина Е.С., Гапонова М.В., Гапонова Е.В., Мурынин А.Б., Воронова О.С., Гордо К.А., Смирнов В.М., Тарасова М.А. 2016. Разработка единой системы комплексного мониторинга катастрофических явлений для уменьшения их последствий на основе космических и наземных данных. Отчет о НИР № 16-17-00139 от 14.01.2016 (Российский научный фонд).',
          faile: pdf10,
        },
        {
          text: '11. Акопян С.Ц. 2016. Сейсмические системы, закон производства энтропии и ансамбли сильных землетрясений. Изв. РАН, Физика Земли, 6, С. 1–22.',
          faile: false,
        },
        {
          text: '12. Akopian, S.Ts. 2015. Open dissipative seismic systems and ensembles of strong earthquakes: Energy balance and entropy funnels. Geophys. J. Int. 201, pp. 1618–1641. doi: 10.1093/gji/ggv096/',
          faile: pdf12,
        },
        {
          text: '13. Акопян С.Ц. 2015. Энтропийная сейсмология и ее применение при разработке сланцевого газа. Экспозиция Нефть Газ. 6, 45. С. 40–43.',
          faile: pdf13,
        },
        {
          text: '14. Акопян С.Ц. 2014. Применение метода сейсмической энтропии для решения технологических задач в нефтегазовой отрасли. ROGTEC, 38, 56–63.',
          faile: pdf14,
        },
        {
          text: '15. Akopian S.Ts. & Kocharian A.N. 2013. Critical behavior of seismic systems and dynamics in ensemble of strong earthquakes. Geophys. J. Int.; doi: 10.1093/gji/ggt398 (January 2014) 196 (1): 580-599.',
          faile: pdf15,
        },
        {
          text: '16. Akopian S.Ts. 2013. Quantitative description of seismic processes in real medium and the algorithm of long-term prediction of large earthquakes: By examples of Armenian Upland, North-Western Iran, Italy, and Central California. Moscow, Triumph, 92.',
          faile: pdf16,
        },
        {
          text: '17. Акопян С.Ц. 2013. Сейсмические системы Японии: энтропия и мониторинг мегаземлетрясения Тохоку 11.03.2011 г. Вопросы инженерной сейсмологии, 40, №4. С. 67–90.',
          faile: pdf17,
        },
        {
          text: '18. Акопян С.Ц., Рогожин Е.А. 2013. Моделирование кинематики Тавро-Кавказского региона и динамика подготовки сильных землетрясений с М≥7.1. Вопросы инженерной сейсмологии, 40, №2. С. 5–24.',
          faile: pdf18,
        },
        {
          text: '19. Akopian, S.Ts., Popov E.A., 2010. Monitoring induced seismicity based on seismic entropy method. Abstracts, Induced seismicity ECGS – FKPE workshop, 15–17 November, Luxembourg, 3–4.',
          faile: pdf19,
        },
        {
          text: '20. Акопян С.Ц. 2007. Диссипативные сейсмические системы, энтропия и возможности создания системы прогноза «Сейсмической погоды». Альманах «Деловая Слава России», III выпуск, с.42-46.',
          faile: pdf20,
        },
      ];
    }
    if (lang == 'en') {
      return [
        {
          text: '1. Akopian S.Ts. 2023. “Entropy, Seismology, and the View of Cosmology: Origin and Evolutionary Theory. Cambridge Scholars Publishing, London. 432.',
          faile: pdf1,
        },
        {
          text: '2. Akopian S.Ts. 2020. Identification of features of a strong earthquake in the east of the Kuril Islands from March 25, 2020 based on the seismic entropy method. Issues of engineering seismology. 47. No. 2. pp. 5–18.',
          faile: false,
        },
        {
          text: '3. Akopian S.Ts. 2018. Analysis of the Ural earthquake on September 4, 2018 based on the seismic entropy method. Issues of engineering seismology. 55. No. 4. pp. 37-46.',
          faile: pdf3,
        },
        {
          text: '4. Akopian S.Ts. 2018. Double earthquakes, their nature and prediction by the seismic entropy method. Questions of engineering seismology. 45. No. 2. pp. 43–56.',
          faile: pdf4,
        },
        {
          text: '5. Akopian, S.Ts. 2017. Entropic seismology and the view of cosmology: Dark energy, dark matter, and gravitation. Nat. Ac. of Sci. of RA Electronic Journal of Natural sciences, 1(28). P. 74–94.',
          faile: pdf5,
        },
        {
          text: '6. Akopian S.Ts. 2017. Entropy seismology and the view of cosmology: Seismic formalism and alphabet of evolution. Nat. Ac. of Sci. of RA Electronic Journal of Natural sciences 2017, 1 (28). P.53-73.',
          faile: pdf6,
        },
        {
          text: '7. Akopian S.Ts. 2017. Entropy Seismology: Oil and Shale of Northeast China. Neftegaz. RU, 10. C. 20–24.',
          faile: pdf7,
        },
        {
          text: '8. Akopian S.Ts. 2017. Entropy, Seismicity Monitoring in the Armenian Highlands and Akhuryan Reservoir Filling Dynamics. Issues of engineering seismology. 44, no. 2. pp. 5–14.',
          faile: pdf8,
        },
        {
          text: '9. Akopian S.Ts., Bondur V.G., Rogozhin E.A. 2017. Technology for monitoring and forecasting strong earthquakes in Russia using the seismic entropy method. Izv. Russian Academy of Sciences, Physics of the Earth, 1. C. 1–20.',
          faile: pdf9,
        },
        {
          text: '10. Akopian S.Ts., Tsidilina M.N., Mityushina E.S., Gaponova M.V., Gaponova E.V., Murynin A.B., Voronova O.S., Gordo K.A., Smirnov V.M., Tarasova M.A. 2016. Development of a unified system for comprehensive monitoring of catastrophic events to reduce their consequences based on space and ground data. Research report No. 16-17-00139 dated January 14, 2016 (Russian Science Foundation).',
          faile: pdf10,
        },
        {
          text: '11. Akopian S.Ts. 2016. Seismic systems, entropy production law and ensembles of strong earthquakes. Izv. Russian Academy of Sciences, Physics of the Earth, 6, pp. 1–22.',
          faile: false,
        },
        {
          text: '12. Akopian, S.Ts. 2015. Open dissipative seismic systems and ensembles of strong earthquakes: Energy balance and entropy funnels. Geophys. J. Int. 201, pp. 1618–1641. doi: 10.1093/gji/ggv096/',
          faile: pdf12,
        },
        {
          text: '13. Akopian, S.Ts. 2015. Entropy seismology and its application to shale gas development. Exposition Oil Gas. 6, 45. pp. 40–43.',
          faile: pdf13,
        },
        {
          text: '14. Akopian S.Ts. 2014. Application of the seismic entropy method to solve technological problems in the oil and gas industry. ROGTEC, 38, 56–63.',
          faile: pdf14,
        },
        {
          text: '15. Akopian S.Ts. & Kocharian A.N. 2013. Critical behavior of seismic systems and dynamics in ensemble of strong earthquakes. Geophys. J. Int.; doi: 10.1093/gji/ggt398 (January 2014) 196 (1): 580-599.',
          faile: pdf15,
        },
        {
          text: '16. Akopian S.Ts. 2013. Quantitative description of seismic processes in real medium and the algorithm of long-term prediction of large earthquakes: By examples of Armenian Upland, North-Western Iran, Italy, and Central California. Moscow, Triumph, 92.',
          faile: pdf16,
        },
        {
          text: '17. Akopian S.Ts. 2013. Seismic systems of Japan: entropy and monitoring of the Tohoku mega-earthquake on March 11, 2011. Issues of engineering seismology, 40, no. 4. pp. 67–90.',
          faile: pdf17,
        },
        {
          text: '18. Akopian S.Ts., Rogozhin E.A. 2013. Modeling the kinematics of the Taurus-Caucasus region and the dynamics of the preparation of stong earthquakes with М≥7.1. Issues of engineering seismology, 40 №2, pp. 5–24.',
          faile: pdf18,
        },
        {
          text: '19. Akopian, S.Ts., Popov E.A. 2010. Monitoring induced seismicity based on seismic entropy method. Abstracts, Induced seismicity ECGS – FKPE workshop, 15–17 November, Luxembourg, 3–4.',
          faile: pdf19,
        },
        {
          text: '20. Akopian S.Ts. 2007. Dissipative seismic systems, entropy and the possibility of creating a "Seismic weather" forecast system. Almanac "Business Glory of Russia", III edition, pp.42-46.',
          faile: pdf20,
        },
      ];
    }
    return [];
  }, [lang]);

  return (
    <Container className="pt-[88px] pb-[40px] flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center">
        <Title>{language.publications.title}</Title>
        {/* <span>{language.sub_title}</span> */}
      </div>
      <ViewPosition>
        {(bool) => (
          <ul
            className={[
              'flex flex-col gap-5 justify-between overflow-hidden list-image-none',
              styles.ul,
            ].join(' ')}>
            {data.map((el, i) => {
              if (el?.faile) {
                return (
                  <li
                    key={el?.text}
                    className="duration-300 opacity-0 text-base leading-[112%] text-justify 
                   text-black pl-[10px] med-600:pl-[5px] med-600:text-center;"
                    style={{
                      opacity: bool ? 1 : 0,
                      transform: bool ? 'translateY(0)' : 'translateY(50px)',
                      transitionDelay: `${i / 10}s`,
                    }}>
                    <a href={el?.faile} target="_blank">
                      <div className="flex gap-3 ">
                        <img alt=" " src={filepdf} />
                        <span>{el?.text}</span>
                      </div>
                    </a>
                  </li>
                );
              }
              return (
                <li
                  key={el?.text}
                  className="duration-300 opacity-0 text-base leading-[112%] text-justify 
               text-black ml-[29px] pl-[10px] med-600:pl-[5px] med-600:text-start;"
                  style={{
                    opacity: bool ? 1 : 0,
                    transform: bool ? 'translateY(0)' : 'translateY(50px)',
                    transitionDelay: `${i / 10}s`,
                  }}>
                  <span>{el?.text}</span>
                </li>
              );
            })}
          </ul>
        )}
      </ViewPosition>
    </Container>
  );
};
