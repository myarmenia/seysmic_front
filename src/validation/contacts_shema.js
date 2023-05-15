import * as yup from "yup";
yup.addMethod(yup.string, "Regular_Expression", function (errorMessage) {
  return this.test(`test`, errorMessage, function (value) {
    console.log();
    const { path, createError } = this;
    var reg = new RegExp("^[0-9]$");
    console.log(reg.test(value));
    if (!reg.test(value)) {
      return createError({ path, message: errorMessage });
    }
  });
});
// Regular_Expression("onlyText")
export const contacts_shema = yup.object().shape({
  name: yup.string().required("Required").matches(/\D+$/, "Wrongtext"),
  email: yup
    .string()
    .required("Required")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "WrongEmail"),
  feedback_letter: yup.string().required("Required"),
  description: yup
    .string()
    .required("Required")
    .min(10, "WrongMinimalText")
    .max(90, "WrongMaximalText"),
  isRobot: yup.bool().required("Required"),
});
