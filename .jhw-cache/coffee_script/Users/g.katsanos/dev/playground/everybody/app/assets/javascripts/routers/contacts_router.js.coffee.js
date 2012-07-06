(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Everybody.Routers.ContactsRouter = (function(_super) {

    __extends(ContactsRouter, _super);

    function ContactsRouter() {
      return ContactsRouter.__super__.constructor.apply(this, arguments);
    }

    return ContactsRouter;

  })(Backbone.Router);

}).call(this);
