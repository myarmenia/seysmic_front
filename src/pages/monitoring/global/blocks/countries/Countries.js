import React from "react";
import styles from "./countries.module.css";
import img from "../../../../../assets/main/monitoring/globus.svg";
import { MonitoringNavbar } from "../../../../../components/main";

const countries = [
  {
    index: 1,
    title: "Европа (20 стран)",
    describtion:
      "Австрия, Азербайджан, Армения, Болгария, Греция, Грузия, Испания, Италия, Кипр, Молдова, Португалия, Россия, Румыния, Сан Марино, Словения, Турция, Украина, Франция, Хорватия, Швейцария.",
  },
  {
    index: 2,
    title: "Азия (31 страна)",
    describtion:
      "Афганистан, Бангладеш, Бутан, Израиль, Индия, Индонезия, Иордания, Ирак, Иран, Казахстан, Киргизия, Китай, КНДР, Южная Корея, Кувейт, Ливан, Монголия, Мьянма, Непал, Объединенные Арабские Эмираты, Пакистан, Саудовская Аравия, Россия, Сирия, Таджикистан, Тайвань, Тайланд, Туркменистан, Узбекистан, Япония.",
  },
  {
    index: 3,
    title: "Африка (10 стран)",
    describtion:
      "Алжир, Бурунди, ДР Конго, Египет, Замбия, Малави, Марокко, Мозамбик, Танзания, Тунис",
  },
  {
    index: 4,
    title: "Северная Америка(13 стран)",
    describtion:
      "Белиз, Вирджинские о-ва, Гаити, Гватемала, Гондурас, Доминиканская Республика, Кайманские о-ва, Канада, Куба, Мексика, Пуэрто-Рико, США, Ямайка.",
  },
  {
    index: 5,
    title: "Южная Америка (6 стран)",
    describtion: "Аргентина, Боливия, Бразилия, Перу, Чили, Эквадор.",
  },
];

export const Countries = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.img_box}>
        <img src={img} alt="" className={styles.img} />
        <div className={styles.nums}>
          {countries.map((el) => (
            <Box key={el.index} {...el} />
          ))}
        </div>
      </div>
      <MonitoringNavbar />
    </div>
  );
};

const Box = ({ index, title, describtion }) => {
  return (
    <div className={styles.num}>
      <span
        onMouseEnter={(e) => {
          e.target.nextElementSibling.classList.add("!opacity-100");
        }}
      >
        {index}
      </span>
      <div>
        <span>{title}</span>
        <p>{describtion}</p>
      </div>
    </div>
  );
};
