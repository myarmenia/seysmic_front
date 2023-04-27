import { convertToPercent } from "../../helper";

const earth_map_default = [];

export const earth_map = earth_map_default.map((el, i) => ({
  id: el.id || i + 1,
  ...convertToPercent(el),
}));
