import React from "react";

export const ErrorMessage = ({ children, className="" }) => {
  return (
    <p
      className={
        className +
        " text-[red] text-xs leading-3 -translate-x-1/2 whitespace-nowrap w-full left-[53%] -bottom-3 absolute"
      }
    >
      {children}
    </p>
  );
};
