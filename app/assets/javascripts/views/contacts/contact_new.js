Everybody.Views.ContactNew = Backbone.View.extend({
  template: JST['contacts/new'],
  form: JST['contacts/form'],
  
  events: {
    'submit form': 'createContact'
  },
  
  initialize: function() {
    Everybody.Helpers.NotificationHandler.clear();
  },
  
  render: function() {
    this.$el.html(this.template());
    this.$el.find('#contact_form').html(this.form({ contact: this.model }));
		this.renderPhone();
    return this;
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
        Everybody.Helpers.NotificationHandler.notify('Contact successfully created');
        Everybody.vent.trigger('change:contacts');
				Backbone.history.navigate('/', true);
      },
      error: Everybody.Helpers.ErrorHandler.handleError
    });
  },

	renderPhone: function() {
		var phoneView = new Everybody.Views.Phone({ model: new Everybody.Models.Phone() });
		this.$el.find('#phone_fields').append(phoneView.render().el);
	}
});
