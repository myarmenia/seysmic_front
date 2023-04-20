import React, { useEffect, useRef, useState } from "react";
import search_icon from "../../assets/icons/searchIcon.svg";
import { CstmInput } from "./CstmInput";

export const SearchInput = ({ inputProps, className = "", onButtonClick }) => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current?.value, 111);
  }, [ref.current?.value]);
  return (
    <div className={["relative", className].join(" ")}>
      <CstmInput
        ref={ref}
        {...inputProps}
        onKeyDown={(e) => e.key === "Enter" && onButtonClick()}
      />
      <div className="absolute -translate-y-1/2 top-1/2 right-[15px] flex items-center gap-[14px]">
        <i
          style={{
            // display: !!ref.current?.value ? "block" : "none",
            fontStyle: "normal",
          }}
          className="cursor-pointer text-[24px] leading-[18px] h-[18px] text-dark-blue hover:scale-125 duration-300"
          onClick={() => {
            if (ref?.current && ref.current.value) {
              ref.current.value = "";
            }
          }}
        >
          &#10005;
        </i>
        <div
          style={
            {
              // display: !!ref.current?.value ? "block" : "none",
            }
          }
          className="h-[23px] w-[1px] bg-[#D9D9D9]"
        />
        <img
          className="cursor-pointer w-[18px] h-[18px] hover:scale-125 duration-300"
          onClick={onButtonClick}
          src={search_icon}
          alt=""
        />
      </div>
    </div>
  );
};
