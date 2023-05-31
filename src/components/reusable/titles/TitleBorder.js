import React from "react";

export const TitleBorder = ({ title, children, className = "" }) => {
  return (
    <div className="flex flex-col items-center py-5 gap-[25px] med-900:gap-[24px] med-600:gap-[16px]">
      <div className="w-[25%] min-w-[175px] bg-dark-blue h-[1px]" />
      {children || (
        <p
          className={
            "text-[#938E97] leading-[150%] text-[30px] med-600:text-[20px] text-center mx-auto w-fit med-600:leading-[112%] " +
            className
          }>
          {title}
        </p>
      )}
      <div className="w-[25%] min-w-[175px] bg-dark-blue h-[1px] mt-3" />
    </div>
  );
};
