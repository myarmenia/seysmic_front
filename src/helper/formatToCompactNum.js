export function formatToCompactNum(number, max = 7) {
  const formatter = Intl.NumberFormat("ru", {
    notation: "compact",
  });
  if (number.toString().length < max) return number.toString();
  return formatter.format(number);
}
