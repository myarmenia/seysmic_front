import React, { useEffect, useRef, useState } from "react";

export const ViewPosition = ({ children, ...props }) => {
  const [bool, setBool] = useState(false);
  const ref = useRef(null);

  function handleScroll() {
    let view_bearer = 200;
    if (window.innerWidth < 900) {
      view_bearer = 100;
    } else if (window.innerWidth < 600) {
      view_bearer = 75;
    }
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect(),
        window_height = window.innerHeight;

      if (top < window_height - view_bearer && bottom > view_bearer) {
        setBool(true);
      }
      // else {
      //   setBool(false);
      // }
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div {...props} ref={ref}>
      {children(bool)}
    </div>
  );
};
