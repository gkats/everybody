Everybody.Helpers.NotificationHandler = { 
  notify: function(message) {
		$('#notice').html(message);
  },
  
  clear: function() {
		$('#notice').html('');
  }
};

