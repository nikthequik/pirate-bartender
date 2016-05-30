$(function() {
	
	var qCount = 0;

	function Question(lead, subject) {
		this.lead = lead;
		this.subject = subject;
	};

	function Ingredient(iName, flavor) {
		this.iName = iName;
		this.flavor = flavor;
	};

	function Pantry(ingredient, type) {
		this.ingredient = ingredient;
		this.flavor = flavor;
	};

	function Drink() {};

	function Bartender() {};
	Bartender.prototype.questions = [];
	Bartender.prototype.createDrink = function(userPref){
		var newdrink = new Drink();
		if (userPref.strong === true) {

		}
		if (userPref.salty === true) {
			
		}
		if (userPref.bitter === true) {
			
		}
		if (userPref.sweet === true) {
			
		}
		if (userPref.fruity === true) {
			
		}
	};
	Bartender.prototype.askQuestion = function() {
		var index = Math.floor((Math.random() * 5) + 1);
		var newQuestion = this.questions[index].lead + this.questions[qCount].subject + "?";
		$("#dialogue").html("<p class='question'>" + newQuestion + "</p><button class='input'>Yes</button><button class='input'>No</button>");
		qCount ++;
	};

	var moe = new Bartender();

	var strongQ = new Question("Do you like it when your drinks are ", "strong");
	var saltyQ = new Question("Are you a fan of a drink that can be described as ", "salty");
	var bitterQ = new Question("Are you in the mood for something ", "bitter");
	var sweetQ = new Question("Would you like me to make your drink ", "sweet");
	var fruityQ = new Question("Would it be alright if you could describe your drink as ", "fruity");

	moe.questions.push(strongQ, saltyQ, bitterQ, sweetQ, fruityQ);

	var preference = {
		strong: "",
		salty: "",
		bitter: "",
		sweet: "",
		fruity: ""
	};
	
	moe.askQuestion();

});