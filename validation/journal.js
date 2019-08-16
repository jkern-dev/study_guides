const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateJournalInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";

  if (!Validator.isLength(data.title, { min: 2, max: 100})) {
    errors.title = "Journal title must be between 2 and 100 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Journal title is required";
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0
  };
};