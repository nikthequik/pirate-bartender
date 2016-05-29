$(function() {
	
	function Question(lead, subject) {
		this.lead = lead;
		this.subject = subject;
	};

	Question.prototype.createQuestion = function(lead, subject) {
		var newQuestion = lead + subject + "?";
	};

	function Ingredient(name, flavor) {
		this.name = name;
		this.flavor = flavor;
	};

	function Pantry(ingredient, flavor) {
		this.ingredient = ingredient;
		this.flavor = flavor;
	};

	function Bartender() {};
	Bartender.prototype.createDrink = function(userPref){

	};

	var moe = new Bartender();

	var strongQ = new Question("Do you like it when your drinks are ", "strong");

	var preference = {};

});