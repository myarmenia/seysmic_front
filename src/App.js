import React, { useEffect } from "react";
import { router } from "./routes";
import { createContext } from "react";
import translation from "./translation.json";
import { RouterProvider } from "react-router";
import { useState } from "react";
import { useContext } from "react";

const Translation = createContext(null);
export const useTranslation = () => useContext(Translation);

function App() {
  const [language, setLanguage] = useState(translation.ru);
  const changeLanguage = (lang) => {
    setLanguage(translation[lang]);
    sessionStorage.setItem("lanugage", lang);
  };
  useEffect(() => {
    if (sessionStorage?.getItem("lanugage")) {
      changeLanguage(sessionStorage?.getItem("lanugage"));
    } else sessionStorage.setItem("lanugage", "ru");
  }, []);
  return (
    <Translation.Provider value={{ language, changeLanguage }}>
      <RouterProvider router={router} />
    </Translation.Provider>
  );
}

export default App;
