import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

export const useError = (regName, error) => {
  const formMethods = useFormContext();
  const splitedName = regName?.split(".");
  const thisError =
    splitedName && formMethods.formState.errors?.[splitedName[0]];
  const errorMessage = useMemo(() => {
    if (error) {
      return error;
    } else if (regName) {
      if (regName.includes(".")) {
        if (regName.split(".").length === 2) {
          if (formMethods.formState.errors[regName.split(".")[0]]) {
            const err =
              formMethods.formState.errors[regName.split(".")[0]][
                regName.split(".")[1]
              ];
            return (
              formMethods.formState.errors[regName.split(".")[0]] &&
              err &&
              err.message
            );
          }
        }
        if (regName.split(".").length === 3) {
          if (Boolean(formMethods.formState.errors[regName.split(".")[0]])) {
            if (
              Boolean(thisError) &&
              Array.isArray(thisError) &&
              Boolean(thisError[+splitedName[1]]) &&
              Boolean(thisError[+splitedName[1]][splitedName[2]]?.message)
            ) {
              return thisError[+splitedName[1]][splitedName[2]]?.message;
            } else return;
          } else return;
        }
      } else if (Boolean(formMethods?.formState?.errors?.[regName]?.message)) {
        return formMethods?.formState?.errors?.[regName]?.message;
      } else return;
    }
  }, [
    error,
    regName && formMethods?.formState?.errors[regName],
    Boolean(thisError) &&
      Array.isArray(thisError) &&
      Boolean(thisError[+splitedName[1]]) &&
      thisError[+splitedName[1]][splitedName[2]],
    regName &&
      typeof formMethods.formState.errors[regName.split(".")[0]] === "object" &&
      formMethods.formState.errors[regName.split(".")[0]][
        regName.split(".")[1]
      ],
  ]);

  return errorMessage;
};
