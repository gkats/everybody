Everybody.Views.ContactsIndex = Backbone.View.extend({
  template: JST['contacts/index'],
  
  events: {
    'submit #new_contact': 'createContact',
    'click #add_contact a': 'showForm',
    'click #new_contact_cancel': 'hideForm',
    'change #filter select': 'setFilter',
  },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.appendContact, this);
    Everybody.vent.on('change:contacts', this.createFilterOptions, this);
    Everybody.vent.on('change:filterGroup', this.filterByGroup, this);
  },
  
  render: function() {
    $(this.el).html(this.template());
    this.collection.models.forEach(this.appendContact.bind(this));
    this.createFilterOptions();
    return this;
  },
  
  appendContact: function(contact) {
    var view = new Everybody.Views.Contact({ model: contact });
    this.$('#contacts_list').append(view.render().el);
  },
  
  createContact: function(e) {
    e.preventDefault();
    var attributes = { 
      name: $(this.el).find('#name').val(),
      group: $(this.el).find('#group').val() 
    };
    this.collection.create(attributes, {
      // set wait to true if there is no client-side validation
      //wait: true,
      success: function() {
        $('#new_contact')[0].reset();
        $('#new_contact').slideUp();
        Everybody.Helpers.NotificationHandler.notify('Contact successfully created');
        Everybody.vent.trigger('change:contacts');
      },
      error: Everybody.Helpers.ErrorHandler.handleError
    });
  },

  showForm: function(e) {
    $(this.el).find('#new_contact').slideDown();
  },
  
  hideForm: function(e) {
    $('#new_contact')[0].reset();
    $('#new_contact').slideUp();
  },
  
  createFilterOptions: function() {
    var option,
      select = $(this.el).find('#filter select');
      
    $(select).html('<option>all</option>');
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
    return _.uniq(this.collection.pluck('group'), false, function(group) {
        if (group) {
          return group.toLowerCase();
        }
      }
    );
  },
  
  setFilter: function(e) {
    this.filterGroup = e.currentTarget.value;
    Everybody.vent.trigger('change:filterGroup');
  },
  
  filterByGroup: function() {
    if (this.filterGroup === 'all') {
      this.collection.fetch();
      Backbone.history.navigate('/', true);
    }
    else {
      var filterGroup = this.filterGroup,
        filtered = _.filter(this.collection.models, function(item) {
          return item.get('group') === filterGroup; 
        });
      this.collection.reset(filtered);
      Backbone.history.navigate('contacts/group/' + filterGroup, true);
    }
  }
});
