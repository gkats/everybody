Everybody.Views.Phone = Backbone.View.extend({
	template: JST['phones/fields'],
	
	events: {
	  'click .add-phone': 'addPhone',
		'click .remove-phone': 'removePhone'
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
	  $(e.target).toggle();
	  fields = new Everybody.Views.Phone({ model: new Everybody.Models.Phone() });
		fields.render().$el.append('<a href="" class="remove-phone">x</a>');
	  this.$el.parent().append(fields.el);
	},
	
	removePhone: function(e) {
		var addLinks, phonesDiv, visibleLink = false;

		e.preventDefault();
		e.stopPropagation();
		phonesDiv = $(e.target).parent('div').parent();
		$(e.target).parent('div').remove();
		// Make sure at least one add-phone link is displayed
		$(phonesDiv).find('.add-phone').each(function(index, addLink) {
			if (!$(addLink).attr('style').match(/display: none/)) {
				visibleLink = true;
			}
		});
		if (!visibleLink) {
			$(phonesDiv).find('.add-phone:last').toggle();
		}
	}
});
