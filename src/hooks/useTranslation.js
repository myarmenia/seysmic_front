import { useNavigate } from "react-router";
import { useContext } from "react";
import { Translation } from "../components/main";

export const useTranslation = () => {
  const navigate = useNavigate();
  const { language, changeLanguage } = useContext(Translation);
  const fn = (lang) => changeLanguage(lang, navigate);

  return { language, changeLanguage: fn };
};
