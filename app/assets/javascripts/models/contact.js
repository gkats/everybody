Everybody.Models.Contact = Backbone.Model.extend({
  defaults: {
    group: 'none',
    address: '',
    notes: ''
  },
  
  validate: function(attrs) {
    if (!attrs.name || attrs.name.replace(/\s*/, '').length == 0) {
      return 'Name can"t be blank';
    }
  }
});
