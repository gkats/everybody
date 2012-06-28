Everybody.Helpers.ErrorHandler = {
  handleError: function(model, response) {
    // Client side validation
    if (!response.status) {
      Everybody.Helpers.NotificationHandler.notify(response);
    }
    // Server side validation
    else if (response.status == 422) {
      var errors = $.parseJSON(response.responseText).errors,
        notices = '';
      for (attribute in errors) {
        var messages = errors[attribute];
        for (var i = 0, len = messages.length; i < len; i++) {
          message = messages[i];
          attrName = "" + attribute;
          notices += Everybody.Helpers.StringUtils.capitalize(
            attrName.substr(attrName.indexOf('.') + 1)) + " " + message + " ";
        }
      }
      Everybody.Helpers.NotificationHandler.notify(notices);
    }
  }
};
