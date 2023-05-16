import { useEffect } from "react";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router";

export const useError = (regName, error) => {
  const { lang } = useParams();
  const formMethods = useFormContext();
  const splitedName = regName?.split(".");
  const thisError =
    splitedName && formMethods.formState.errors?.[splitedName[0]];
  const errorMessage = useMemo(() => {
    if (error) {
      return error;
    } else if (regName) {
      if (regName.includes(".")) {
        // formMethods.trigger(splitedName[0]);
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
        // formMethods.trigger(regName);
        return formMethods?.formState?.errors?.[regName]?.message;
      } else return;
    }
  }, [error, formMethods?.formState?.errors, regName, splitedName, thisError]);

  useEffect(() => {
    if (formMethods?.formState?.errors?.[regName]?.message) {
      formMethods.trigger(regName);
    }
  }, [lang, formMethods?.formState?.errors]);

  return errorMessage;
};
