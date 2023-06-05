import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Container, Logo, SocIcons } from "../../reusable";
import styles from "./footer.module.css";
import { useTranslation } from "../../../hooks";
import WebEx_Logo from "../../../assets/1.png"

export const Footer = () => {
  const {
    main: { footer: language },
  } = useTranslation().language;
  const links = useLoaderData();
  return (
    <>
      <footer className={styles.footer}>
        <Container bg={styles.content} className={styles.content_div}>
          <ul>
            <li className={styles.li_head}>
              <Logo className={styles.logo} color="text-white underline" />
            </li>
            <li>
              <Link>{language.about}</Link>
            </li>
            <li>
              <Link>Стратегический портнер</Link>
            </li>
            <li>
              <Link>{language.technologies}</Link>
            </li>
            <li>
              <Link>Продукция</Link>
            </li>
          </ul>
          <ul>
            <li className={styles.li_head}>{language.current_earthquakes}</li>
            <li>
              <Link>Пресс релиз</Link>
            </li>
            <li>
              <Link>Мониторинг</Link>
            </li>
            <li>
              <Link>Регистрация</Link>
            </li>
          </ul>
          <ul>
            <li className={styles.li_head}>{language.contacts}</li>
            <li className={styles.social_icons_li}>
              <SocIcons links={links} />
            </li>
          </ul>
        </Container>

        <Container bg={styles.under_box} className={styles.under_items}>
          <span>Контактные данные</span>
          <span>Контактные данные</span>
         <div className="flex justify-center items-center gap-3">
         <span className="text-[12px]">Created by WebEx</span>
          <img src={WebEx_Logo} className="w-[35px] "/>
         </div>
        </Container>
      </footer>
    </>
  );
};
