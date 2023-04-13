export function getLang(path) {
  return `/${localStorage.getItem("lang") || "ru"}${path}`;
}
