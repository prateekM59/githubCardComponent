var UserModel = Backbone.Model.extend({
	defaults: function() {
		return {
			login: '',
			name: '',
			image: null,
			location: '',
			followers: '',
			profileLink: ''
		};
	}
});