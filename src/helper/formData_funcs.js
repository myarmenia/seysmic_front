export const toFormData = (arg) => {
  const formData = new FormData();
  Object.entries(arg).forEach(([key, value]) => {
    if (Array.isArray(value) || typeof value === "boolean") {
      formData.append(key, JSON.stringify(value));
    }
    if (value instanceof File) {
      formData.append(key, value, value.name);
    }
    if (typeof value === "string") {
      formData.append(key, value);
    }
    if (value === undefined) {
      formData.append(key, "");
    }
  });
  return formData;
};

export const toObject = (arg) => {
  const newObj = Object.fromEntries(arg);


  Object.entries(newObj).forEach(([key, value]) => {
    if (typeof value === "string") {
      if (
        (value.includes("[{") && Array.isArray(JSON.parse(value))) ||
        value === "true" ||
        value === "false"
      ) {
        newObj[key] = JSON.parse(value);
      } else {
        newObj[key] = value;
      }
    }
    if (value === undefined) {
      newObj[key] = "";
    }
  });

  return newObj;
};
