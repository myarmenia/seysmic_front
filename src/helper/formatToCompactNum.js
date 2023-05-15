export function formatToCompactNum(number, max = 7) {
  const formatter = Intl.NumberFormat(process.env.REACT_APP_DEFAULT_LANG, {
    notation: "compact",
  });
  if (number.toString().length < max) return number.toString();
  return formatter.format(number);
}
