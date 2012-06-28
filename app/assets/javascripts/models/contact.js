Everybody.Models.Contact = Backbone.Model.extend({
  defaults: {
    group: 'none',
    address: '',
    notes: ''
  },

	initialize: function() {
	  var phones;
		this.phones = new Everybody.Collections.Phones();
		this.phones.url = '/api/contacts/' + this.id + '/phones';
	},
  
  validate: function(attrs) {
    if (Everybody.Helpers.ModelValidator.isBlank(attrs.name)) {
      return Everybody.Helpers.ModelValidator.messageForBlankValue('name');
    };
  },

	toJSON: function() {
		return _.extend(_.clone(this.attributes), { 
		  phones_attributes: this.phones.map(function(p) {
		    var phone = p.toJSON();
		    delete phone['created_at'];
		    delete phone['updated_at']
			  return phone;
		  }) 
		});
	}
});
