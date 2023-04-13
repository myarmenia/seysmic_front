import React, { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import translation from "./translation.json";

const Translation = createContext(null);
export const useTranslation = () => useContext(Translation);

function App() {
  const key =
    localStorage.getItem("lang") &&
    localStorage.getItem("lang") !== "undefined" &&
    localStorage.getItem("lang")?.trim() !== "null"
      ? localStorage.getItem("lang")
      : "ru";
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
      <RouterProvider router={router} />
    </Translation.Provider>
  );
}

export default App;
