class Everybody.Views.ContactsFilters extends Support.CompositeView
  template: JST['contacts/filters']

  events:
    'change select': 'filter'

  render: ->
    @$el.html(@template())
    @$('select[name=group]').append($('<option>', text: 'all', value: 'all'))
    for group in _.uniq(@collection.map((model) -> model.escape('group')))
      @$('select[name=group]').append($('<option>', text: group, value: group))
    setFilterValue.call(@)
    this

  setFilterValue = ->
    group = @collection.first().get('group')
    @collection.each((contact) ->
      group = 'all' if group != contact.get('group')
    )
    @$('select[name=group]').val(group)

  filter: ->
    filterValue = @$('select[name=group]').val()
    if filterValue != 'all'
      filteredCollection = @collection.byGroup(filterValue)
    @trigger('filters:changed', { collection: filteredCollection || @collection })
