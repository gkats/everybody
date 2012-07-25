describe 'Contact Item View', ->
  it 'renders a contact', ->
    contact = new Backbone.Model(name: 'John Doe')
    view = new Everybody.Views.ContactItem(model: contact)
    $el = $(view.render().el)
    expect($el).toHaveText(/John Doe/)
