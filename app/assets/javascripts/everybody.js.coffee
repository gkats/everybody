root = exports ? this

root.Everybody =
  Models: { }
  Collections: { }
  Views: { }
  Routers: { }
  initialize: ->
    new Everybody.Routers.ContactsRouter()
    Backbone.history.start({ pushState: true });

#$(document).ready ->
#  Everybody.initialize()
