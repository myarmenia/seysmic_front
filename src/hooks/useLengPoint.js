import { useEffect } from "react";
import instance from "../api";

export const useLengPoint = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("lengs")) {
      (async () => {
        await instance.get("languages").then((res) => {
          sessionStorage.getItem("lengs", JSON.stringify(res.data));
        });
      })();
    }
  }, [sessionStorage]);
};
