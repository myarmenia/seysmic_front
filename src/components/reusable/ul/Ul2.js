import React from "react";
import classes from "./ul.module.css";
import { ViewPosition } from "../ViewPosition";
import { Link } from "react-router-dom";

const Component = ({ children, data, title, className = "" }) => {
  return (
    <ViewPosition>
      {(bool) => (
        <ul className={[className, classes.ul].join(" ")}>
          <b>{title}</b>
          {data && data.length
            ? data?.map((text, i) => (
                <Li
                  key={i}
                  style={{
                    opacity: bool ? 1 : 0,
                    transform: bool ? "translateY(0)" : "translateY(50px)",
                    transitionDelay: `${i / 10}s`,
                  }}>
                  {!Array.isArray(text) ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: text,
                      }}></span>
                  ) : (
                    <>
                      {text[0]} <Link>{text[1]}</Link>
                    </>
                  )}
                </Li>
              ))
            : children}
        </ul>
      )}
    </ViewPosition>
  );
};

const Li = ({ children, className, ...props }) => {
  return (
    <li className={[classes.li, className].join(" ")} {...props}>
      {children}
    </li>
  );
};

export const Ul2 = Object.assign(Component, { Li });
