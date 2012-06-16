Everybody.Views.ContactEdit = Backbone.View.extend({
  template: JST['contacts/edit'],
  
  events: {
    'submit form': 'updateContact'
  },
  
  initialize: function() {
    Everybody.Helpers.NotificationHandler.clear();
  },
  
  render: function() {
    $(this.el).html(this.template({ contact: this.model }));
    return this;
  },
  
  updateContact: function(e) {
    e.preventDefault();
    var attributes = { 
      name: $(this.el).find('#name').val(),
      group: $(this.el).find('#group').val() 
    };
    this.model.save(attributes, {
      success: function() {
        Everybody.Helpers.NotificationHandler.notify('Contact successfully updated');
        Backbone.history.navigate('/', true);
      },
      error: Everybody.Helpers.ErrorHandler.handleError
    });
  }
});
