const setDefault = (param, defaultValue) => {
  if (param === null || typeof param === "undefined") {
    return defaultValue;
  }
  return param;
};
module.exports = setDefault;
