describe('Contact', function() {
	var contact = new Everybody.Models.Contact();
	var phones = new Everybody.Collections.Phones([
		{ id: '1', kind: 'Mobile', number: '1234567890' },
		{ id: '2', kind: 'Home', number: '9999999999' }
	]);
	
	it('has default value for group', function() {
		expect(contact.get('group')).toEqual('none');
	});
	
	it('requires a name', function() {
		var eventSpy = sinon.spy();
		contact.bind('error', eventSpy);
		contact.save({ name: '' });
		expect(eventSpy).toHaveBeenCalledOnce();
		expect(eventSpy).toHaveBeenCalledWith(contact, 'Name can\'t be blank');
	});
	
	it('has phones', function() {
		expect(contact.phones).toBeDefined();
	});
	
	it('is properly converted to JSON', function() {
		phones.each(function(phone) {
			contact.phones.add(phone);
		});
		var json_contact = contact.toJSON();
		expect(json_contact.group).toBe('none');
		expect(json_contact.phones_attributes.length).toBe(2);
		expect(json_contact.phones_attributes[0].id).toBe('1');
	});
	
	it('does not send protected attributes as json', function() {
		contact.set('created_at', '2012-06-06');
		contact.set('updated_at', '2012-06-06');
		var json_contact = contact.toJSON();
		expect(json_contact.created_at).toBeUndefined();
		expect(json_contact.updated_at).toBeUndefined();
	});
	
	describe('url', function() {
		var collection = {
			url: '/collection'
		};
		contact.collection = collection;
		
		describe('when no id is set', function() {
			it ('should return the collection url', function() {
				expect(contact.url()).toEqual(collection.url);
			});
		});
		describe('when id is set', function() {
			it ('should return the collection url and id', function() {
				contact.id = 1;
				expect(contact.url()).toEqual(collection.url + '/' + contact.id);
			});
		});
	});
});
