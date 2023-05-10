import React from "react";
import globalMap from "../../../assets/main/monitoring/globalMap.svg";
import { Container, Title } from "../../../components/reusable";

export const CountriesItem = () => {
  return (
    <Container className="py-[var(--py)]">
      <Title>Глобальный мониторинг</Title>
      <img src={globalMap} alt="" className="mx-auto mb-0 mt-[50px]" />
      <div className="grid grid-cols-2 gap-3 mt-[110px] med-1200:mt-5 med-1200:grid-cols-1">
        <div className="flex flex-col gap-3">
          <span className="text-[26px] font-semibold med-600:text-base">
            В КАЖДОЙ СЕЙСМИЧЕСКОЙ СИСТЕМЕ И ПОДСИСТЕМЕ ПРОИЗВОДИТСЯ МОНИТОРИНГ И
            ПРОГНОЗ
          </span>
          <span className="text-2xl med-600:text-sm">
            РЕЗУЛЬТАТЫ ОБНОВЛЯЮТСЯ КАК МИНИМУМ РАЗ В КВАРТАЛ
          </span>
          <p className="text-xl med-600:text-xs">
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
      <div className="grid grid-cols-4 gap-[17px] mt-[120px] med-900:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] med-600:grid-cols-2">
        <div className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"></div>
        <div className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"></div>
        <div className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"></div>
        <div className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"></div>
        <div className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"></div>
        <div className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"></div>
        <div className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"></div>
        <div className="bg-gray-400  h-[200px] med-1200:h-[150px] med-600:h-[100px]"></div>
      </div>
    </Container>
  );
};
