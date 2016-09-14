var Utils = Backbone.Model.extend({

	/*
		Returns the number of cards that our container width can support in a row.
		We keep the width of cards constant for now hence, number of cards = (width of viewPort)/(width of one card)
	*/
	getTotalCardsInRow: function() {
		var viewsContainerWidth = $("#viewsContainer").width();
		var cardWidth = app.Constants.CARD_WIDTH;
		var cardLeftMargin = app.Constants.CART_LEFT_MARGIN;
		var totalCards = Math.floor(viewsContainerWidth/cardWidth);
		return totalCards;
	},

	sortCollection: function(collection, sortOption, sortOrder) {
		if(sortOrder) {
			if(sortOption === "followers") {
				collection = collection.sort(function(a,b) {
					return (a.attributes.followers - b.attributes.followers);
				});
			} else if(sortOption === "location") {
				collection = collection.sort(function(a,b) {
					if(a.attributes.location > b.attributes.location) {
						return 1;
					} else if(a.attributes.location < b.attributes.location) {
						return -1;
					} else {
						return 0;
					}
				});
			} else {
				collection = collection.sort(function(a,b) {
					if(a.attributes.name > b.attributes.name) {
						return 1;
					} else if(a.attributes.name < b.attributes.name) {
						return -1;
					} else {
						return 0;
					}
				});
			}
		} else {
			if(sortOption === "followers") {
				collection = collection.sort(function(a,b) {
					return (b.attributes.followers - a.attributes.followers);
				});
			} else if(sortOption === "location") {
				collection = collection.sort(function(a,b) {
					if(a.attributes.location > b.attributes.location) {
						return -1;
					} else if(a.attributes.location < b.attributes.location) {
						return 1;
					} else {
						return 0;
					}
				});
			} else {
				collection = collection.sort(function(a,b) {
					if(a.attributes.name > b.attributes.name) {
						return -1;
					} else if(a.attributes.name < b.attributes.name) {
						return 1;
					} else {
						return 0;
					}
				});
			}
		}
		

		return collection;
	}
});