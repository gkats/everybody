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
			return { type: p.get('type'), number: p.get('number') };
		});
	},
	
	toJSON: function() {
		json = { contact: _.clone(this.attributes) };
		return _.extend(json.contact, { phones_attributes: this.phones_attributes() });
	}
});
