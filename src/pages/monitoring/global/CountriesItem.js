import React from "react";
import globalMap from "../../../assets/main/monitoring/globalMap.svg";
import { Container, Title } from "../../../components/reusable";

export const CountriesItem = () => {
  return (
    <Container className="py-5">
      <Title>Глобальный мониторинг</Title>
      <img src={globalMap} alt="" className="mx-auto mb-0 mt-[50px]" />
      <div className="flex gap-3 mt-[110px]">
        <div className="flex flex-col gap-3 w-[50%]">
          <span className="text-[26px] font-medium">
            В КАЖДОЙ СЕЙСМИЧЕСКОЙ СИСТЕМЕ И ПОДСИСТЕМЕ ПРОИЗВОДИТСЯ МОНИТОРИНГ И
            ПРОГНОЗ
          </span>
          <span className="text-2xl">
            РЕЗУЛЬТАТЫ ОБНОВЛЯЮТСЯ КАК МИНИМУМ РАЗ В КВАРТАЛ
          </span>
          <p className="text-xl">
            Ниже приводятся анимационные ролики мониторинга миграции
            сейсмической неустойчивости и прогноза затухания интенсивности
            сейсмического воздействия внутри иерархии сейсмических систем по
            данным на начало квартала. Анимация миграция неустойчивости
            производится без учета будущей сейсмической активизации, поэтому
            миграция неустойчивости в рамках системы прекратится в той зоне, где
            будет подготовлено и произойдет сильное землетрясение. Такие зоны мы
            контролируем отдельно, с привлечением других параметров.
          </p>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[17px] mt-[120px]">
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
