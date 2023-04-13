import React from "react";
import { Container, Title, Ul } from "../../../../components/reusable";
import styles from "./publications.module.css";

const data = [
  "Акопян С.Ц. 2007. Диссипативные сейсмические системы, энтропия и возможности создания системы прогноза «Сейсмической погоды». Альманах «Деловая Слава России», III выпуск, с.42-46.",
  "Akopian, S.Ts., Popov E.A., 2010. Monitoring induced seismicity based on seismic entropy method. Abstracts, Induced seismicity ECGS – FKPE workshop, 15–17 November, Luxembourg, 3–4.",
  "Акопян С.Ц., Рогожин Е.А. 2013. Моделирование кинематики Тавро-Кавказского региона и динамика подготовки сильных землетрясений с М≥7.1. Вопросы инженерной сейсмологии, 40, №2. С. 5–24.",
  "Акопян С.Ц. 2013. Сейсмические системы Японии: энтропия и мониторинг мегаземлетрясения Тохоку 11.03.2011 г. Вопросы инженерной сейсмологии, 40, №4. С. 67–90.",
  "Akopian S.Ts. 2013. Quantitative description of seismic processes in real medium and the algorithm of long-term prediction of large earthquakes: By examples of Armenian Upland, North-Western Iran, Italy, and Central California. Moscow, Triumph, 92.",
  "Akopian S.Ts. & Kocharian A.N. 2013. Critical behavior of seismic systems and dynamics in ensemble of strong earthquakes. Geophys. J. Int.; doi: 10.1093/gji/ggt398 (January 2014) 196 (1): 580-599.",
  "Акопян С.Ц. 2014. Применение метода сейсмической энтропии для решения технологических задач в нефтегазовой отрасли. ROGTEC, 38, 56–63.",
  "Акопян С.Ц. 2015. Энтропийная сейсмология и ее применение при разработке сланцевого газа. Экспозиция Нефть Газ. 6, 45. С. 40–43.",
  "Akopian, S.Ts. 2015. Open dissipative seismic systems and ensembles of strong earthquakes: Energy balance and entropy funnels. Geophys. J. Int. 201, pp. 1618–1641. doi: 10.1093/gji/ggv096/",
  "Акопян С.Ц. 2016. Сейсмические системы, закон производства энтропии и ансамбли сильных землетрясений. Изв. РАН, Физика Земли, 6, С. 1–22.",
  "Акопян С.Ц., Цидилина М.Н., Митюшина Е.С., Гапонова М.В., Гапонова Е.В., Мурынин А.Б., Воронова О.С., Гордо К.А., Смирнов В.М., Тарасова М.А. 2016. Разработка единой системы комплексного мониторинга катастрофических явлений для уменьшения их последствий на основе космических и наземных данных. Отчет о НИР № 16-17-00139 от 14.01.2016 (Российский научный фонд).",
  "Акопян С.Ц., Бондур В.Г., Рогожин Е.А. 2017. Технология мониторинга и прогнозирования сильных землетрясений на территории России с использованием метода сейсмической энтропии. Изв. РАН, Физика Земли, 1. C. 1–20.",
  "Акопян С.Ц. 2017. Энтропия, мониторинг сейсмичности на Армянском нагорье и динамика заполнения Ахурянского водохранилища. Вопросы инженерной сейсмологии. 44, №2. С. 5–14.",
  "Акопян С.Ц. 2017. Энтропийная сейсмология: Нефть и сланец северо-восточного Китая. Neftegaz. RU, 10. C. 20–24.",
  "Akopian S.Ts. 2017. Entropy seismology and the view of cosmology: Seismic formalism and alphabet of evolution. Nat. Ac. of Sci. of RA Electronic Journal of Natural sciences 2017, 1 (28). P.53-73.",
  "Akopian, S.Ts. 2017. Entropic seismology and the view of cosmology: Dark energy, dark matter, and gravitation. Nat. Ac. of Sci. of RA Electronic Journal of Natural sciences, 1(28). P. 74–94.",
  "Акопян С.Ц. 2018. Двойные землетрясения, их природа и прогноз методом сейсмической энтропии. Вопросы инженерной сейсмологии. 45. №2. С. 43–56.",
  "Акопян С.Ц. 2018. Анализ уральского землетрясения 4 сентября 2018 на основе метода сейсмической энтропии. Вопросы инженерной сейсмологии. 55. №4. С. 37-46.",
  "Акопян С.Ц. 2020. Выявление особенностей сильного землетрясения на востоке от Курильских островов от 25 марта 2020 на основе метода сейсмической энтропии. Вопросы инженерной сейсмологии. 47. №2. С. 5–18.",
  "Akopian S.Ts. 2023. “Entropy, Seismology, and the View of Cosmology: Origin and Evolutionary Theory. Cambridge Scholars Publishing, London. 432.",
];

export const Publications = () => {
  return (
    <Container className="pt-[88px] pb-[40px] flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center">
        <Title>Научные публикации</Title>
        <span>За последние 15 лет</span>
      </div>
      <Ul className={styles.ul} data={data}></Ul>
    </Container>
  );
};
