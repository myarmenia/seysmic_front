import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EarthMap } from "../../../../../components/main";
import {
  Container,
  FilterBtn,
  Title,
} from "../../../../../components/reusable";
import countries_names from "../../../../../store/constats";
import styles from "./map.module.css";

export const Map = () => {
  const [state, setState] = useState(false);
  return (
    <div className="py-[54px] flex flex-col gap-[30px] px-[32px] relative med-600:px-[20px]">
      <Title>Глобальный мониторинг</Title>
      <div className="flex items-center justify-end gap-[17px] med-600:justify-center">
        <FilterBtn active={!state} onClick={() => setState(false)}>
          по карте
        </FilterBtn>
        <FilterBtn active={state} onClick={() => setState(true)}>
          по списку стран
        </FilterBtn>
      </div>
      {state ? <Countries /> : <EarthMap />}
      <Container className="py-5 text-dark-blue text-[24px] text-center font-semibold flex flex-col gap-3 items-center med-600:text-[14px] med-600:p-0">
        <div className="w-[25%] bg-[linear-gradient(#0026AA,_#30CFFF)] h-[1px]" />
        Мониторинг на 2023 год включает и затрагивает территории 80 стран
        <span className="text-[18px] med-600:text-[12px]">
          Мы постоянно работаем над увеличением охвата и детализации мониторинга
        </span>
        <div className="w-[25%] bg-[linear-gradient(#0026AA,_#30CFFF)] h-[1px] mt-3" />
      </Container>
    </div>
  );
};

const Countries = () => {
  return (
    <Container className="flex flex-col h-[871px] flex-wrap gap-[10px_34px] pb-[60px] pt-3 med-600:gap-[3px_12px] med-600:px-0 med-600:pb-[32px]">
      {countries_names.map((el, i) => (
        <Country {...el} key={i} />
      ))}
    </Container>
  );
};

const Country = ({ name, children }) => {
  return (
    <div className="w-fit">
      {children && children?.length ? (
        <div>
          <p className={styles.country}>{name}</p>
          <ul
            style={{ listStyle: "initial" }}
            className="flex flex-col gap-[6px] ml-[30px]"
          >
            {children.map((el, i) => {
              return (
                <li className={styles.country} key={i}>
                  <Link to={`${i}`}>{el.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <Link className={styles.country}>{name}</Link>
      )}
    </div>
  );
};
