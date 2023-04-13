import { useState } from "react";
import { useTranslation } from "../../../App";
import arrow_down from "../../../assets/icons/arrow-down-blue.svg";
import language_img from "../../../assets/icons/language.svg";
import { useEffect } from "react";
import { Modal } from "../../reusable";
import styles from "./languageSelect.module.css";

export const LanguageSelect = ({ options = [] }) => {
  const { changeLanguage } = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  
  const handleClose = () => setOpen(false);
  const optoinClick = (value) => {
    setValue(value);
    setOpen(false);
  };

  useEffect(() => {
    if (value) changeLanguage(value);
  }, [value]);
  return (
    <>
      <div className="flex justify-center w-[39px] h-[27px]">
        <div className={styles.language_box}>
          <div className="flex items-center gap-1">
            <div className={styles.language_select}>
              <img
                onClick={() => setOpen((p) => !p)}
                src={language_img}
                alt=""
              />
            </div>
            <img src={arrow_down} alt="" />
          </div>
          {/* {open && (
            <div className={styles.language_options}>
              <div className="max-h-[200px] overflow-y-auto bg-[#ffffff69] flex flex-col">
                {options.map(({ title, value }, i) => (
                  <span key={i} onClick={() => optoinClick(value)}>
                    {title}
                  </span>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>
      <Modal title="Languages" {...{ open, handleClose }}>
        <div className={styles.language_options}>
          <div className="max-h-[200px] overflow-y-auto bg-[#ffffff69] flex flex-col">
            {options.map(({ title, value }, i) => (
              <span key={i} onClick={() => optoinClick(value)}>
                {title}
              </span>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};
