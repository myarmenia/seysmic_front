import { convertToPercent } from "../../helper";

const earth_map_default = [
  {
    id: 3,
    top: 140.04,
    left: 681.46,
    width: 44.62,
    height: 48.22,
  },
  {
    id: 10,
    top: 151.32,
    left: 588.34,
    width: 86.05,
    height: 54.17,
  },
  {
    id: 22,
    top: 141.68,
    left: 742.58,
    width: 14.06,
    height: 14.38,
  },
];

export const earth_map = earth_map_default.map((el) => ({
  id: el.id,
  ...convertToPercent(el),
}));
