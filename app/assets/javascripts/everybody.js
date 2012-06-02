window.Everybody = {
  Models: { },
  Collections: { },
  Routers: { },
  Views: { },
  Helpers: { },
  init: function() {
    new Everybody.Routers.Contacts();
    Backbone.history.start({ pushState: true });
  }
};

$(document).ready(function() {
  Everybody.init();
});
