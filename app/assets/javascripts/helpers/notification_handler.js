Everybody.Helpers.NotificationHandler = { 
  notice: $('#notice'),
  
  notify: function(message) {
    $(notice).html(message);
  },
  
  clear: function() {
    $(notice).html('');
  }
};

