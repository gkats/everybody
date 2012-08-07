describe 'Contact Edit View', ->
  beforeEach ->
    @contact = new Backbone.Model(name: 'Homer Simpson', group: 'family')
    view = new Everybody.Views.ContactEdit(model: @contact)
    @$el = $(view.render().el)

  it 'should render an edit contact form', ->
    expect(@$el.find('.contact-form')).toExist()
    expect(@$el.find('input[name=group]').val()).toEqual(@contact.get('group'))
    expect(@$el.find('input[name=name]').val()).toEqual(@contact.get('name'))

  it 'should provide save and cancel buttons', ->
    expect(@$el.find('.contact-form input[type=submit]').val()).toEqual 'Save'
    expect(@$el.find('a').text()).toEqual 'Cancel'
