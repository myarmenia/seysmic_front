import * as yup from "yup";

export const registration_schema = yup.object().shape({
  name: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().required("Required"),
  password: yup.string().required("Required"),
  password_repeat: yup.string().required("Required"),
});

export const login_schema = yup.object().shape({
  name: yup.string().required("Required"),
  password: yup.string().required("Required"),
});
