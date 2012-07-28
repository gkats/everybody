describe 'Everybody App', ->
  it 'has a namespace for Models', ->
    expect(Everybody.Models).toBeTruthy()

  it 'has a namespace for Collections', ->
    expect(Everybody.Collections).toBeTruthy()

  it 'has a namespace for Views', ->
    expect(Everybody.Views).toBeTruthy()

  it 'has a namespace for Routers', ->
    expect(Everybody.Routers).toBeTruthy()

  describe 'initialization', ->
    it 'instantiates a collection out of received data', ->
      data = { contacts: [{ name: 'Homer Simpson' }, { name: 'Lisa Simpson' }] }
      Everybody.initialize(data)
      expect(Everybody.contacts).not.toBe(undefined)
      expect(Everybody.contacts.length).toEqual(2)
      expect(Everybody.contacts.models[0].get('name')).toEqual('Homer Simpson')
      expect(Everybody.contacts.models[1].get('name')).toEqual('Lisa Simpson')

    it 'instantiates a Contacts router', ->
      spyOn(Everybody.Routers, 'Contacts')
      Everybody.initialize({})
      expect(Everybody.Routers.Contacts).toHaveBeenCalled()

    it 'starts Backbone.history', ->
      Backbone.history.started = null
      Backbone.history.stop()
      spyOn(Backbone.history, 'start')
      Everybody.initialize({})
      expect(Backbone.history.start).toHaveBeenCalled()
