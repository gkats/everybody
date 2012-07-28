class Support.CompositeView extends Backbone.View
  constructor: (options) ->
    @children = _([])
    Backbone.View.apply(@, [options])

  leave: ->
    @unbind()
    @remove()
    @_leaveChildren()
    @_removeFromParent()

  renderChild: (view) ->
    view.render()
    @children.push(view)
    view.parent = @

  appendChild: (view) ->
    @renderChild(view)
    $(@el).append(view.el)

  renderChildInto: (view, container) ->
    @renderChild(view)
    $(container).empty().append(view.el)

  _leaveChildren: ->
    view.leave() if view.leave for view in @children.chain().clone()

  _removeFromParent: ->
    @parent._removeChild(@) if @parent

  _removeChild: (view) ->
    @children.splice(@children.indexOf(view), 1)
