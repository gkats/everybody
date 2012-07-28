class Everybody.Models.Contact extends Backbone.Model
  defaults:
    group: 'none',
    address: '',
    notes: ''

  urlRoot: '/contacts'

  validate: (attrs) ->
    if !attrs.name || attrs.name.replace(/\s*/, '').length == 0
      'Name can\'t be blank'
