const img_width = 1322.93,
  img_height = 582.83;
export const convertToPercent = ({ top, left, width, height }) => {
  return {
    top: ((parseFloat(top) / img_height) * 100).toFixed(3) + "%",
    left: ((parseFloat(left) / img_width) * 100).toFixed(3) + "%",
    width: ((parseFloat(width) / img_width) * 100).toFixed(3) + "%",
    height: ((parseFloat(height) / img_height) * 100).toFixed(3) + "%",
  };
};
