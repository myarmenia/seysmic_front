const lang_keys = ["_am", "_ru", "_en"];

export function filterByLang(arr, lang) {
  const arr1 = JSON.parse(JSON.stringify(arr)).map((el) => {
    const myObj = {};
    Object.entries(el).forEach(([key, value]) => {
      if (lang_keys.includes(key.slice(-3))) {
        if (key.slice(-2) === lang) {
          Object.assign(myObj, { [key.slice(0, -3)]: value });
        }
      } else {
        Object.assign(myObj, { [key]: value });
      }
    });
    return myObj;
  });

  return arr1;
}
