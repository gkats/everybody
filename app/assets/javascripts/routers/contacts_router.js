Everybody.Routers.Contacts = Backbone.Router.extend({
  routes: {
    '': 'index',
    'contacts/:id/edit': 'edit',
    'contacts/group/:group': 'group'
  },
  
  initialize: function() {
    this.contacts = new Everybody.Collections.Contacts();
    this.contacts.reset($('#content').data('contacts'));
  },  
  
  index: function() {
    this.indexView = new Everybody.Views.ContactsIndex({ 
      collection: this.contacts 
    });
    $('#content').html(this.indexView.render().el);
  },
  
  edit: function(id) {
    alert('Contact ' + id);
  },
  
  group: function(group) {
    if (!this.indexView) {
      this.index();
    }
    this.indexView.filterGroup = group;
    this.indexView.trigger('change:filterGroup');
    this.indexView.$el.find('#filter select').val(group);
  }
});
