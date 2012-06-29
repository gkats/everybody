Everybody.Helpers.ModelValidator = {
  isBlank: function(value) {
    return !value || value.replace(/\s*/, '').length == 0;
  },
  
  isNumeric: function(value) {
    return value && value.search(/\D/) < 0;
  },

	isIncluded: function(list, value) {
		return _.include(list, value);
	},
  
  messageForBlankValue: function(attrName) {
    return Everybody.Helpers.StringUtils.capitalize(attrName) + ' can\'t be blank';
  },
  
  messageForNumericInput: function(attrName) {
    return Everybody.Helpers.StringUtils.capitalize(attrName) + ' must contain only digits';
  },

	messageForInclusion: function(attrName) {
		return 'Invalid ' + attrName;
	}
};
