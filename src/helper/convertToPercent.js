const img_width = 1374.61,
  img_height = 609.45;
export const convertToPercent = ({ top, left, width, height }) => {
  return {
    top: ((top / img_height) * 100).toFixed(3) + "%",
    left: ((left / img_width) * 100).toFixed(3) + "%",
    width: ((width / img_width) * 100).toFixed(3) + "%",
    height: ((height / img_height) * 100).toFixed(3) + "%",
  };
};
