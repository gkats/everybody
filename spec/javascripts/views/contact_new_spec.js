describe('New contact view', function() {
  beforeEach(function() {
		$(document.body).append('<section id="notice"/>');
	});
	
	var view = new Everybody.Views.ContactNew({
	  model: new Everybody.Views.Contact()
	});
	
	it('should render a form', function() {
	  view.render();
	  expect(view.$el.find('form.contact-form').attr('class')).toEqual('contact-form');
	  expect(view.$el.find('form.contact-form #name').val()).toEqual('');
	});
});
