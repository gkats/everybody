Everybody.Views.ContactsIndex = Backbone.View.extend({
  template: JST['contacts/index'],
  
  events: {
    'submit #new_contact': 'createContact'
  },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.appendContact, this); 
  },
  
  render: function() {
    $(this.el).html(this.template());
    this.collection.models.forEach(this.appendContact.bind(this));
    return this;
  },
  
  appendContact: function(contact) {
    var view = new Everybody.Views.Contact({ model: contact });
    this.$('#contacts_list').append(view.render().el);
  },
  
  createContact: function(e) {
    e.preventDefault();
    var attributes = { name: $('#new_contact_name').val() };
    this.collection.create(attributes, {
      // set wait to true if there is no client-side validation
      //wait: true,
      success: function() {
        $('#new_contact')[0].reset();
      },
      error: this.handleError
    });
  },
  
  handleError: function(contact, response) {
    if (response.status == 422) {
      var errors = $.parseJSON(response.responseText).errors;
      //TODO fixme
      alert(errors[0]);
    }
  }
});
