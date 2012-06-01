Everybody.Views.Contact = Backbone.View.extend({
  template: JST['contacts/contact'],
  tagName: 'li',
  
  events: {
    'click': 'showContact'
  },
  
  render: function() {
    this.$el.html(this.template({ contact: this.model }));
    return this;
  },
  
  showContact: function(e) {
    Backbone.history.navigate('contacts/' + this.model.get('id'), true);
  }
});
