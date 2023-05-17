import * as yup from "yup";

export const contacts_shema = (errorMessages) =>
  yup.object().shape({
    name: yup
      .string()
      .required(errorMessages.Required)
      .matches(/\D+$/, errorMessages.Wrongtext),
    email: yup
      .string()
      .required(errorMessages.Required)
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, errorMessages.WrongEmail),
    feedback_letter: yup.string().required(errorMessages.Required),
    description: yup
      .string()
      .required(errorMessages.Required)
      .min(10, errorMessages.WrongMinimalText)
      .max(90, errorMessages.WrongMaximalText),
    isRobot: yup.bool().required(errorMessages.Required),
  });
