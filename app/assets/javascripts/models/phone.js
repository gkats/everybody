Everybody.Models.Phone = Backbone.Model.extend({
	defaults: {
		kind: 'Mobile',
    number: ''
  },

	kinds: ['Mobile', 'Home', 'Work', 'Other'],

  validate: function(attrs) {
    if (Everybody.Helpers.ModelValidator.isBlank(attrs.number)) {
      return Everybody.Helpers.ModelValidator.messageForBlankValue('number');
    }
    if (!Everybody.Helpers.ModelValidator.isNumeric(attrs.number)) {
      return Everybody.Helpers.ModelValidator.messageForNumericInput('number');
    }
		if (!Everybody.Helpers.ModelValidator.isIncluded(this.kinds, attrs.kind)) {
			return Everybody.Helpers.ModelValidator.messageForInclusion('phone type');
		}
  }
});
