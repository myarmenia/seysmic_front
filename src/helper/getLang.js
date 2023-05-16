export function getLang(path = "") {
  if (!path) {
    return localStorage.getItem("lang") || process.env.REACT_APP_DEFAULT_LANG;
  }
  return `/${
    localStorage.getItem("lang") || process.env.REACT_APP_DEFAULT_LANG
  }${path}`;
}
