Everybody.Views.ContactsFilter = Backbone.View.extend({
	template: JST['contacts/filter'],
	
	render: function() {
		this.$el.html(this.template());
		this.createFilterOptions();
		return this;
	},
	
	createFilterOptions: function() {
		var option, select;
		
		select = this.$el.find('select');
    $(select).html('<option>all</option>');
    _.each(this.options, function(item) {
      if (item) {
        option = $('<option/>', {
          value: item,
          text: item
        });
        $(select).append(option);
      }
    });
	}
});