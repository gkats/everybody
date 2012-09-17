class Everybody.Views.ContactsIndex extends Support.CompositeView
  template: JST['contacts/index']

  events:
    'change #filters select': 'filter'

  render: ->
    @$el.html(@template())
    if @collection.length
      @$('.contacts-empty').hide()
      @$('#filters select[name=group]').append($('<option>', text: 'all', value: 'all'))
      for group in _.uniq(@collection.map((model) -> model.escape('group')))
        @$('#filters select[name=group]').append($('<option>', text: group, value: group))

      @collection.each(@appendContact)
    this

  appendContact: (contact) =>
    view = new Everybody.Views.ContactItem(model: contact)
    @$('#contacts_list').append(view.render().el)

  filter: ->
    @collection.byGroup(@$('#filters select[name=group]').val())
