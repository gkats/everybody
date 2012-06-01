Everybody.Routers.Contacts = Backbone.Router.extend({
  routes: {
    '': 'index',
    'contacts/:id': 'show'
  },
  
  index: function() {
    view = new Everybody.Views.ContactsIndex();
    $('#contactsList').html(view.render().el);
  },
  
  show: function(id) {
    alert('Contact ' + id);
  }
});
