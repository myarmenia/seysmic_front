import chevDown from "../../../assets/icons/arrow-down-gray.svg";
import { useFormRegister } from "../../../hooks";
import { useSelectContext } from "./CustomSelect";
import styles from "./customSelect.module.css";

export const DefaultOption = () => {
  const { toggleOptions, regName, placeholder, value, img } =
    useSelectContext();
  const register = useFormRegister(regName);
  return (
    <div className={styles.defaultOption} onClick={() => toggleOptions()}>
      {img && (
        <img
          loading="lazy"
          src={img}
          alt=""
          className="absolute -translate-y-1/2 top-1/2 left-4"
        />
      )}
      <div
        loading="lazy"
        className={`flex text-gray w-full text-xs cursor-pointer ${
          img ? "!pl-[23px]" : ""
        }`}>
        <input
          type="text"
          {...{ placeholder }}
          readOnly
          className={styles.title}
          value={value}
          {...register}
        />
      </div>
      <img loading="lazy" src={chevDown} alt="" className="w-3" />
    </div>
  );
};
