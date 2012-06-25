describe('Contact', function() {
	var contact = new Everybody.Models.Contact();
	
	it('has default value for group', function() {
		expect(contact.get('group')).toEqual('none');
	});
	
	it('requires a name', function() {
//		 expect(contact.isValid()).toBe(false);
//		 contact.set('name', 'joe');
//		 expect(contact.isValid()).toBe(true);
		var eventSpy = sinon.spy();
		contact.bind('error', eventSpy);
		contact.save({ name: '' });
		expect(eventSpy).toHaveBeenCalledOnce();
		expect(eventSpy).toHaveBeenCalledWith(contact, 'Name can\'t be blank')
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
