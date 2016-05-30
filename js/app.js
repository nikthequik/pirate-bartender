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

	function Pantry() {};
	Pantry.prototype.strong = [];
	Pantry.prototype.salty = [];
	Pantry.prototype.bitter = [];
	Pantry.prototype.sweet = [];
	Pantry.prototype.fruity = [];


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

	//Create cupboard and its ingredients
	var cupboard = new Pantry();

	var whiskey = new Ingredient("Whiskey", "strong");
	var rum = new Ingredient("Rum", "strong");
	var vodka = new Ingredient("Vodka", "strong");
	cupboard.strong.push(whiskey, rum, vodka);

	var bacon = new Ingredient("Bacon crumbles", "salty");
	var seaSalt = new Ingredient("Sea Salt", "salty");
	var olive = new Ingredient("Cocktail Olives", "salty");
	cupboard.salty.push(bacon, seaSalt, olive);

	var lemon = new Ingredient("Twist of Lemon", "bitter");
	var lime = new Ingredient("Squeeze of Lime", "bitter");
	var tonic = new Ingredient("Splash of Tonic", "bitter");
	cupboard.bitter.push(lemon, lime, tonic);

	var sugar = new Ingredient("Sugar Cube", "sweet");
	var cola = new Ingredient("Splash of Cola", "sweet");
	var honey = new Ingredient("Drop of Honey", "sweet");
	cupboard.sweet.push(sugar, cola, honey);

	var apple = new Ingredient("Splash of Apple Juice", "fruity");
	var orange = new Ingredient("Splash of Orange Juice", "fruity");
	var cherry = new Ingredient("Cherry on Top", "fruity");
	cupboard.fruity.push(apple, orange, cherry);


	//Create moe and his questions
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