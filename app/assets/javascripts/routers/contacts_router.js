Everybody.Routers.Contacts = Backbone.Router.extend({
  routes: {
    '': 'index',
    'contacts/:id/edit': 'edit'
  },
  
  initialize: function() {
    this.contacts = new Everybody.Collections.Contacts();
    this.contacts.fetch();
  },  
  
  index: function() {
    var view = new Everybody.Views.ContactsIndex({ collection: this.contacts });
    $('#content').html(view.render().el);
  },
  
  edit: function(id) {
    alert('Contact ' + id);
  }
});
