import { useEffect } from "react";
import instance from "../api";

export const useLengPoint = () => {
  console.log(localStorage.getItem("lengs"));
  // const leng = { am: "am", ru: "ru", en: "ru" };
  // sessionStorage.getItem("lengs", JSON.stringify(leng));
  useEffect(() => {
    if (!sessionStorage.getItem("lengs")) {
      (async () => {
        await instance.get("languages").then((res) => {
          console.log(res.data);
          sessionStorage.getItem("lengs", JSON.stringify(res.data));
        });
      })();
    }
  }, [sessionStorage]);
  console.log(sessionStorage);
};
