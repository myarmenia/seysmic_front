import * as yup from "yup";

export const contacts_shema = (errorMessages) =>
  yup.object().shape({
    full_name: yup
      .string()
      .required(errorMessages.Required)
      .matches(/\D+$/, errorMessages.Wrongtext),
    email: yup
      .string()
      .required(errorMessages.Required)
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, errorMessages.WrongEmail),
    type: yup.string().required(errorMessages.Required),
    content: yup
      .string()
      .required(errorMessages.Required)
      .min(20, errorMessages.WrongMinimalText)
      .max(90, errorMessages.WrongMaximalText),
    isRobot: yup.bool().required(errorMessages.Required),
  });
