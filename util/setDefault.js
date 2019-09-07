const setDefault = (param, defaultValue) => {
  if (param === null) {
    return defaultValue;
  }
  return param;
};
module.exports = setDefault;
