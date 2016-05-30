$(function() {
	
	var qCount = 0;
	function random5() {
		var index = Math.floor(Math.random() * 5);
		return index;
	}
	function random3() {
		var index = Math.floor(Math.random() * 3);
		return index;
	}

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
	Bartender.prototype.createDrink = function(userPref, pantry){
		$("#dialogue").html("<p class='question'>Coming right up, matey!</p>");
		setTimeout(function(){
			var newDrink = new Drink();
			if (userPref.strong === true) {
				newDrink.strong = pantry.strong[random3()].iName;
			}
			else {
				newDrink.strong = "nothing strong";
			}
			if (userPref.salty === true) {
				newDrink.salty = pantry.salty[random3()].iName;
			}
			else {
				newDrink.salty = "nothing salty";
			}
			if (userPref.bitter === true) {
				newDrink.bitter = pantry.bitter[random3()].iName;
			}
			else {
				newDrink.bitter = "nothing bitter";
			}
			if (userPref.sweet === true) {
				newDrink.sweet = pantry.sweet[random3()].iName;
			}
			else {
				newDrink.sweet = "nothing sweet";
			}
			if (userPref.fruity === true) {
				newDrink.fruity = pantry.fruity[random3()].iName;
			}
			else {
				newDrink.fruity = "nothing fruity";
			}
			$("#dialogue").html("<p class='question'>Your drink is ready, matey!  It's got " + newDrink.strong + ", " + newDrink.salty + ", " + newDrink.bitter + ", " + newDrink.sweet + ", and " + newDrink.fruity + "! Enjoy!</p>");
	    }, 1000);

	
	};
	Bartender.prototype.askQuestion = function() {
		if (qCount < 5) {
			var bartender = this;
			var index = random5();
			var subject = this.questions[qCount].subject;
			console.log(subject);
			console.log(index);
			var newQuestion = this.questions[index].lead + subject + "?";
			$("#dialogue").html("<p class='question'>" + newQuestion + "</p><button id='yes' class='input'>Yes</button><button id='no' class='input'>No</button>");
			$("#yes").click(function(){
				preference[subject] = true;
				console.log(subject);
				console.log(preference);
				qCount ++;
				bartender.askQuestion();
			});
			$("#no").click(function(){
				qCount ++;
				bartender.askQuestion();
			});
			
		}
		else {
			this.createDrink(preference, cupboard);
		}
	};

	//Create cupboard and its ingredients
	var cupboard = new Pantry();

	var whiskey = new Ingredient("whiskey", "strong");
	var rum = new Ingredient("rum", "strong");
	var vodka = new Ingredient("vodka", "strong");
	cupboard.strong.push(whiskey, rum, vodka);

	var bacon = new Ingredient("bacon crumbles", "salty");
	var seaSalt = new Ingredient("sea salt", "salty");
	var olive = new Ingredient("some cocktail olives", "salty");
	cupboard.salty.push(bacon, seaSalt, olive);

	var lemon = new Ingredient("a twist of lemon", "bitter");
	var lime = new Ingredient("a squeeze of lime", "bitter");
	var tonic = new Ingredient("a splash of tonic", "bitter");
	cupboard.bitter.push(lemon, lime, tonic);

	var sugar = new Ingredient("a cube of sugar", "sweet");
	var cola = new Ingredient("a splash of cola", "sweet");
	var honey = new Ingredient("a drop of honey", "sweet");
	cupboard.sweet.push(sugar, cola, honey);

	var apple = new Ingredient("a splash of apple juice", "fruity");
	var orange = new Ingredient("a splash of orange juice", "fruity");
	var cherry = new Ingredient("a cherry on top", "fruity");
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
		strong: false,
		salty: false,
		bitter: false,
		sweet: false,
		fruity: false
	};
	
	moe.askQuestion();

});