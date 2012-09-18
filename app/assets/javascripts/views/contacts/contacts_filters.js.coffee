class Everybody.Views.ContactsFilters extends Support.CompositeView
  template: JST['contacts/filters']

  render: ->
    @$('#filters select[name=group]').append($('<option>', text: 'all', value: 'all'))
    for group in _.uniq(@collection.map((model) -> model.escape('group')))
      @$('#filters select[name=group]').append($('<option>', text: group, value: group))
    this
