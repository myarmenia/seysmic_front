import React from "react";
import styles from "./header.module.css";
import logo from "../../../assets/main/logo.svg";
import search_icon from "../../../assets/icons/searchIcon.svg";
import language from "../../../assets/icons/language.svg";
import arrow_down from "../../../assets/icons/arrow-down-blue.svg";
import { Link, NavLink } from "react-router-dom";
import { Container, Logo } from "../../reusable";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container bg={"h-[32px] bg-dark-blue"} className={styles.top_box}>
        <span>GMT 07:54 / 10:54</span>
        <img alt="" src={logo} />
      </Container>
      <Container className={styles.navbar}>
        <Logo />
        <div className={styles.nav_items}>
          <NavLink>О нас</NavLink>
          <NavLink>Технология</NavLink>
          <NavLink>Мониторинг и Прогноз</NavLink>
          <NavLink>Пресс релиз</NavLink>
          <NavLink>Контакты</NavLink>
        </div>
        <div className={styles.tools}>
          <img src={search_icon} alt="" />
          <div className={styles.language_box}>
            <img src={language} alt="" />
            <img src={arrow_down} alt="" />
          </div>
        </div>
      </Container>
    </header>
  );
};
