Everybody.Helpers.ErrorHandler = { };

Everybody.Helpers.ErrorHandler.handleError = function(response) {
  var notice = $('#notice');
  // Client side validation
  if (!response.status) {
    $(notice).html(response);
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
          "" + attribute) + " " + message + " ";
      }
    }
    $(notice).html(notices);
  }
};
