class Everybody.Views.ContactItem extends Backbone.View
  template: JST['contacts/item']

  tagName: 'li'

  render: ->
    @$el.html(@template(contact: @model))
    this
