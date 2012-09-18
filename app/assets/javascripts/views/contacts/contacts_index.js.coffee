class Everybody.Views.ContactsIndex extends Support.CompositeView
  template: JST['contacts/index']

  render: ->
    @renderLayout()
    @renderContacts()
    @renderFilters()
    this

  renderLayout: ->
    @$el.html(@template())

  renderContacts: ->
    list = new Everybody.Views.ContactsList(collection: @collection)
    @renderChildInto(list, @$('#contacts_list'))

  renderFilters: ->
    filters = new Everybody.Views.ContactsFilters(collection: @collection)
    @renderChildInto(filters, @$('#filters'))
