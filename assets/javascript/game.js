//declare all needed variables
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var lettersGuessed = [];
var newLetter = null;
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

//define functions
var addLettersGuessed = function() {  
	document.querySelector('#lettersGuessed').innerHTML = lettersGuessed.join(', ');
};

var updateGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = guessesLeft;
};

var updateCompChoice = function() {
	compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	lettersGuessed = [];
	document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;

	updateCompChoice();
	updateGuessesLeft();
	addLettersGuessed();
};

//function runs when user makes a guess
document.onkeyup = function(event) {
	guessesLeft--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	lettersGuessed.push(userGuess);
	updateGuessesLeft();
	addLettersGuessed();
	
	if (guessesLeft > 0) {
		if (userGuess == compChoice) {
			wins++;
			document.getElementById("wins").innerHTML = wins;
			alert("You guessed it!");
			reset();
		} 
	} else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = losses;
        alert("You're clearly not a psychic.");
        reset();
        }
}