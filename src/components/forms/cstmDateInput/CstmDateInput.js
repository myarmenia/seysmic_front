import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useError, useFormRegister } from "../../../hooks";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmDateInput.module.css";

export const CstmDateInput = ({
  className = "",
  boxClassName = "",
  defaultValue = "ДД.ММ.ГГГГ",
  regName,
  error,
  errorClassName,
  onChange,
  ...props
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(regName, error);
  const register = useFormRegister(regName);

  const [date, setDate] = useState({ value: "", curentValue: "" });
  const changeHandler = (e) => {
    onChange?.(e);
    regName && formMethods.setValue(regName, e.target.value);
    setDate({
      value: e.target.value,
      curentValue: e.target.value.split("-").reverse().join("."),
    });
  };
  useEffect(() => {
    if (regName && date.value !== "" && formMethods.formState.isSubmitted) {
      formMethods.trigger(regName);
    }
  }, [date]);
  return (
    <div className={"flex relative w-fit " + boxClassName}>
      <input
        {...props}
        className={`${className} ${styles.input}`}
        type="date"
        onChange={changeHandler}
        value={date.value}
        name={register?.name}
      />
      <span className={styles.value}>{date.curentValue || defaultValue}</span>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
