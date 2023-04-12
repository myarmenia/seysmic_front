import React, { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import translation from "./translation.json";

const Translation = createContext(null);
export const useTranslation = () => useContext(Translation);

function App() {
  const [language, setLanguage] = useState(
    translation[localStorage.getItem("lanugage")] || translation.ru
  );
  const changeLanguage = (lang) => {
    setLanguage(translation[lang]);
    localStorage.setItem("lanugage", lang);
  };
  return (
    <Translation.Provider value={{ language, changeLanguage }}>
      <RouterProvider router={router} />
    </Translation.Provider>
  );
}

export default App;
