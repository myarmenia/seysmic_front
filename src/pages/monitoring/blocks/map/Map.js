import React from "react";
import { Container, FilterBtn, Title } from "../../../../components/reusable";
import styles from "./map.module.css";

export const Map = () => {
  return (
    <div className="py-[54px] flex flex-col gap-[30px]">
      <Title>Глобальный мониторинг</Title>
      <div className="flex items-center justify-end gap-[17px]">
        <FilterBtn>по карте</FilterBtn>
        <FilterBtn>по списку стран</FilterBtn>
      </div>
      <div className={styles.map_bg}></div>
      <Container className="py-5  text-dark-blue text-[24px] text-center font-semibold flex flex-col gap-3 items-center">
        <div className="w-[25%] bg-[linear-gradient(#0026AA,_#30CFFF)] h-[1px]" />
        Мониторинг на 2023 год включает и затрагивает территории 80 стран
        <span className="text-[18px]">
          Мы постоянно работаем над увеличением охвата и детализации мониторинга
        </span>
        <div className="w-[25%] bg-[linear-gradient(#0026AA,_#30CFFF)] h-[1px] mt-3" />
      </Container>
    </div>
  );
};
