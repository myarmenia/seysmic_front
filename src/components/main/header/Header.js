import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "../../../App";
import search_icon from "../../../assets/icons/searchIcon.svg";
import search_icon_active from "../../../assets/icons/search-active.svg";
import logo from "../../../assets/main/logo.svg";
import { getHeaderTime, getLang } from "../../../helper";
import { Container, Logo } from "../../reusable";
import { Burger } from "../burger/Burger";
import { LanguageSelect } from "../languageSelect/LanguageSelect";
import styles from "./header.module.css";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const {
    language: {
      main: { header: language },
    },
  } = useTranslation();

  const openMenuHandler = () => {
    setOpen((p) => !p);
  };

  const chooseOption = () => {
    if (window.innerWidth <= 600) {
      setOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <Container bg="h-[32px] bg-dark-blue" className={styles.top_box}>
        <CurrentTime />
        <img alt="" src={logo} />
      </Container>
      <Container className={styles.navbar}>
        <Logo />
        <div className={[styles.nav_items, open ? styles.open : ""].join(" ")}>
          <HeaderLink onClick={chooseOption} to={getLang(`/about`)}>
            {language.nav_items.about}
          </HeaderLink>
          <HeaderLink onClick={chooseOption} to={getLang(`/technologies`)}>
            {language.nav_items.technologies}
          </HeaderLink>
          {/* <HeaderLink onClick={chooseOption} to={getLang(`/monitoring"}>{language.nav_items.monitoring}</HeaderLink> */}
          <HeaderLink onClick={chooseOption} to={getLang(`/earth-quakes`)}>
            {language.nav_items.monitoring}
          </HeaderLink>
          <HeaderLink onClick={chooseOption} to={getLang(`/press-release`)}>
            {language.nav_items.prease_release}
          </HeaderLink>
          <HeaderLink onClick={chooseOption} to={getLang(`/contacts`)}>
            {language.nav_items.contacts}
          </HeaderLink>
        </div>
        <div className={styles.tools}>
          <NavLink to={getLang("/search")}>
            <img
              src={
                pathname === getLang("/search")
                  ? search_icon_active
                  : search_icon
              }
              alt=""
            />
          </NavLink>
          <LanguageSelect />
          <Burger onClick={openMenuHandler} />
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
