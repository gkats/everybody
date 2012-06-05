Everybody.Views.ContactsIndex = Backbone.View.extend({
  template: JST['contacts/index'],
  
  events: {
    'submit #new_contact': 'createContact',
    'click #add_contact a': 'showForm',
    'click #new_contact_cancel': 'hideForm',
    'change #filter select': 'setFilter'
  },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.appendContact, this);
    this.on('change:filterGroup', this.filterByGroup, this); 
  },
  
  render: function() {
    $(this.el).html(this.template());
    this.collection.models.forEach(this.appendContact.bind(this));
    this.createFilterOptions($(this.el).find('#filter select'));
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
  },
  
  hideForm: function(e) {
    $('#new_contact')[0].reset();
    $('#new_contact').slideUp();
  },
  
  createFilterOptions: function(select) {
    var option;
      
    _.each(this.getGroups(), function(item) {
      if (item) {
        option = $('<option/>', {
          value: item,
          text: item
        });
        $(select).append(option);
      }
    });
    
    this.filterGroup = this.filterGroup || 'all';
    $(select).val(this.filterGroup);
  },
  
  getGroups: function() {
    return _.uniq(_.pluck($('#content').data('contacts'), 'group'), 
      false, function(group) {
        if (group) {
          return group.toLowerCase();
        }
      }
    );
  },
  
  setFilter: function(e) {
    this.filterGroup = e.currentTarget.value;
    this.trigger('change:filterGroup');
  },
  
  filterByGroup: function() {
    if (this.filterGroup === 'all') {
      this.collection.reset($('#content').data('contacts'));
      Backbone.history.navigate('', true);
    }
    else {
      this.collection.reset($('#content').data('contacts'), { silent: true });
      var filterGroup = this.filterGroup,
        filtered = _.filter(this.collection.models, function(item) {
          return item.get('group') === filterGroup; 
        });
      this.collection.reset(filtered);
      Backbone.history.navigate('contacts/group/' + filterGroup, true);
    }
  }
});
