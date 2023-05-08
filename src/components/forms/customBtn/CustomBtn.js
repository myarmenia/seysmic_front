import styles from "./customBtn.module.css";

export const CustomBtn = ({
  children,
  type = "button",
  className = "",
  transparent,
  gradient,
  ...props
}) => {
  return (
    <button
      {...props}
      className={[
        styles.button,
        className,
        className === "gray" ? styles.grayBtn : "",
        transparent && styles.transparent,
        gradient && styles.gradient,
      ].join(" ")}
      {...{ type }}
    >
      {children}
    </button>
  );
};
