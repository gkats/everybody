describe('Contacts index view', function() {
	var view = new Everybody.Views.ContactsIndex({
		collection: new Everybody.Collections.Contacts([
			new Everybody.Models.Contact({ name: 'John Doe', group: 'family' }),
			new Everybody.Models.Contact({ name: 'John Smith', group: 'friends' })
		])
	});
	
	it('should render add link', function() {
		view.render();
		expect(view.$el.find('a.add').html()).toContain('Add');
	});
	
	it('should show add form after clicking on add link', function() {
		view.render();
		expect(view.$el.find('form.contact-form').attr('display')).toEqual('none');
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
	});
	
	it('should show empty message if no contact exists', function() {
		view = new Everybody.Views.ContactsIndex({
			collection: new Everybody.Collections.Contacts([])
		});
		view.render();
		expect(view.$el.find('#contacts_list li').size()).toEqual(0);
	});
});