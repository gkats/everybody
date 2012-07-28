root = exports ? this

root.Everybody =
  Models: { }
  Collections: { }
  Views: { }
  Routers: { }

  initialize: (data) ->
    @contacts = new Everybody.Collections.Contacts(data.contacts)
    new Everybody.Routers.Contacts(collection: @contacts)

    unless (Backbone.history.started)
      Backbone.history.start({ pushState: true })
      Backbone.history.started = true
