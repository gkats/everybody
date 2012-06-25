Everybody.Helpers.ModelValidator = {
  isBlank: function(value) {
    return !value || value.replace(/\s*/, '').length == 0;
  },
  
  isNumeric: function(value) {
    return value && !value.search(/\D/) > 0;
  },
  
  messageForBlankValue: function(attrName) {
    return Everybody.Helpers.StringUtils.capitalize(attrName) + ' can\'t be blank';
  },
  
  messageForNumericInput: function(attrName) {
    return Everybody.Helpers.StringUtils.capitalize(attrName) + ' must be a number';
  }
};
