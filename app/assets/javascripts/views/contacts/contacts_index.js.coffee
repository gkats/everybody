class Everybody.Views.ContactsIndex extends Support.CompositeView
  template: JST['contacts/index']

  render: ->
    @renderLayout()
    @renderContacts(@collection)
    @renderFilters()
    this

  renderLayout: ->
    @$el.html(@template())

  renderContacts: (contacts) ->
    list = new Everybody.Views.ContactsList(collection: contacts)
    @renderChildInto(list, @$('#contacts_list'))

  renderFilters: ->
    filters = new Everybody.Views.ContactsFilters(collection: @collection)
    filters.on('filters:changed', @filter)
    @renderChildInto(filters, @$('#filters'))

  filter: (data) =>
    @renderContacts(data.collection)
