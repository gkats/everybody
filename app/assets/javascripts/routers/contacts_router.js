Everybody.Routers.Contacts = Backbone.Router.extend({
  routes: {
    '': 'index',
    'contacts/:id': 'show'
  },
  
  initialize: function() {
    this.contacts = new Everybody.Collections.Contacts();
    this.contacts.fetch();
  },  
  
  index: function() {
    var view = new Everybody.Views.ContactsIndex({ collection: this.contacts });
    $('#contacts').html(view.render().el);
  },
  
  show: function(id) {
    alert('Contact ' + id);
  }
});
