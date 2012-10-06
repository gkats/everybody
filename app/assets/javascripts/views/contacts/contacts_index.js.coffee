class Everybody.Views.ContactsIndex extends Support.CompositeView
  template: JST['contacts/index']

  events:
    'change #filters select': 'filter'

  render: ->
    @$el.html(@template())
    contacts = if @filteredCollection then @filteredCollection else @collection
    if contacts.length
      @$('.contacts-empty').hide()
      @$('#filters select[name=group]').append($('<option>', text: 'all', value: 'all'))
      for group in _.uniq(@collection.map((model) -> model.escape('group')))
        @$('#filters select[name=group]').append($('<option>', text: group, value: group))
      setFilterValue(contacts)

      contacts.each(@appendContact)
    this

  appendContact: (contact) =>
    view = new Everybody.Views.ContactItem(model: contact)
    @$('#contacts_list').append(view.render().el)

  filter: ->
    filterValue = @$('#filters select[name=group]').val()
    if filterValue == 'all'
      @filteredCollection = null
    else
      @filteredCollection = @collection.byGroup(filterValue)
    @render()

  setFilterValue = (contacts) ->
    group = contacts.first().get('group')
    contacts.each((contact) ->
      group = 'all' if group != contact.get('group')
    )
    @$('#filters select[name=group]').val(group)
