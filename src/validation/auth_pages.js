import * as yup from "yup";

export const registration_schema = yup.object().shape({
  name: yup.string(),
  lastName: yup.string(),
  email: yup.string(),
  password: yup.string(),
  password_repeat: yup.string(),
});

export const login_schema = yup.object().shape({
  name: yup.string().required("Required"),
  password: yup.string().required("Required"),
});
