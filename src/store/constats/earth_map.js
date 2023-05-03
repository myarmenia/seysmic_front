import { convertToPercent } from "../../helper";

const earth_map_default = [
  {
    id: 37,
    width: "25.33px",
    height: "35.32px",
    top: "82.57x",
    left: "826.69px",
  },
];

export const earth_map = earth_map_default.map((el, i) => ({
  id: el.id || i + 1,
  ...convertToPercent(el),
}));
