describe 'Contacts Index View', ->
  it 'renders a list', ->
    contacts = new Everybody.Collections.Contacts()
    contacts.reset([{ name: 'Homer Simpson' }, { name: 'Lisa Simpson' }])
    view = new Everybody.Views.ContactsIndex({ collection: contacts })
    $el = $(view.render().el)
    expect($el.find('#contacts_list li')).toBeVisible()

  it 'renders filters', ->
    contacts = new Everybody.Collections.Contacts()
    contacts.reset([{ group: 'family' }, { group: 'friends' }])
    view = new Everybody.Views.ContactsIndex(contacts)
    $el = $(view.render().el)
    expect($el.find('#filters select option').size()).toEqual(3)