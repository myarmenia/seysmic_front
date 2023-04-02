import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo } from "../../reusable";
import styles from "./footer.module.css";
import fcbook from "../../../assets/icons/social_networks/fcbook.svg";
import gmail from "../../../assets/icons/social_networks/gmail.svg";
import instagram from "../../../assets/icons/social_networks/instagram.svg";
import telegram from "../../../assets/icons/social_networks/telegram.svg";
import yt from "../../../assets/icons/social_networks/yt.svg";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container bg={styles.content} className={styles.content_div}>
          <ul>
            <li className={styles.li_head}>
              <Logo color="text-white underline" />
            </li>
            <li>
              <Link>О нас</Link>
            </li>
            <li>
              <Link>Стратегический портнер</Link>
            </li>
            <li>
              <Link>Технологии</Link>
            </li>
            <li>
              <Link>Продукция</Link>
            </li>
          </ul>
          <ul>
            <li className={styles.li_head}>Текущие землетрясения</li>
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
            <li className={styles.li_head}>Контактные данные</li>
            <li className={styles.social_icons_li}>
              <div className={styles.social_icons}>
                <Link>
                  <img src={fcbook} alt="" />
                </Link>
                <Link>
                  <img src={gmail} alt="" />
                </Link>
                <Link>
                  <img src={yt} alt="" />
                </Link>
                <Link>
                  <img src={instagram} alt="" />
                </Link>
                <Link>
                  <img src={telegram} alt="" />
                </Link>
              </div>
            </li>
          </ul>
        </Container>

        <Container bg={styles.under_box} className={styles.under_items}>
          <span>Контактные данные</span>
          <span>Контактные данные</span>
          <span>Соц. сети</span>
        </Container>
      </footer>
    </>
  );
};
