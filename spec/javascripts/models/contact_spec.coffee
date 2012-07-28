describe 'Contact', ->
  beforeEach ->
    @contact = new Everybody.Models.Contact(name: '')

  it 'has a default group value', ->
    expect(@contact.get('group')).toEqual('none')

  it 'validates presence of name', ->
    expect(@contact.isValid()).toBeFalsy()
    @contact.set('name', '    ')
    expect(@contact.isValid()).toBeFalsy()
    @contact.set('name', 'Homer Simpson')
    expect(@contact.isValid()).toBeTruthy()
