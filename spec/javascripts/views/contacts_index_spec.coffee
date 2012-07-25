describe 'Contacts Index View', ->
  it 'renders a collection of contacts', ->
    contacts = new Everybody.Collections.Contacts()
    contacts.reset([
      { name: 'John Doe' },
      { name: 'Jack Daniels' }
    ])
    view = new Everybody.Views.ContactsIndex({ collection: contacts })
    $el = $(view.render().el)
    expect($el).toHaveText(/John Doe/)
    expect($el).toHaveText(/Jack Daniels/)
