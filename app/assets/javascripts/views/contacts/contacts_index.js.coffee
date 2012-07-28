class Everybody.Views.ContactsIndex extends Support.CompositeView
  template: JST['contacts/index']

  render: ->
    @$el.html(@template())
    if @collection.length
      @$el.find('.contacts-empty').hide()
      @collection.each(@appendContact)
    this

  appendContact: (contact) =>
    view = new Everybody.Views.ContactItem(model: contact)
    @$('#contacts_list').append(view.render().el)
