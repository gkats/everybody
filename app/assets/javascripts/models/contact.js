Everybody.Models.Contact = Backbone.Model.extend({
  defaults: {
    group: 'none',
    address: '',
    notes: ''
  },

	initialize: function() {
		this.phones = new Everybody.Collections.Phones();
	},
  
  validate: function(attrs) {
    if (Everybody.Helpers.ModelValidator.isBlank(attrs.name)) {
      return Everybody.Helpers.ModelValidator.messageForBlankValue('name');
    };
  },

	phones_attributes: function() {
		return this.phones.map(function(p) {
			return p.toJSON();
		});
	},
	
	toJSON: function() {
		return _.extend(_.clone(this.attributes), { phones_attributes: this.phones_attributes() });
	}
});
