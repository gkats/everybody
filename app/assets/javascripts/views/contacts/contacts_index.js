Everybody.Views.ContactsIndex = Backbone.View.extend({
  template: JST['contacts/index'],
  
  events: {
    'submit #new_contact': 'createContact',
    'click #add_contact a': 'showForm'
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
    var attributes = { name: $('#name').val() };
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
    // Client side validation
    if (!response.status) {
      alert(response);
    }
    // Server side validation
    else if (response.status == 422) {
      var errors = $.parseJSON(response.responseText).errors;
      for (attribute in errors) {
        var messages = errors[attribute];
        for (var i = 0, len = messages.length; i < len; i++) {
          message = messages[i];
          attrName = "" + attribute;
          alert(Everybody.Helpers.StringUtils.capitalize("" + attribute) 
            + " " + message);
        }
      }
    }
  },
  
  showForm: function(e) {
    $(this.el).find('#new_contact').slideDown();
  }
});
