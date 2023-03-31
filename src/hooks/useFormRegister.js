import { useFormContext } from "react-hook-form";

export const useFormRegister = (regName) => {
  const formMethods = useFormContext();
  const register = regName ? formMethods?.register(regName) : null;
  return register;
};
