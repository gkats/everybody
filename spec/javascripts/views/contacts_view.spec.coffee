describe 'Contacts View', ->
  beforeEach ->
    @view = new Everybody.Views.ContactsView()
  
  describe 'rendering', ->
    beforeEach ->
      @contactView = new Backbone.View()
      @contactViewStub = sinon.stub(Everybody.Views, 'ContactView').returns(@contactView);
      @view.collection = new Backbone.Collection([
	      new Backbone.Model({ id: 1 }),
        new Backbone.Model({ id: 2 }),
        new Backbone.Model({ id: 3 })
      ])
      @view.render()
    
    afterEach ->
      @view.restore()
    
    it 'should render a view for each contact', ->
      expect(@contactViewStub).toHaveBeenCalledThrice()
      expect(@contactViewStub).toHaveBeenCalledWith({ model: model }) for model in @view.collection.models