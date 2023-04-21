import * as yup from "yup";

export const boxes_schema = yup.object().shape({
  search: yup.string(),
  start_date: yup.string(),
  end_date: yup.string(),
});
