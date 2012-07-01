Everybody.Views.ContactEdit = Backbone.View.extend({
  template: JST['contacts/edit'],
  form: JST['contacts/form'],
  
  events: {
    'submit form': 'updateContact'
  },
  
  initialize: function() {
    Everybody.Helpers.NotificationHandler.clear();
    this.model.phones.on('reset', this.renderPhones, this);
  },
  
  render: function() {
    this.model.phones.fetch();
    $(this.el).html(this.template());
    $(this.el).find('#contact_form').html(this.form({ contact: this.model }));
    return this;
  },
  
  renderPhones: function() {
    var phoneView,
      self = this;
    
    if (this.model.phones.length > 0) {
      this.model.phones.each(function(phone) {
        phoneView = new Everybody.Views.Phone({ model: phone });
        self.$el.find('#phone_fields').append(phoneView.render().el);
      });
    }
    else {
      phoneView = new Everybody.Views.Phone({ 
        model: new Everybody.Models.Phone() 
      });
      self.$el.find('#phone_fields').append(phoneView.render().el);
    }
  },
  
  updateContact: function(e) {
    e.preventDefault();
    
    this.model.set('name', $(this.el).find('#name').val());
    this.model.set('group', $(this.el).find('#group').val());
    var phoneFieldDivs = this.$el.find('#phone_fields div');
    for (var i = 0; i <  phoneFieldDivs.length; i++) {
      if (i < this.model.phones.length) {
        this.model.phones.at(i).set('kind', $(phoneFieldDivs[i]).find('.phone-type').val());
        this.model.phones.at(i).set('number', $(phoneFieldDivs[i]).find('.phone-number').val());
      }
      else {
        this.model.phones.add(new Everybody.Models.Phone({
          kind: $(phoneFieldDivs[i]).find('.phone-type').val(),
          number: $(phoneFieldDivs[i]).find('.phone-number').val()
        }));
      }
    }
    
    this.model.save({}, {
      success: function() {
        Everybody.Helpers.NotificationHandler.notify('Contact successfully updated');
        Backbone.history.navigate('/', true);
      },
      error: Everybody.Helpers.ErrorHandler.handleError
    });
  }
});
