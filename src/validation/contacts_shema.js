import * as yup from "yup";

export const contacts_shema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().required("Required"),
  feedback_letter: yup.string().required("Required"),
  describtion: yup.string().required("Required"),
  isRobot: yup.bool().required("Required"),
});
