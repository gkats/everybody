Everybody.Views.Phone = Backbone.View.extend({
	template: JST['phones/fields'],
	
	events: {
	  'click .add-phone': 'addPhone'
	},
	
	render: function() {
		this.$el.html(this.template({ phone: this.model }));
		this.populateTypes();
		return this;
	},
	
	populateTypes: function() {
		var select = this.$el.find('.phone-type');
		_.each(this.model.kinds, function(kind) {
		  $(select).append('<option>' + kind + '</option>');
		});
		$(select).val(this.model.get('kind'));
	},
	
	addPhone: function(e) {
	  var fields;
	  e.preventDefault();
	  e.stopPropagation();
	  $(e.target).remove();
	  fields = new Everybody.Views.Phone({ model: new Everybody.Models.Phone() });
	  this.$el.append(fields.render().el);
	}
});
