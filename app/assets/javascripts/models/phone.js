Everybody.Models.Phone = Backbone.Model.extend({
  defaults: {
    type: 'Mobile',
    number: ''
  },
  
  validate: function(attrs) {
    if (Everybody.Helpers.ModelValidator.isBlank(attrs.number)) {
      return Everybody.Helpers.ModelValidator.messageForBlankValue('number');
    }
    if (!Everybody.Helpers.ModelValidator.isNumeric(attrs.number)) {
      return Everybody.Helpers.ModelValidator.messageForNumericInput('number');
    }
  }
});
