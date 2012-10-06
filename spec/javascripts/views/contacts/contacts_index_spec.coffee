describe 'Contacts Index View', ->
  beforeEach ->
    contacts = new Backbone.Collection([{ group: 'family' }, { group: 'friends' }])
    view = new Everybody.Views.ContactsIndex(collection: contacts)
    @$el = $(view.render().el)

  it 'renders a list', ->
    expect(@$el.find('#contacts_list li').size()).toEqual(2)

  it 'renders filters', ->
    expect(@$el.find('#filters select[name=group] option').size()).toEqual(3)