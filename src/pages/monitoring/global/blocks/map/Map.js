import React, { Fragment, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import chevDown from '../../../../../assets/icons/arrow-down-gray.svg';
import { EarthMap } from '../../../../../components/main';
import { Container, FilterBtn, Title, TitleBorder } from '../../../../../components/reusable';
import { useTranslation } from '../../../../../hooks';
import styles from './map.module.css';

export const Map = () => {
  const { global: language } = useTranslation().language.monitoring;
  const data = useLoaderData();

  const [state, setState] = useState(false);
  return (
    <div className="pb-[54px] flex flex-col gap-[30px] px-[32px] relative med-600:px-[20px]">
      <Title>{language?.title}</Title>
      {/* <p className={styles.blink}>{language.flickering_text}</p> */}
      <div className="flex items-center justify-center gap-[17px] med-600:justify-center">
        <FilterBtn active={!state} onClick={() => setState(false)} className="med-600:text-[11px]">
          {language.Map_Btn}
        </FilterBtn>
        <FilterBtn active={state} onClick={() => setState(true)} className="med-600:text-[11px]">
          {language.Country_Btn}
        </FilterBtn>
      </div>
      {state ? <Countries /> : <EarthMap visible />}
      <TitleBorder className="py-5 items-center med-600:p-0">
        <span className="text-dark-blue text-[24px] text-center font-semibold med-600:text-[14px]">
          {language.title1}
        </span>
        <span className="text-dark-blue font-semibold text-[18px] text-center med-600:text-[12px]">
          {language.title2}
        </span>
      </TitleBorder>
    </div>
  );
};

const Countries = () => {
  const [showNum, setShowNum] = useState(0);
  const { country } = useLoaderData();
  console.log(country);
  return (
    <Container className="flex flex-col h-[610px] flex-wrap gap-[10px_34px] pb-[60px] pt-3 med-600:h-[990px] med-600:gap-[10px_12px] med-600:px-0 med-600:pb-[32px]">
      {country.map(({ parent_region_name, children, id }, i) => (
        <Fragment key={i}>
          {children && children?.length ? (
            <DropDown
              onClick={() => setShowNum((p) => (p === i ? -1 : i))}
              {...{ show: i === showNum, parent_region_name }}
              items={children}
            />
          ) : (
            <Link to={`${id}`} className={styles.country}>
              {parent_region_name}
            </Link>
          )}
        </Fragment>
      ))}
    </Container>
  );
};

const DropDown = ({ show, items, parent_region_name, ...props }) => {
  const ref = useRef(null);

  return (
    <div className="w-fit relative">
      <div {...props} className={'flex items-center ' + styles.country}>
        <p>{parent_region_name}</p>
        <img
          loading="lazy"
          style={{ rotate: show ? '180deg' : 'none' }}
          className="brightness-50 scale-50 shrink-0 duration-300"
          src={chevDown}
          alt=""
        />
      </div>
      <div
        style={{ height: show ? ref.current?.offsetHeight + 'px' : 0 }}
        className="shadow-light overflow-hidden z-[10] absolute left-0 top-[calc(100%_+_5px)] duration-300">
        <ul
          ref={ref}
          style={{ listStyle: 'initial' }}
          className="px-5 py-3 bg-white flex flex-col gap-[6px]">
          {items.map((el, i) => {
            return (
              <li
                className={[styles.country, 'ml-[15px] med-600:ml-4 whitespace-nowrap'].join(' ')}
                key={i}>
                <Link to={`${el.id}`}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
