const isBlank = (str) => {
  return !str || /^\s*$/.test(str);
};

const isEmpty = (str) => {
  return !str || str.length === 0;
};

const fieldValidator = (str) => {
  return isEmpty(str) && isBlank(str);
};

module.exports = fieldValidator;
