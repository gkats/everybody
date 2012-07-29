class Everybody.Views.ContactEdit extends Support.CompositeView
  template: JST['contacts/edit']

  render: ->
    @renderLayout()
    @renderContactForm()
    this

  renderLayout: ->
    @$el.html(@template())

  renderContactForm: ->
    form = new Everybody.Views.ContactForm(model: @model)
    container = @$('#edit_contact')
    @renderChildInto(form, container)
