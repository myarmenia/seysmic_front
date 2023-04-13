import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../../App";
import search_icon from "../../../assets/icons/searchIcon.svg";
import logo from "../../../assets/main/logo.svg";
import { getHeaderTime } from "../../../helper";
import { Container, Logo } from "../../reusable";
import { Burger } from "../burger/Burger";
import styles from "./header.module.css";
import { LanguageSelect } from "../languageSelect/LanguageSelect";

export const Header = () => {
  const {
    language: {
      main: { header: language },
    },
  } = useTranslation();

  return (
    <header className={styles.header}>
      <Container bg="h-[32px] bg-dark-blue" className={styles.top_box}>
        <CurrentTime />
        <img alt="" src={logo} />
      </Container>
      <Container className={styles.navbar}>
        <Logo />
        <div className={styles.nav_items}>
          <HeaderLink to={"/about"}>{language.nav_items.about}</HeaderLink>
          <HeaderLink to={"/technologies"}>
            {language.nav_items.technologies}
          </HeaderLink>
          {/* <HeaderLink to={"/monitoring"}>{language.nav_items.monitoring}</HeaderLink> */}
          <HeaderLink to={"/earth-quakes"}>
            {language.nav_items.monitoring}
          </HeaderLink>
          <HeaderLink to={"/press-release"}>
            {language.nav_items.prease_release}
          </HeaderLink>
          <HeaderLink to={"/contacts"}>
            {language.nav_items.contacts}
          </HeaderLink>
        </div>
        <div className={styles.tools}>
          <img src={search_icon} alt="" />
          <LanguageSelect
            options={[
              { title: "ru", value: "ru" },
              { title: "en", value: "en" },
              { title: "am", value: "am" },
            ]}
          />
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
