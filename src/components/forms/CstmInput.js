import React, { forwardRef, useMemo } from "react";
import { useError, useFormRegister } from "../../hooks";
import { ErrorMessage } from "../reusable";
import { useLocation } from "react-router";
import { errorInputContact } from "../../helper/error";

export const CstmInput = ({
  className = "",
  boxClassName = "",
  img,
  regName,
  error,
  errorClassName,

  ...props
}) => {
  const errorMessage = useError(regName, error);
  const { pathname } = useLocation();
  const errMessage = useMemo(() => {
    const leng = pathname.split("/")[1];
    if (errorInputContact[leng][errorMessage]) {
      return errorInputContact[leng][errorMessage];
    }
    return errorMessage;
  }, [pathname, errorMessage]);
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
      />

      <ErrorMessage className={errorClassName}>{errMessage}</ErrorMessage>
    </div>
  );
};
