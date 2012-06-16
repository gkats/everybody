Everybody.Views.Contact = Backbone.View.extend({
  template: JST['contacts/contact'],
  tagName: 'li',
  
  events: {
    'click .edit': 'editContact',
    'click .delete': 'deleteContact'
  },
  
  render: function() {
    this.$el.html(this.template({ contact: this.model }));
    return this;
  },
  
  editContact: function(e) {
    Backbone.history.navigate('contacts/' + this.model.get('id') + '/edit', 
      true);
  },
  
  deleteContact: function(e) {
    var self = this;
    
    this.model.destroy({
      success: function() {
        Everybody.Helpers.NotificationHandler.notify('Contact successfully deleted');
        self.remove();
        Everybody.vent.trigger('change:contacts');
      },
      error: Everybody.Helpers.ErrorHandler.handleError
    });
  }
});
