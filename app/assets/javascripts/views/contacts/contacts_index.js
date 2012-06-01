Everybody.Views.ContactsIndex = Backbone.View.extend({
  template: JST['contacts/index'],
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  
  render: function() {
    this.$el.html(this.template({ contacts: this.collection }));
    return this;
  }
});
