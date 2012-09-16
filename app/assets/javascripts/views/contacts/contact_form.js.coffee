class Everybody.Views.ContactForm extends Support.CompositeView
  template: JST['contacts/form']

  events:
    'submit': 'save'

  render: ->
    @$el.html(@template(contact: @model))
    @$('input[name=name]').focus()
    this

  save: (e) ->
    e.preventDefault()
    if setModelAttributes.call(this)
      @model.save({ }, {
        wait: true
        success: => saved.call(this)
        error: =>
      })
    else
      # error
    false

  setModelAttributes = ->
    @model.set(
      name: @$('input[name=name]').val()
      group: @$('input[name=group]').val()
      address: @$('textarea[name=address]').val()
      notes: @$('textarea[name=notes]').val()
    )

  saved = ->
    @collection.add(@model) if @collection
    Backbone.history.navigate('/', true)
