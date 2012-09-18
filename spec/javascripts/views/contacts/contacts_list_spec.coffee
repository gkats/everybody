describe 'Contacts List View', ->
  it 'renders a collection of contacts', ->
    contacts = new Everybody.Collections.Contacts()
    contacts.reset([{ name: 'Homer Simpson' }, { name: 'Lisa Simpson' }])
    view = new Everybody.Views.ContactsList({ collection: contacts })
    $el = $(view.render().el)
    expect($el).toHaveText(/Homer Simpson/)
    expect($el).toHaveText(/Lisa Simpson/)