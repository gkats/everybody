class Everybody.Views.ContactItem extends Support.CompositeView
  template: JST['contacts/item']

  tagName: 'li'

  render: ->
    @$el.html(@template(contact: @model))
    @$('a.contact-edit').attr('href', @contactUrl())
    this

  contactUrl: ->
    "/contacts/#{@model.get('id')}/edit"
