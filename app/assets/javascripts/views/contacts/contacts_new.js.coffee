class Everybody.Views.ContactsNew extends Support.CompositeView
  template: JST['contacts/new']
  model: new Everybody.Models.Contact()

  render: ->
    @renderLayout()
    @renderContactForm()
    this

  renderLayout: ->
    @$el.html(@template())

  renderContactForm: ->
    form = new Everybody.Views.ContactForm(model: @model)
    container = @$('#new_contact')
    @renderChildInto(form, container)
