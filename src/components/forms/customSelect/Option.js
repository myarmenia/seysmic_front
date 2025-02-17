import { useFormContext } from "react-hook-form";
// import trashbinImg from "../../../assets/teacher_images/exam/delete.svg";
import { useSelectContext } from "./CustomSelect";
import styles from "./customSelect.module.css";

export const Option = ({ option, optionId }) => {
  const formMethods = useFormContext();
  const { toggleOptions, regName, removeOption, setValue, setOptions } =
    useSelectContext();
  return (
    <div className={styles.optionBox}>
      <div
        className={styles.option}
        onClick={() => {
          setValue?.(option.value);
          regName &&
            formMethods?.setValue(regName, option.value, {
              shouldValidate: true,
            });
          toggleOptions();
        }}>
        {option.title}
      </div>
      {Boolean(setOptions) && (
        <img
          loading="lazy"
          className="py-3 px-4"
          // src={trashbinImg}
          onClick={() => removeOption?.(optionId)}
          alt=""
        />
      )}
    </div>
  );
};
