import React from "react";

export const Title = ({ children, className = "" }) => {
  return (
    <p
      className={
        "font-semibold text-[32px] uppercase text-dark-blue mx-auto " +
        className
      }
    >
      {children}
    </p>
  );
};
