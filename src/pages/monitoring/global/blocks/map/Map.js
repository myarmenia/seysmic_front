import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EarthMap } from "../../../../../components/main";
import {
  Container,
  FilterBtn,
  Title,
  TitleBorder,
} from "../../../../../components/reusable";
import countries_names from "../../../../../store/constats";
import styles from "./map.module.css";
import chevDown from "../../../../../assets/icons/arrow-down-gray.svg";

export const Map = () => {
  const [state, setState] = useState(false);
  return (
    <div className="pb-[54px] flex flex-col gap-[30px] px-[32px] relative med-600:px-[20px]">
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
      <TitleBorder className="py-5 items-center med-600:p-0">
        <span className="text-dark-blue text-[24px] text-center font-semibold med-600:text-[14px]">
          Мониторинг на 2023 год включает и затрагивает территории 80 стран
        </span>
        <span className="text-dark-blue font-semibold text-[18px] med-600:text-[12px]">
          Мы постоянно работаем над увеличением охвата и детализации мониторинга
        </span>
      </TitleBorder>
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
        <DropDown name={name} items={children} />
      ) : (
        <Link to={2} className={styles.country}>
          {name}
        </Link>
      )}
    </div>
  );
};

const DropDown = ({ items, name }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-hidden">
      <div
        onClick={() => setShow((p) => !p)}
        className={"flex items-center " + styles.country}
      >
        <p>{name}</p>
        <img
          className="brightness-50 scale-50 shrink-0"
          src={chevDown}
          alt=""
        />
      </div>
      <ul
        style={{
          listStyle: "initial",
          height: show ? items.length * 26 - 6 + "px" : 0,
        }}
        className="flex flex-col gap-[6px] ml-[30px] duration-300 med-600:ml-4"
      >
        {items.map((el, i) => {
          return (
            <li className={styles.country} key={i}>
              <Link to={`${i}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
