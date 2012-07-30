describe 'Contacts', ->
  beforeEach ->
    @collection = new Everybody.Collections.Contacts()

  it 'contains contacts', ->
    expect(@collection.model).toEqual(Everybody.Models.Contact)

  it 'is persisted at /api/contacts', ->
    expect(@collection.url).toEqual('/api/contacts');
