describe('ContactsRouter', function() {
  router: { },
  collection: { },
  contactsIndexViewStub: { },
  contactsStub: { },
  fetchStub: { }
  
  beforeEach(function() {
    this.router = new Everybody.Routers.Contacts();
    this.routeSpy = sinon.spy();
    this.collection = new Backbone.Collection();
    this.contactsIndexViewStub = sinon.stub(Everybody.Views, 'ContactsIndex')
      .returns(new Backbone.View());
    this.contactViewStub = sinon.stub(Everybody.Collections, 'Contacts')
      .returns(this.collection);
    this.fetchStub = sinon.stub(this.collection, 'fetch').returns(null);
    
    try {
      Backbone.history.start({ silent: true, pushState: true });
    }
    catch (e) { } 
  });
  
  afterEach(function() {
    Everybody.Views.ContactsIndex.restore();
    Everybody.Collections.Contacts.restore();
  });
  
  describe('index handler', function() {
    describe('when no contact exists', function() {
      beforeEach(function() {
        this.router.index();
      });
      
      it('creates a contacts collection', function() {
        expect(this.contactsStub).toHaveBeenCalledOnce();
        expect(this.contactsStub).toHaveBeenCalledWithExactly();
      });
      
      it('creates a contacts index view', function() {
        expect(this.contactsIndexViewStub).toHaveBeenCalledOnce();
        expect(this.contactsIndexViewStub).toHaveBeenCalledWith({
          collection: this.collection
        });
      });
      
      it('fetches the contacts form the server', function() {
        expect(this.fetchStub).toHaveBeenCalledOnce();
        expect(this.fetchStub).toHaveBeenCalledWith();
      });
    });
  });
  
});
