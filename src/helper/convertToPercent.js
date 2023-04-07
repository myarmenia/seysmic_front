const img_width = 1322.93,
  img_height = 582.83;
export const convertToPercent = ({ top, left, width, height }) => {
  return {
    top: ((top / img_height) * 100).toFixed(3) + "%",
    left: ((left / img_width) * 100).toFixed(3) + "%",
    width: ((width / img_width) * 100).toFixed(3) + "%",
    height: ((height / img_height) * 100).toFixed(3) + "%",
  };
};
