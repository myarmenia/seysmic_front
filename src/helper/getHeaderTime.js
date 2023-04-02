export function getHeaderTime(e) {
  const date = new Date(e);
  return `GMT ${date.getUTCHours()}:${date.getUTCMinutes()} / ${date.getHours()}:${date.getMinutes()}`;
}
