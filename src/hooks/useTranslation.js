import { useNavigate } from "react-router";
import { Translation } from "../App";
import { useContext } from "react";

export const useTranslation = () => {
  const navigate = useNavigate();
  const { language, changeLanguage } = useContext(Translation);
  const fn = (lang) => changeLanguage(lang, navigate);

  return { language, changeLanguage: fn };
};
