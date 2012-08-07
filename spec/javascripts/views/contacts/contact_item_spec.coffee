describe 'Contact Item View', ->
  beforeEach ->
    @contact = new Backbone.Model(name: 'Homer Simpson')
    view = new Everybody.Views.ContactItem(model: @contact)
    @$el = $(view.render().el)

  it 'renders a contact', ->
    expect(@$el).toHaveText(/Homer Simpson/)

  it 'renders edit/delete links with the correct urls', ->
    expect(@$el).toHaveText(/Delete/)
    expect(@$el).toHaveText(/Edit/)
    expect(@$el.find('a.contact-edit').attr('href'))
      .toEqual("/contacts/#{@contact.get('id')}/edit")
