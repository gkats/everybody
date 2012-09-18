class Everybody.Views.ContactsList extends Support.CompositeView
  template: JST['contacts/list']

  render: ->
    if @collection.length
      @$('.contacts-empty').hide()
      @collection.each(@appendContact)
    this

  appendContact: (contact) =>
    view = new Everybody.Views.ContactItem(model: contact)
    @$('#contacts_list ul').append(view.render().el)