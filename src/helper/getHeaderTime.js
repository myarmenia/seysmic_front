export function getHeaderTime(e) {
  const date = new Date(e);
  return `GMT ${date.getUTCHours()}:${
    date.getUTCMinutes() < 10
      ? `0${date.getUTCMinutes()}`
      : date.getUTCMinutes()
  } / ${date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;
}
