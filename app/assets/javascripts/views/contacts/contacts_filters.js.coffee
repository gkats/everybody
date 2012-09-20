class Everybody.Views.ContactsFilters extends Support.CompositeView
  template: JST['contacts/filters']

  render: ->
    @$el.html(@template())
    @$('select[name=group]').append($('<option>', text: 'all', value: 'all'))
    for group in _.uniq(@collection.map((model) -> model.escape('group')))
      @$('select[name=group]').append($('<option>', text: group, value: group))
    this
