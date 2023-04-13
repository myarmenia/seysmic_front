import React, { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import translation from "./translation.json";

const Translation = createContext(null);
export const useTranslation = () => useContext(Translation);

function App() {
  const [language, setLanguage] = useState(
    translation[localStorage.getItem("lang")] || translation.ru
  );
  const changeLanguage = (lang, navigate) => {
    setLanguage(translation[lang]);
    let my_path = window.location.pathname.split("/");
    my_path[1] = lang;
    my_path = my_path.join("/");
    navigate(my_path);
    localStorage.setItem("lang", lang)
  };
  return (
    <Translation.Provider value={{ language, changeLanguage }}>
      <RouterProvider router={router} />
    </Translation.Provider>
  );
}

export default App;
