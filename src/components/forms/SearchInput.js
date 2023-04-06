import React from "react";
import { CstmInput } from "./CstmInput";
import search_icon from "../../assets/icons/search-input-gray.svg";

export const SearchInput = ({ inputProps, className = "", onButtonClick }) => {
  return (
    <div className={["relative", className].join(" ")}>
      <CstmInput
        {...inputProps}
        onKeyDown={(e) => e.key === "Enter" && onButtonClick()}
      />
      <img
        className="absolute -translate-y-1/2 top-1/2 right-[15px] cursor-pointer"
        onClick={onButtonClick}
        src={search_icon}
        alt=""
      />
    </div>
  );
};
