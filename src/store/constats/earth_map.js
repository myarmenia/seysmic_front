import { convertToPercent } from "../../helper";

const earth_map_default = []

const my_arr = [];
// console.log(
//   earth_map_default
//     .map((elem, i) => {
//       if (my_arr.some((e) => e === i + 1)) {
//         return null;
//       }
//       return elem;
//     })
//     .filter((e) => !!e)
// );

export const earth_map = earth_map_default.map((el, i) => ({
  id: el.id || i + 1,
  ...convertToPercent(el),
}));
