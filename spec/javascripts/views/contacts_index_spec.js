describe('Contacts index view', function() {
	var view = new Everybody.Views.ContactsIndex({
		collection: new Everybody.Collections.Contacts([
			new Everybody.Models.Contact({ name: 'John Doe', group: 'family' }),
			new Everybody.Models.Contact({ name: 'John Smith', group: 'friends' })
		])
	});
	
	it('should render add button', function() {
		view.render();
		expect(view.$el.find('.add').html()).toContain('Add');
	});
	
	it('should provide a search form', function() {
		view.render();
		expect(view.$el.find('form #search').attr('id')).toEqual('search');
	});
	
	it('should provide filtering', function() {
		view.render();
		expect(view.$el.find('#filter select option').size()).toEqual(3);
		expect(view.$el.find('#filter select option').html()).toContain('all');
		expect(view.$el.find('#filter select option').html()).toContain('family');
		expect(view.$el.find('#filter select option').html()).toContain('friends');
	});
	
	it('should render contacts list', function() {
		view.render();
		expect(view.$el.find('#contacts_list li').size()).toEqual(2);
		expect(view.$el.find('#contacts_list').html()).toContain('John Doe');
		expect(view.$el.find('#contacts_list').html()).toContain('John Smith');
		expect(view.$el.find('.contacts-empty').attr('class')).toEqual('contacts-empty hide');
	});
	
	it('should show empty message if no contact exists', function() {
		view = new Everybody.Views.ContactsIndex({
			collection: new Everybody.Collections.Contacts([])
		});
		view.render();
		expect(view.$el.find('#contacts_list li').size()).toEqual(0);
		expect(view.$el.find('.contacts-empty').text()).toContain('You don\'t have any contacts');
	});
	
	it('should redirect to new contact form after clicking on add link', function() {
		view.render();
		view.$el.find('.add').click();
		expect(window.location.href).toContain('new');
		Backbone.history.navigate('/', { silent: true });
	});
});
