class Everybody.Routers.Contacts extends Support.SwappingRouter
  routes:
    '': 'index'

  initialize: (options) ->
    @collection = options.collection
    @el = '#contacts'

  index: ->
    view = new Everybody.Views.ContactsIndex(collection: @collection)
    @swap(view)
