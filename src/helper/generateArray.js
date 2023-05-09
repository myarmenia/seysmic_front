export function generateArray(length, item = {}) {
  return Array.from({ length }).map(() => item);
}
