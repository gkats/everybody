Everybody.Views.ContactsIndex = Backbone.View.extend({
  template: JST['contacts/index'],
  
  render: function() {
    this.$el.html(this.template({ contacts: 'Contacts go here' }));
    return this;
  }
});
