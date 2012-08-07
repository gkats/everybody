class Everybody.Views.ContactItem extends Support.CompositeView
  template: JST['contacts/item']

  tagName: 'li'

  events:
    'click a.contact-delete': 'removeContact'

  render: ->
    @$el.html(@template(contact: @model))
    @$('a.contact-edit').attr('href', @contactEditUrl())
    this

  contactEditUrl: ->
    "/contacts/#{@model.get('id')}/edit"

  removeContact: ->
    @model.destroy(
      wait: true
      success: =>
        @leave()
    )
