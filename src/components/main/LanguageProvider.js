import React from "react";
import translation from "../../translation.json";
import { useState } from "react";
import { createContext } from "react";

export const Translation = createContext(null);

const key =
  localStorage.getItem("lang") &&
  localStorage.getItem("lang") !== "undefined" &&
  localStorage.getItem("lang") !== "null"
    ? localStorage.getItem("lang")
    : process.env.REACT_APP_DEFAULT_LANG;

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(translation[key]);
  const changeLanguage = (lang, navigate) => {
    if (localStorage.getItem("lang") !== lang) {
      setLanguage(translation[lang]);
      let my_path = window.location.pathname.split("/");
      my_path[1] = lang;
      my_path = my_path.join("/");
      localStorage.setItem("lang", lang);
      navigate(my_path);
    }
  };
  return (
    <Translation.Provider value={{ language, changeLanguage }}>
      {children}
    </Translation.Provider>
  );
};
