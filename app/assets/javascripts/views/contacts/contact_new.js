Everybody.Views.ContactNew = Backbone.View.extend({
  template: JST['contacts/new'],
  form: JST['contacts/form'],
  
  events: {
    'submit form': 'createContact'
  },
  
  initialize: function() {
    Everybody.Helpers.NotificationHandler.clear();
  },
  
  render: function() {
    this.$el.html(this.template());
    this.$el.find('#contact_form').html(this.form({
      contact: this.model
    }));
    return this;
  },
  
  createContact: function(e) {
    e.preventDefault();
    alert('Would create a contact');
  }
});
