import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow_down from "../../../assets/icons/arrow-down-blue.svg";
import language from "../../../assets/icons/language.svg";
import search_icon from "../../../assets/icons/searchIcon.svg";
import logo from "../../../assets/main/logo.svg";
import { Container, Logo } from "../../reusable";
import styles from "./header.module.css";
import { getHeaderTime } from "../../../helper";
import { Burger } from "../burger/Burger";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container bg="h-[32px] bg-dark-blue" className={styles.top_box}>
        <CurrentTime />
        <img alt="" src={logo} />
      </Container>
      <Container className={styles.navbar}>
        <Logo />
        <div className={styles.nav_items}>
          <HeaderLink to={"/about"}>О нас</HeaderLink>
          <HeaderLink to={"/technologies"}>Технология</HeaderLink>
          {/* <HeaderLink to={"/monitoring"}>Мониторинг и Прогноз</HeaderLink> */}
          <HeaderLink to={"/earth-quakes"}>Мониторинг и Прогноз</HeaderLink>
          <HeaderLink to={"/press-release"}>Пресс релиз</HeaderLink>
          <HeaderLink to={"/contacts"}>Контакты</HeaderLink>
        </div>
        <div className={styles.tools}>
          <img src={search_icon} alt="" />
          <div className={styles.language_box}>
            <img src={language} alt="" />
            <img src={arrow_down} alt="" />
          </div>
          <Burger />
        </div>
      </Container>
    </header>
  );
};

const CurrentTime = () => {
  const [time, setTime] = useState(getHeaderTime(new Date()));
  setInterval(() => {
    setTime(getHeaderTime(new Date()));
  }, 1000 * 60);
  return <span>{time}</span>;
};

const HeaderLink = (props) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styles.link_active : "")}
      {...props}
    />
  );
};
