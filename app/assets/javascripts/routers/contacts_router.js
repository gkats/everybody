Everybody.Routers.Contacts = Backbone.Router.extend({
  routes: {
    '': 'index',
    'contacts/:id/edit': 'edit',
    'contacts/group/:group': 'group'
  },
  
  initialize: function() {
    this.contacts = new Everybody.Collections.Contacts();
    this.contacts.fetch();
  },  
  
  index: function() {
    this.indexView = new Everybody.Views.ContactsIndex({
      collection: this.contacts
    });
    $('#content').html(this.indexView.render().el);
  },
  
  edit: function(id) {
    this.editView = new Everybody.Views.ContactEdit({
      model: this.contacts.find(function(item) {
        return item.get('id') == id;
      })
    });
    $('#content').html(this.editView.render().el);
  },
  
  group: function(group) {
    if (!this.indexView) {
      this.index();
    }
    this.indexView.filterGroup = group;
    this.indexView.$el.find('#filter select').val(group);
    Everybody.vent.trigger('change:filterGroup');
  }
});
