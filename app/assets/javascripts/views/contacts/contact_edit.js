Everybody.Views.ContactEdit = Backbone.View.extend({
  template: JST['contacts/edit'],
  
  initialize: function() {
  },
  
  render: function() {
    $(this.el).html(this.template({ contact: this.model }));
    return this;
  }
});
