var UserView = Backbone.View.extend({
	tagName: "div",
	className: "user_view_container",
	initialize: function() {
		this.template = _.template($("#userViewTemplate").html());
	},
	render: function() {
		var modelData = this.model.toJSON();
		var compiledHTML = this.template({data: modelData});
		this.$el.html(compiledHTML);
		return this;
	},
	redirectToProfile: function() {
		var modelData = this.model.toJSON();
		window.location = modelData.profileLink;
	},
	removeView: function(e) {
		e.stopPropagation();
		var modelData = this.model.toJSON();
		delete app.userMap[modelData.login.toLowerCase()];
		app.users.remove(this.model);
	},
	events: {
		"click": "redirectToProfile",
		"click .remove": "removeView"
	}
});