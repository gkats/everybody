(function() {

  describe('Contacts View', function() {
    beforeEach(function() {
      return this.view = new Everybody.Views.ContactsView();
    });
    return describe('rendering', function() {
      beforeEach(function() {
        this.contactView = new Backbone.View();
        this.contactViewStub = sinon.stub(Everybody.Views, 'ContactView').returns(this.contactView);
        this.view.collection = new Backbone.Collection([
          new Backbone.Model({
            id: 1
          }), new Backbone.Model({
            id: 2
          }), new Backbone.Model({
            id: 3
          })
        ]);
        return this.view.render();
      });
      afterEach(function() {
        return this.view.restore();
      });
      return it('should render a view for each contact', function() {
        var model, _i, _len, _ref, _results;
        expect(this.contactViewStub).toHaveBeenCalledThrice();
        _ref = this.view.collection.models;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          model = _ref[_i];
          _results.push(expect(this.contactViewStub).toHaveBeenCalledWith({
            model: model
          }));
        }
        return _results;
      });
    });
  });

}).call(this);
