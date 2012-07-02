Everybody.Views.ContactsIndex = Backbone.View.extend({
  template: JST['contacts/index'],
  
  events: {
    'click #add_contact': 'newContact'
    //'change #filter select': 'setFilter'
  },
  
  initialize: function() {
		this.filterView = new Everybody.Views.ContactsFilter({
		  options: this.getGroups() 
		});
    this.collection.on('add', this.appendContact, this);
    Everybody.vent.on('change:contacts', this.updateFilterViewGroups, this);
    //Everybody.vent.on('change:filterGroup', this.filterByGroup, this);
  },
  
  render: function() {
    $(this.el).html(this.template());
		if (this.collection.length > 0) {
			this.$el.find('.contacts-empty').addClass('hide');
			this.collection.models.forEach(this.appendContact.bind(this));
		}
		else {
			this.$el.find('.contacts-empty').removeClass('hide');
		}
		this.$el.find('#filter').html(this.filterView.render().el);
    return this;
  },

  appendContact: function(contact) {
    var view = new Everybody.Views.Contact({ model: contact });
    this.$('#contacts_list').append(view.render().el);
  },
  
  newContact: function(e) {
    e.preventDefault();
    Backbone.history.navigate('contacts/new', true);
  },
  
  getGroups: function() {
    return _.uniq(this.collection.pluck('group'), false, function(group) {
      if (group) {
        return group.toLowerCase();
      }
    });
  },
  
  updateFilterViewGroups: function() {
    this.filterView.options = this.getGroups();
    Everybody.vent.trigger('change:filter');
  },
  
  setFilter: function(e) {
//    this.filterGroup = e.currentTarget.value;
//    Everybody.vent.trigger('change:filterGroup');
  },
  
  filterByGroup: function() {
//    if (this.filterGroup === 'all') {
//      this.collection.fetch();
//      Backbone.history.navigate('/', true);
//    }
//    else {
//      var filterGroup = this.filterGroup,
//        filtered = _.filter(this.collection.models, function(item) {
//          return item.get('group') === filterGroup; 
//        });
//      this.collection.reset(filtered);
//      Backbone.history.navigate('contacts/group/' + filterGroup, true);
//    }
  }
});
