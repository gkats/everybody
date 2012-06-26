Everybody.Routers.Contacts = Backbone.Router.extend({
  routes: {
    '': 'index',
    'contacts/new': 'new',
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
  
  new: function() {
    this.newView = new Everybody.Views.ContactNew({
      model: new Everybody.Models.Contact(),
			collection: this.contacts
    });
    $('#content').html(this.newView.render().el);
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
