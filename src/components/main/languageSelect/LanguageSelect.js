import { useState } from "react";
import { useParams } from "react-router";
import arrow_down from "../../../assets/icons/arrow-down-blue.svg";
import language_img from "../../../assets/icons/language.svg";
import { useTranslation } from "../../../hooks";
import styles from "./languageSelect.module.css";
// Русский
// English
// Հայերեն
const options = [
  { title: "ru", value: "ru" },
  { title: "en", value: "en" },
  { title: "am", value: "am" },
];

const allowFunc = (callback) => {
  if (window.innerWidth > 600) {
    callback();
  }
};
const allowFunc1 = (callback) => {
  if (window.innerWidth <= 600) {
    callback();
  }
};

export const LanguageSelect = ({ show, setShow }) => {
  const { lang } = useParams();
  const [myOptions, setOptions] = useState(
    options.map((e) => ({ ...e, active: lang === e.value }))
  );
  const { changeLanguage } = useTranslation();

  const optoinClick = (value) => {
    if (value) {
      setShow("");
      changeLanguage(value);
      setOptions((p) => p.map((el) => ({ ...el, active: el.value === value })));
    }
  };

  return (
    <div
      className="flex justify-center w-[39px] h-[27px]"
      onMouseEnter={() => allowFunc(() => setShow("lang"))}
      onMouseLeave={() => allowFunc(() => setShow(""))}>
      <div className={styles.language_box}>
        <div
          className="flex items-center gap-1 med-600:gap-[2px]"
          onClick={() =>
            allowFunc1(() => setShow((p) => (p !== "lang" ? "lang" : "")))
          }>
          <div className={styles.language_select}>
            <img loading="lazy" src={language_img} alt="" />
          </div>
          <img loading="lazy" className="!w-2 !h-2" src={arrow_down} alt="" />
        </div>
        {show && (
          <div className={styles.language_options}>
            <div className={styles.language_options_box}>
              {myOptions.map(({ title, value }, i) => (
                <div className={styles.language_option} key={i}>
                  <span
                    className={lang === value ? styles.active : ""}
                    onClick={() => optoinClick(value)}>
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
