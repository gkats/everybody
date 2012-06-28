Everybody.Views.Phone = Backbone.View.extend({
	template: JST['phones/fields'],
	
	render: function() {
		this.$el.html(this.template({ phone: this.model }));
		this.populateTypes();
		return this;
	},
	
	populateTypes: function() {
		var select = this.$el.find('.phone-type');
		$(select).append('<option>Mobile</option>');
	}
});