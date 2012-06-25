describe('Contacts', function() {
	var contacts = new Everybody.Collections.Contacts();
	// The collection does not depend on any implementation of the model.
	// So, it isn't necessary to add Contacts, just generic Backbone Models.
	var zack = new Backbone.Model({ 
		id: 1,
		name: 'zack',
		group: 'family'
	});
	var joe = new Backbone.Model({
		id: 2,
		name: 'joe',
		group: 'family'
	});	
		
	it ('should order elements by name', function() {
		contacts.add([zack, joe]);
		expect(contacts.at(0)).toBe(joe);
		expect(contacts.at(1)).toBe(zack);
	});
});