export function generateArray(length, item) {
  const myItem = item || {};
  return Array.from({ length }).map(() => myItem);
}
