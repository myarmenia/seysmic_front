import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useError, useFormRegister } from "../../../hooks";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmDateInput.module.css";

export const CstmDateInput = ({
  className = "",
  boxClassName = "",
  regName,
  error,
  errorClassName,
  onChange,
  value,
  name,
  placeholder,
  ...props
}) => {
  const formMethods = useFormContext();
  const errorMessage = useError(regName, error);
  const register = useFormRegister(regName);

  const [date, setDate] = useState(value || "");
  const changeHandler = (e) => {
    onChange?.(e);
    regName && formMethods.setValue(regName, e.target.value);
    setDate(e.target.value);
  };
  useEffect(() => {
    if (regName && date.value !== "" && formMethods.formState.isSubmitted) {
      formMethods.trigger(regName);
    }
  }, [date]);
  console.log(props);
  return (
    <div className={"flex relative w-fit med-600:w-full " + boxClassName}>
      <input
        {...props}
        placeholder={placeholder}
        className={`${className} ${styles.input}`}
        type="date"
        onChange={changeHandler}
        value={date}
        name={register?.name || name}
      />
      <span className={styles.value}>
        {date.split("-").reverse().join(".") || placeholder || "ДД.ММ.ГГГГ"}
      </span>
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
