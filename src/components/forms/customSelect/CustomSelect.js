import { createContext, useContext, useState } from "react";
import { useError } from "../../../hooks";
import { ErrorMessage } from "../../reusable";
import { DefaultOption } from "./DefaultOption";
import { Options } from "./Options";
import styles from "./customSelect.module.css";

export const CustomSelectContext = createContext(null);

// if you want to make select work without react-hook-form you need to pass value and setValue props (these must be useState) to component
// if you want select to be have input for creating new options you need to pass setOptions prop to component
export const CustomSelect = ({
  className = "",
  regName,
  setOptions,
  options,
  errorClassName = "",
  error,
  placeholder,
  value,
  img,
  setValue,
  boxClassName = "",
}) => {
  const [state, setState] = useState(false);
  const errorMessage = useError(regName, error);
  const toggleOptions = () => {
    setState((prev) => !prev);
  };
  const removeOption = (currentId) => {
    setOptions?.(options.filter((_, id) => id !== currentId));
  };
  return (
    <CustomSelectContext.Provider
      value={{
        className,
        regName,
        setOptions,
        options,
        errorClassName,
        error,
        placeholder,
        value,
        img,
        setValue,
        toggleOptions,
        removeOption,
      }}
    >
      <div
        className={
          "flex justify-center h-[48.67px] med-600:w-full " + boxClassName
        }
      >
        <div className={[styles.customSelect, className].join(" ")}>
          <DefaultOption />
          {state && <Options />}
          <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
        </div>
      </div>
    </CustomSelectContext.Provider>
  );
};

export const useSelectContext = () => useContext(CustomSelectContext);
