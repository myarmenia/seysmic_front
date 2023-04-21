export const getUrlParams = (window_href, isMagnitude = false) => {
  const url = new URL(window_href),
    default_values =
      JSON.stringify(Object.fromEntries(url.searchParams)) === "{}"
        ? {
            search: "",
            magnitude: "",
            start_date: "",
            end_date: "",
          }
        : Object.fromEntries(url.searchParams);

  if (!isMagnitude) {
    delete default_values.magnitude;
  }

  return default_values;
};
