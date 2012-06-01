window.Everybody = {
  Models: { },
  Collections: { },
  Routers: { },
  Views: { },
  init: function() {
    new Everybody.Routers.Contacts();
    Backbone.history.start();
  }
};

$(document).ready(function() {
  Everybody.init();
});
