Everybody.Views.ContactsFilter = Backbone.View.extend({
  template: JST['contacts/filter'],

  initialize: function() {
    Everybody.vent.on('change:filter', this.render, this);
  },
  
  render: function() {
    this.$el.html(this.template());
    this.createFilterOptions();
    return this;
  },

  createFilterOptions: function() {
    var select;
    select = this.$el.find('select');
    $(select).html('<option>all</option>');
    _.each(_.sortBy(_.flatten(this.options), function(item) {
      if (item) {
        $(select).append($('<option/>', {
          value: item,
          text: item
        }));
      }
    });
  }
});
