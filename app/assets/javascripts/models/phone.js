Everybody.Models.Phone = Backbone.Model.extend({
	defaults: {
		kind: 'Mobile',
    number: ''
  },

  validate: function(attrs) {
    if (Everybody.Helpers.ModelValidator.isBlank(attrs.number)) {
      return Everybody.Helpers.ModelValidator.messageForBlankValue('number');
    }
    if (!Everybody.Helpers.ModelValidator.isNumeric(attrs.number)) {
      return Everybody.Helpers.ModelValidator.messageForNumericInput('number');
    }
		if (!_.include(Everybody.Models.Phone.kinds, attrs.kind)) {
			return Everybody.Helpers.NotificationHandler.notify('Invalid phone type');
		}
  }
});

Everybody.Models.Phone.kinds = ['Mobile', 'Home', 'Work', 'Other'];
