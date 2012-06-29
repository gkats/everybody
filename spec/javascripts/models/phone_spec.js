describe('Phone', function() {
	var phone, eventSpy;
	
	beforeEach(function() {
		phone = new Everybody.Models.Phone();
		phone.url = '/';
		eventSpy = sinon.spy();
		phone.bind('error', eventSpy);
	});
	
	it('has a default value for kind', function() {
		expect(phone.get('kind')).toEqual('Mobile');
	});
	
	describe('number', function() {		
		it('is required', function() {
			phone.save({ number: '' });
			expect(eventSpy).toHaveBeenCalledOnce();
			expect(eventSpy).toHaveBeenCalledWith(phone, 'Number can\'t be blank');
		});
	
		it('is invalid if it contains non-digit characters', function() {	
			phone.save({ number: 'invalid' });
			expect(eventSpy).toHaveBeenCalledOnce();
			expect(eventSpy).toHaveBeenCalledWith(phone, 'Number must contain only digits');
		});
		
		it('should contain only digits', function() {
			phone.save({ number: '123' });
			expect(eventSpy).not.toHaveBeenCalled();
		});
	});
	
	describe('kind', function() {
		beforeEach(function() {
			phone.set('number', '123');
		});
		
		it('is required', function() {
			phone.save({ kind: '' });
			expect(eventSpy).toHaveBeenCalledOnce();
			expect(eventSpy).toHaveBeenCalledWith(phone, 'Invalid phone type');
		});
		
		it('is invalid if it is not one of the available values', function() {
			phone.save({ kind: 'invalid' });
			expect(eventSpy).toHaveBeenCalledOnce();
			expect(eventSpy).toHaveBeenCalledWith(phone, 'Invalid phone type');
		});
		
		it('should be one of the available values', function() {
			phone.save({ kind: phone.kinds[0] });
			expect(eventSpy).not.toHaveBeenCalled();
		});
	});
});