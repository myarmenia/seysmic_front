import React, { forwardRef } from "react";
import { useError, useFormRegister } from "../../hooks";
import { ErrorMessage } from "../reusable";

export const CstmInput = forwardRef(
  (
    {
      className = "",
      boxClassName = "",
      img,
      regName,
      error,
      errorClassName,
      ...props
    },
    ref
  ) => {
    const errorMessage = useError(regName, error);
    const register = useFormRegister(regName);
    return (
      <div className={"flex w-fit relative med-600:w-full " + boxClassName}>
        {img && (
          <img
            src={img}
            alt=""
            className="absolute -translate-y-1/2 top-1/2 left-4"
          />
        )}
        <input
          {...props}
          className={`main-input ${className} ${img ? "!pl-[40px]" : ""}`}
          {...register}
          ref={ref}
        />
        <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
      </div>
    );
  }
);
