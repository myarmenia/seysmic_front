import React from "react";

export const Title = ({ children, className = "" }) => {
  return (
    <p
      className={
        "font-semibold text-[32px] text-center uppercase text-dark-blue mx-auto w-fit med-400:text-[24px] med-400:leading-[112%] " +
        className
      }
    >
      {children}
    </p>
  );
};
