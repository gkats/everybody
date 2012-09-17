class Everybody.Models.Contact extends Backbone.Model
  defaults:
    group: 'none',
    address: '',
    notes: ''

  urlRoot: '/api/contacts'

  validate: (attrs) ->
    if !attrs.name || attrs.name.replace(/\s*/, '').length == 0
      'Name can\'t be blank'

  byGroup: (group) ->
    group == 'all' || @get('group') == group
