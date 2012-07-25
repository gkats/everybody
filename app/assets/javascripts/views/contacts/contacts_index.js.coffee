class Everybody.Views.ContactsIndex extends Backbone.View
  template: JST['contacts/index']

  render: ->
    @$el.html(@template())
    @collection.each(@appendContact)
    this

  appendContact: (contact) =>
    view = new Everybody.Views.ContactItem(model: contact)
    @$('#contacts_list').append(view.render().el)
