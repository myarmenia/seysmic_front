export function getLang(path) {
  return `/${
    localStorage.getItem("lang") || process.env.REACT_APP_DEFAULT_LANG
  }${path}`;
}
