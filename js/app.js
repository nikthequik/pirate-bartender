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
	Bartender.prototype.questions = [];
	Bartender.prototype.createDrink = function(userPref){

	};

	Bartender.prototype.askQuestion = function() {

	};

	var moe = new Bartender();

	var strongQ = new Question("Do you like it when your drinks are ", "strong");
	var saltyQ = new Question("Are you a fan of a drink that can be described as ", "salty");
	var bitterQ = new Question("Are you in the mood for something ", "bitter");
	var sweetQ = new Question("Would you like me to make your drink ", "sweet");
	var fruityQ = new Question("Would it be alright if you could describe your drink as ", "fruity");
	moe.questions.push(strongQ, saltyQ, bitterQ, sweetQ, fruityQ);
	console.log(moe.questions[0].subject);

	var preference = {};
	


});