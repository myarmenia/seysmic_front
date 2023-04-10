import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow_down from "../../../assets/icons/arrow-down-blue.svg";
import language_img from "../../../assets/icons/language.svg";
import search_icon from "../../../assets/icons/searchIcon.svg";
import logo from "../../../assets/main/logo.svg";
import { Container, Logo } from "../../reusable";
import styles from "./header.module.css";
import { getHeaderTime } from "../../../helper";
import { Burger } from "../burger/Burger";
import { useTranslation } from "../../../App";
import { useEffect } from "react";
import { CustomSelect } from "../../forms";

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

const LanguageSelect = ({ options = [] }) => {
  const { changeLanguage } = useTranslation();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (value) changeLanguage(value);
  }, [value]);
  const optoinClick = (value) => {
    setValue(value);
    setOpen(false);
  };

  return (
    <div className={styles.language_box}>
      <div className="flex items-center gap-1">
        <div className={styles.language_select}>
          <img onClick={() => setOpen((p) => !p)} src={language_img} alt="" />
        </div>
        <img src={arrow_down} alt="" />
      </div>
      {/* {open && ( */}
      <div className={styles.language_options}>
        <div className="max-h-[200px] overflow-y-auto bg-[#ffffff69] flex flex-col">
          {options.map(({ title, value }, i) => (
            <span key={i} onClick={() => optoinClick(value)}>
              {title}
            </span>
          ))}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};
