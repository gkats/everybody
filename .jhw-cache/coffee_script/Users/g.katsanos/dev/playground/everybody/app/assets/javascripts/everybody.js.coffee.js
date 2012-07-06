(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Everybody = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
      new Everybody.Routers.ContactsRouter();
      return Backbone.history.start({
        pushState: true
      });
    }
  };

}).call(this);
