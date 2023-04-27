import React from "react";
import classes from "./ul.module.css";
import { useRef } from "react";
import { useAnimation } from "../../../hooks";

const Component = ({ children, data, className = "" }) => {
  const ref = useRef(null);
  const bool = useAnimation(ref);
  return (
    <ul ref={ref} className={[className, classes.ul].join(" ")}>
      {data && data.length
        ? data?.map((text, i) => (
            <Li
              key={i}
              style={{
                opacity: bool ? 1 : 0,
                transform: bool ? "translateY(0)" : "translateY(50px)",
                transitionDelay: `${i / 10}s`,
              }}
            >
              {text}
            </Li>
          ))
        : children}
    </ul>
  );
};

const Li = ({ children, className, ...props }) => {
  return (
    <li className={[classes.li, className].join(" ")} {...props}>
      {children}
    </li>
  );
};

export const Ul = Object.assign(Component, { Li });
