import { useEffect, useState } from "react";

export const useAnimation = (ref) => {
  const [bool, setBool] = useState(false);
  function handleScroll() {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect(),
        window_height = window.innerHeight;

      if (top < window_height - 200 && bottom > 200) {
        setBool(true);
      } else {
        setBool(false);
      }
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [ref.current]);

  return bool;
};
