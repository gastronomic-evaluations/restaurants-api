function ValidationError(field, message) {
  this.errors = {
    [field]: message,
  };
}

module.exports = ValidationError;
