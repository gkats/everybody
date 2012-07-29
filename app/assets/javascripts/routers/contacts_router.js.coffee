class Everybody.Routers.Contacts extends Support.SwappingRouter
  routes:
    '': 'index'
    'contacts/new': 'newContact'
    'contacts/:id/edit': 'edit'

  initialize: (options) ->
    @collection = options.collection
    @el = '#contacts'

  index: ->
    view = new Everybody.Views.ContactsIndex(collection: @collection)
    @swap(view)

  newContact: ->
    view = new Everybody.Views.ContactsNew()
    @swap(view)

  edit: (id) ->
    view = new Everybody.Views.ContactEdit(model: @collection.get(id))
    @swap(view)
