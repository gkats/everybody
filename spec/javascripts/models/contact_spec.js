describe('Contact', function() {
	var contact = new Everybody.Models.Contact();
	
	it('has default value for group', function() {
		expect(contact.get('group')).toEqual('none');
	});
	
	it('requires a name', function() {
		expect(contact.isValid()).toBe(false);
		contact.set('name', 'joe');
		expect(contact.isValid()).toBe(true);
	});
});