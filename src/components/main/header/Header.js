import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import search_icon from '../../../assets/icons/searchIcon.svg';
import search_icon_active from '../../../assets/icons/search-active.svg';
import logo from '../../../assets/main/logo.svg';
import { getHeaderTime, getLang } from '../../../helper';
import { Container, Logo } from '../../reusable';
import { Burger } from '../burger/Burger';
import { LanguageSelect } from '../languageSelect/LanguageSelect';
import styles from './header.module.css';
import { useTranslation } from '../../../hooks';

export const Header = () => {
  const [langAndMenu, setLangAndMenu] = useState('');
  const { pathname } = useLocation();
  const {
    language: {
      main: { header: language },
    },
  } = useTranslation();

  const chooseOption = () => {
    setLangAndMenu('');
  };

  return (
    <>
      <header className={styles.header}>
        <Container bg="h-[32px] bg-dark-blue" className={styles.top_box}>
          <CurrentTime />
          <img alt="" src={logo} />
        </Container>
        <Container className={styles.navbar}>
          <Logo />
          <div className={[styles.nav_items, langAndMenu === 'menu' ? styles.open : ''].join(' ')}>
            <HeaderLink onClick={chooseOption} to={getLang(`/about`)}>
              {language.nav_items.about}
            </HeaderLink>
            <HeaderLink onClick={chooseOption} to={getLang(`/technologies`)}>
              {language.nav_items.technologies}
            </HeaderLink>
            {/* <HeaderLink onClick={chooseOption} to={getLang(`/monitoring"}>{language.nav_items.monitoring}</HeaderLink> */}
            <HeaderLink onClick={chooseOption} to={getLang(`/monitoring`)}>
              {language.nav_items.monitoring}
            </HeaderLink>
            <HeaderLink onClick={chooseOption} to={getLang(`/press-release/1`)}>
              {language.nav_items.prease_release}
            </HeaderLink>
            <HeaderLink onClick={chooseOption} to={getLang(`/faq`)}>
              FAQ
            </HeaderLink>
            <HeaderLink onClick={chooseOption} to={getLang(`/contacts`)}>
              {language.nav_items.contacts}
            </HeaderLink>
          </div>
          <div className={styles.tools}>
            <NavLink to={getLang('/search/1')}>
              <img
                src={pathname === getLang('/search') ? search_icon_active : search_icon}
                alt="search"
              />
            </NavLink>
            <LanguageSelect setShow={setLangAndMenu} show={langAndMenu === 'lang'} />
            <Burger onClick={() => setLangAndMenu((p) => (p !== 'menu' ? 'menu' : ''))} />
          </div>
        </Container>
      </header>
      <div className="pb-[117px]"></div>
    </>
  );
};

const CurrentTime = () => {
  const [time, setTime] = useState(getHeaderTime(new Date()));
  setInterval(() => {
    setTime(getHeaderTime(new Date()));
  }, 1000 * 60);
  return <span>{time}</span>;
};

const HeaderLink = ({ className, ...props }) => {
  return (
    <NavLink
      end={true}
      className={({ isActive }) => `${isActive ? styles.link_active : ''} ${className}`}
      {...props}
    />
  );
};
