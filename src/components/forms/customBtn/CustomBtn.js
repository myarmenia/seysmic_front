import styles from "./customBtn.module.css";

export const CustomBtn = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={[
        styles.button,
        className,
        className === "gray" ? styles.grayBtn : "",
      ].join(" ")}
      {...{ type }}
    >
      {children}
    </button>
  );
};
