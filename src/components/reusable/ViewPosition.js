import React, { useEffect, useRef, useState } from "react";

export const ViewPosition = ({ children, ...props }) => {
  const [bool, setBool] = useState(false);
  const ref = useRef(null);

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

  return (
    <div {...props} ref={ref}>
      {children(bool)}
    </div>
  );
};
