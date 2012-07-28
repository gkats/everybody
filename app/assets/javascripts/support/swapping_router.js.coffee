class Support.SwappingRouter extends Backbone.Router
  constructor: (options) ->
    Backbone.Router.apply(@, [options])

  swap: (newView) ->
    @currentView.leave() if @currentView && @currentView.leave
    @currentView = newView
    @currentView.render()
    @$el.empty().append(@currentView.el)
