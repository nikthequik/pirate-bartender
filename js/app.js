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
		var index = Math.floor(Math.random() * 5);
		console.log(index);
		var newQuestion = this.questions[index].lead + this.questions[qCount].subject + "?";
		$("#dialogue").html("<p class='question'>" + newQuestion + "</p><button id='yes' class='input'>Yes</button><button id='no' class='input'>No</button>");
		qCount ++;
	};

	var moe = new Bartender();

	var strongQ = new Question("Do ye like it when yer drinks are ", "strong");
	var saltyQ = new Question("Are ye a fan o' drinks that can be described as ", "salty");
	var bitterQ = new Question("Are ye in the mood for somethin' ", "bitter");
	var sweetQ = new Question("Would ye like I to make yer drink ", "sweet");
	var fruityQ = new Question("Would it be alright if ye could describe yer sauce as ", "fruity");

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