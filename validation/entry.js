const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateEntryInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.entry = validText(data.entry) ? data.entry : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required for entry";
  }

  if (Validator.isEmpty(data.entry)) {
    errors.entry = "Entry is required for entry";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};