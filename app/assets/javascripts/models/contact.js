Everybody.Models.Contact = Backbone.Model.extend({
  defaults: {
    group: 'none',
    address: '',
    notes: ''
  },
  
  validate: function(attrs) {
    if (Everybody.Helpers.ModelValidator.isBlank(attrs.name)) {
      return Everybody.Helpers.ModelValidator.messageForBlankValue('name');
    };
  }
});
