import React from "react";
import { Container, Title } from "../../../../components/reusable";
import styles from "./regional.module.css";
import { CustomBtn } from "../../../../components/forms";
const arr = [
  "Армянское нагорье",
  "Армения",
  "Армения",
  "Армянское нагорье",
  "Армянское нагорье",
  "Армянское нагорье",
  "Армения",
  "Армянское нагорье",
];
const Description = () => {
  return (
    <Container>
      <div className="h-[1px] bg-dark-blue w-[328px] my-0 mx-auto"></div>
      <Title className="my-[30px]">
        В КАЖДОЙ СЕЙСМИЧЕСКОЙ СИСТЕМЕ ПРОИЗВОДИТСЯ МОНИТОРИНГ И ПРОГНОЗ
        РЕЗУЛЬТАТЫ ОБНОВЛЯЮТСЯ КАК МИНИМУМ РАЗ В КВАРТАЛ
      </Title>
      <p>
        Ниже приводятся анимационные ролики мониторинга миграции сейсмической
        неустойчивости и прогноза затухания интенсивности сейсмического
        воздействия внутри иерархии сейсмических систем по данным на начало
        квартала. Анимация миграция неустойчивости производится без учета
        будущей сейсмической активизации, поэтому миграция неустойчивости в
        рамках системы прекратится в той зоне, где будет подготовлено и
        произойдет сильное землетрясение. Такие зоны мы контролируем отдельно, с
        привлечением других параметров.
      </p>
      <div className="my-[70px] flex gap-3 flex-wrap">
        {arr.map((el, i) => {
          return (
            <CustomBtn gradient key={i}>
              {el}
            </CustomBtn>
          );
        })}
      </div>
      <Title>Иерархия сейсмических систем в регионе</Title>
      <p className="text-center my-[30px]">
        Армения <span className="text-[#EE3221]">({`5.0<M<6.6`}),</span>
        Армянское Нагорье
        <span className="text-[#EE3221]">({`M>6.7`}),</span>
        Центральный Каспий <span className="text-[#EE3221]">({`M>5.8`})</span>
        ,СЗ Иран
        <span className="text-[#EE3221]">({`M>5.8`}),</span>
        <br />
        Крым-Западный Кавказ <span className="text-[#EE3221]">({`M>4.5`})</span>
        и Восточный Кавказ
        <span className="text-[#EE3221]"> ({`M>5.4`})</span>
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[17px] mt-[120px] mb-[60px]">
        <div className="bg-gray-400  h-[200px]"></div>
        <div className="bg-gray-400  h-[200px]"></div>
        <div className="bg-gray-400  h-[200px]"></div>
        <div className="bg-gray-400  h-[200px]"></div>
        <div className="bg-gray-400  h-[200px]"></div>
        <div className="bg-gray-400  h-[200px]"></div>
        <div className="bg-gray-400  h-[200px]"></div>
      </div>
    </Container>
  );
};

export default Description;
