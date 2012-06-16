Everybody.Collections.Contacts = Backbone.Collection.extend({
  url: '/api/contacts',
  model: Everybody.Models.Contact,
  comparator: function(contact) {
    return contact.get('name');
  }
});
