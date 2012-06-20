describe('Contact view', function() {
	var contact = new Everybody.Models.Contact({ name: 'John Doe', group: 'family' }), 
		view = new Everybody.Views.Contact({ model: contact });
	
	it('should at least display contact name', function() {
		view.render();
		expect(view.$el.html()).toContain('John Doe');
	});
	
	it('should provide edit and delete buttons', function() {
		view.render();
		expect(view.$el.find('button.edit')).toBeDefined();
		expect(view.$el.find('button.delete')).toBeDefined();
	});
 })