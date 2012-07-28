class Everybody.Views.ContactForm extends Support.CompositeView
  template: JST['contacts/form']

  render: ->
    @$el.html(@template(contact: @model))
    this
