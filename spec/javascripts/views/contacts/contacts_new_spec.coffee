describe 'Contacts New View', ->
  beforeEach ->
    view = new Everybody.Views.ContactsNew()
    @$el = $(view.render().el)

  it 'should render a new contact form', ->
    expect(@$el.find('.contact-form')).toExist()
    expect(@$el.find('input[name=group]').val()).toEqual('none')
    for input in @$el.find('input[type!=submit][name!=group]')
      expect($(input).val()).toEqual ''

  it 'should provide save and cancel buttons', ->
    expect(@$el.find('.contact-form input[type=submit]').val()).toEqual 'Save'
    expect(@$el.find('a').text()).toEqual 'Cancel'
