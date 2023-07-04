import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Container, Logo, SocIcons } from '../../reusable';
import styles from './footer.module.css';
import { useTranslation } from '../../../hooks';
import WebEx_Logo from '../../../assets/1.png';
import { getLang } from '../../../helper';
import am from '../../../assets/footer/armenian.png';
import ru from '../../../assets/footer/russia.png';
import en from '../../../assets/footer/england.png';

export const Footer = () => {
  const {
    language: {
      main: { header: language },
    },
  } = useTranslation();
  const { changeLanguage } = useTranslation();
  const links = useLoaderData();
  return (
    <>
      <footer className={styles.footer}>
        <Container bg={styles.content} className={styles.content_div}>
          <ul>
            <li className={styles.li_head}>
              <Logo className={styles.logo} color="text-white underline" />
            </li>
          </ul>
          <ul>
            <li>
              <Link to={getLang('/about')}>{language.nav_items.about}</Link>
            </li>
            <li>
              <Link to={getLang(`/technologies`)}>{language.nav_items.technologies}</Link>
            </li>
            <li>
              <Link to={getLang(`/monitoring`)}>{language.nav_items.monitoring}</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={getLang(`/press-release/1`)}>{language.nav_items.prease_release}</Link>
            </li>
            <li>
              <Link to={getLang(`/faq`)}>FAQ</Link>
            </li>
            <li>
              <Link to={getLang(`/contacts`)}>{language.nav_items.contacts}</Link>
            </li>
            {/* <li>
              <Link to={getLang('/search')}>{language.nav_items.search}</Link>
            </li> */}
          </ul>
          <ul>
            <li className={styles.li_head}>{language.contacts}</li>
            <li className={styles.social_icons_li}>
              <SocIcons links={links} />
            </li>
            <li className={[styles.social_icons_li, 'flex gap-2'].join(' ')}>
              <img
                loading="lazy"
                className="cursor-pointer w-[27px]"
                onClick={() => {
                  changeLanguage('en');
                }}
                alt=" "
                src={en}
              />
              <img
                loading="lazy"
                onClick={() => {
                  changeLanguage('ru');
                }}
                className="cursor-pointer w-[27px]"
                alt=" "
                src={ru}
              />
              <img
                loading="lazy"
                onClick={() => {
                  changeLanguage('am');
                }}
                className="cursor-pointer w-[27px]"
                alt=" "
                src={am}
              />
            </li>
          </ul>
        </Container>

        <Container bg={styles.under_box} className={styles.under_items}>
          <div>
            <span className="text-[12px]">Copyright @ 2023 SeiEn All rights reserved</span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <span className="text-[12px]">Created by WebEX Technologies LLC</span>
            <img loading="lazy" src={WebEx_Logo} className="w-[35px] " />
          </div>
        </Container>
      </footer>
    </>
  );
};
