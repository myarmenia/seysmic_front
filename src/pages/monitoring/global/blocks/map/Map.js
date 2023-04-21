import React, { useState } from "react";
import map_img from "../../../../../assets/main/monitoring/main-map.png";
import {
  Container,
  FilterBtn,
  Title,
} from "../../../../../components/reusable";
import { earth_map } from "../../../../../store/constats";
import styles from "./map.module.css";
import { FilterContainer } from "./FilterContainer";

export const Map = () => {
  const [state, setState] = useState(false);
  return (
    <div className="py-[54px] flex flex-col gap-[30px] px-[32px] relative">
      <Title>Глобальный мониторинг</Title>
      <div className="flex items-center justify-end gap-[17px]">
        <FilterBtn active={!state} onClick={() => setState(false)}>
          по карте
        </FilterBtn>
        <FilterBtn active={state} onClick={() => setState(true)}>
          по списку стран
        </FilterBtn>
      </div>
      <EarthMap />
      <Container className="py-5 text-dark-blue text-[24px] text-center font-semibold flex flex-col gap-3 items-center med-600:text-[14px] med-600:p-0">
        <div className="w-[25%] bg-[linear-gradient(#0026AA,_#30CFFF)] h-[1px]" />
        Мониторинг на 2023 год включает и затрагивает территории 80 стран
        <span className="text-[18px] med-600:text-[12px]">
          Мы постоянно работаем над увеличением охвата и детализации мониторинга
        </span>
        <div className="w-[25%] bg-[linear-gradient(#0026AA,_#30CFFF)] h-[1px] mt-3" />
      </Container>
      {state && <FilterContainer />}
    </div>
  );
};

const EarthMap = () => {
  const handleClick = ({ id }) => {
    console.log(id);
  };
  return (
    <div className={styles.map_bg}>
      <img src={map_img} className={styles.img} alt="map" />
      {earth_map.map((el, i) => (
        <div
          style={{
            ...el,
          }}
          key={i}
          className={styles.blue_box}
          onClick={() => handleClick(el)}
        >
          <span className={styles.blue_box_id}>{el.id}</span>
        </div>
      ))}
    </div>
  );
};
