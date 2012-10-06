class Everybody.Views.ContactsList extends Support.CompositeView
  template: JST['contacts/list']

  render: ->
    @$el.html(@template())
    if @collection.length
      @$('.contacts-empty').hide()
      @collection.each(@appendContact)
    this

  appendContact: (contact) =>
    view = new Everybody.Views.ContactItem(model: contact)
    @$('ul.contacts-list').append(view.render().el)

  rerender: (data) ->
    @collection = data.collection
    @render()
