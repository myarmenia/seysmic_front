export const convertSearchParamsStr = (
  obj = Object.fromEntries(new URL(window.location.href).searchParams)
) =>
  Object.entries(obj)
    .map(([key, value]) => (!value ? null : `${key}=${value || ""}`))
    .filter((e) => !!e)
    .join("&");
