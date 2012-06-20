describe('Contact edit view', function() {
	beforeEach(function() {
		$(document.body).append('<section id="notice"/>');
	});
	
	var view = new Everybody.Views.ContactEdit({ 
		model: new Everybody.Models.Contact({ name: 'John Doe', group: 'family' })
	});
	
	it('should render a form', function() {
		view.render();
		expect(view.$el.find('form.contact-form').attr('class')).toEqual('contact-form');
	});
});