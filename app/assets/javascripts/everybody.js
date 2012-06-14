window.Everybody = {
  Models: { },
  Collections: { },
  Routers: { },
  Views: { },
  Helpers: { },
  init: function() {
    this.vent = _.extend({}, Backbone.Events);
    new Everybody.Routers.Contacts();
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready(function() {
  Everybody.init();
});
