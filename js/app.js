$(function() {

	function Question(lead, subject) {
		this.lead = lead;
		this.subject = subject;
	};

	function Ingredient(strong, salty, bitter, sweet, fruity) {
		this.strong = strong;
		this.salty = salty;
		this.bitter = bitter;
		this.sweet = sweet;
		this.fruity = fruity;
	};

	function Pantry(ingredient, flavor) {
		this.ingredient = ingredient;
		this.flavor = flavor;
	};

});