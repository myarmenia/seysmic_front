import { useError, useFormRegister } from "../../../hooks";
import { ErrorMessage } from "../../reusable";
import styles from "./cstmTextarea.module.css";

export const CstmTextarea = ({
  regName,
  className = "",
  error,
  errorClassName,
  ...props
}) => {
  const errorMessage = useError(regName, error);
  const register = useFormRegister(regName);
  return (
    <div className="flex flex-col relative w-fit">
      <textarea
        {...props}
        wrap="off"
        className={`${className} scrollbar_hidden ${styles.textarea} main-input`}
        {...register}
      />
      <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
    </div>
  );
};
