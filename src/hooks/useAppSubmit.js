import { useSubmit } from "react-router-dom";

export const useAppSubmit = () => {
  const submit = useSubmit();
  return (target, options) =>
    submit(target, { ...options, encType: "multipart/form-data" });
};
