import { useState } from "react";
import { useTranslation } from "../../../App";
import arrow_down from "../../../assets/icons/arrow-down-blue.svg";
import language_img from "../../../assets/icons/language.svg";
import styles from "./languageSelect.module.css";
import { useNavigate, useParams } from "react-router";

const options = [
  { title: "Русский", value: "ru" },
  { title: "English", value: "en" },
  { title: "Հայերեն", value: "am" },
];

export const LanguageSelect = () => {
  const { lang } = useParams();
  const [myOptions, setOptions] = useState(
    options.map((e) => ({ ...e, active: lang === e.value }))
  );
  const { changeLanguage } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const optoinClick = (value) => {
    if (value) {
      setOpen(false);
      changeLanguage(value, navigate);
      setOptions((p) => p.map((el) => ({ ...el, active: el.value === value })));
    }
  };

  return (
    <div
      className="flex justify-center w-[39px] h-[27px]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={styles.language_box}>
        <div className="flex items-center gap-1">
          <div className={styles.language_select}>
            <img src={language_img} alt="" />
          </div>
          <img src={arrow_down} alt="" />
        </div>
        {open && (
          <div className={styles.language_options}>
            <div className="max-h-[200px] rounded-2xl overflow-y-auto bg-[#ffffff69] flex flex-col shadow-normal mt-[13px]">
              {myOptions.map(({ title, value, active }, i) => (
                <div className="bg-white hover:bg-slate-200" key={i}>
                  <span
                    className={active ? styles.active : ""}
                    onClick={() => optoinClick(value)}
                  >
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
