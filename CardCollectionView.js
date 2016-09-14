var CardCollectionView = Backbone.View.extend({
	el: $("#cardsContainer"),
	initialize: function() {
		this.model.on('add', this.render, this);
		this.model.on('remove', this.render, this);
	},
	render: function() {
		var self = this;
		self.$el.html('');
		app.users.models = app.utils.sortCollection(app.users.models, app.sortOption, app.sortOrder);
		_.each(self.model.models, function(userModel) {
			var userView = new UserView({model: userModel});
			self.$el.append(userView.render().$el);
		});
	}
});