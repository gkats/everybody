describe 'Contact form view', ->
  beforeEach ->
    @model = new Backbone.Model()
    @model.urlRoot = '/foo'
    collection = new Backbone.Collection()
    @view = new Everybody.Views.ContactForm(model: @model, collection: collection)
    @$el = $(@view.render().el)
    spyOn(@view.model, 'save')

  it 'tries to save model when submitted', ->
    @$el.find('form').submit()
    expect(@view.model.save).toHaveBeenCalled()

  it 'maps contact attributes when submitted', ->
    fill_in_valid_data.call(this)
    @$el.find('form').submit()
    expect(@view.model.get('name')).toEqual 'Homer Simpson'
    expect(@view.model.get('group')).toEqual 'family'
    expect(@view.model.get('address')).toEqual '742 Evergreen Terrace'
    expect(@view.model.get('notes')).toEqual 'D\'oh'

  fill_in_valid_data = ->
    @view.$('input[name=name]').val('Homer Simpson')
    @view.$('input[name=group]').val('family')
    @view.$('textarea[name=address]').val('742 Evergreen Terrace')
    @view.$('textarea[name=notes]').val('D\'oh')
