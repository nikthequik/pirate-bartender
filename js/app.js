$(function() {
	var qCount = 0;
	function random5() {
		var index = Math.floor(Math.random() * 5);
		return index;
	};
	function random3() {
		var index = Math.floor(Math.random() * 3);
		return index;
	};

	function Question(lead, subject) {
		this.lead = lead;
		this.subject = subject;
	};

	function Ingredient(iName, description, preference) {
		this.iName = iName;
		this.description = description;
		this.preference = preference;
	};

	function Pantry() {
		this.strong = [];
		this.salty = [];
		this.bitter = [];
		this.sweet = [];
		this.fruity = [];
	};

	function Drink() {};

	function Bartender() {};
	Bartender.prototype.questions = [];
	Bartender.prototype.createDrink = function(userPref, pantry){
		var bartender = this;
		$("#dialogue").html("<p class='question'>Coming right up, matey!</p>");
		setTimeout(function(){
			var newDrink = new Drink();
			if (userPref.strong) {
				newDrink.strong = pantry.strong[random3()].description;
			}
			else {
				newDrink.strong = "nothing strong";
			}
			if (userPref.salty) {
				newDrink.salty = pantry.salty[random3()].description;
			}
			else {
				newDrink.salty = "nothing salty";
			}
			if (userPref.bitter) {
				newDrink.bitter = pantry.bitter[random3()].description;
			}
			else {
				newDrink.bitter = "nothing bitter";
			}
			if (userPref.sweet) {
				newDrink.sweet = pantry.sweet[random3()].description;
			}
			else {
				newDrink.sweet = "nothing sweet";
			}
			if (userPref.fruity) {
				newDrink.fruity = pantry.fruity[random3()].description;
			}
			else {
				newDrink.fruity = "nothing fruity";
			}
			$("#dialogue").html("<p class='question'>Your drink is ready, matey!  It's got " + newDrink.strong + ", " + newDrink.salty + ", " + newDrink.bitter + ", " + newDrink.sweet + ", and " + newDrink.fruity + "! <br><span class='goodbye'>Enjoy Matey!</span></p>");
			setTimeout(function(){
				$('#replay').fadeIn(500);
				$('#reset').click(function(){
					qCount = 0;
					$('#replay').fadeOut(500);
					bartender.askQuestion();
				});
			}, 500);
	    }, 1000);
	};
	Bartender.prototype.askQuestion = function() {
		if (qCount < 5) {
			var bartender = this;
			var index = random5();
			var subject = mockData.questions[qCount].subject;
			var newQuestion = mockData.questions[index].lead + subject + "?";
			$("#dialogue").html("<p class='question'>" + newQuestion + "</p><button id='yes' class='input'>Yes</button><button id='no' class='input'>No</button>");
			$("#yes").click(function(){
				preference[subject] = true;
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


	//Create cupboard
	var cupboard = new Pantry();

	function stock(pantry){
		$.each(mockData.ingredients, function(index, ingredient) {
			pantry[ingredient.preference].push(new Ingredient(ingredient.name, ingredient.description, ingredient.preference));
		});
	};

	var preference = {
		strong: false,
		salty: false,
		bitter: false,
		sweet: false,
		fruity: false
	};
	var moe = new Bartender();
	stock(cupboard);
	moe.askQuestion();

});