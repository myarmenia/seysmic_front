import { convertToPercent } from "../../helper";

const earth_map_default = [
  {
    id: 3,
    top: 150.71,
    left: 707.11,
    width: 44.62,
    height: 48.22,
  },
  {
    id: 10,
    top: 161.99,
    left: 613.99,
    width: 86.05,
    height: 54.17,
  },
  {
    id: 22,
    top: 152.35,
    left: 768.23,
    width: 14.06,
    height: 14.38,
  },
];

export const earth_map = earth_map_default.map((el) => ({
  id: el.id,
  ...convertToPercent(el),
}));
