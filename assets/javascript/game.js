var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;

var losses = 0;

var guesses = 9;

var guessesLeft = 9;

var guessedLetters = [];

var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event) {

	var userGuess = event.key;

	document.getElementById("guessSoFar").innerHTML = userGuess;

	document.getElementById("guesses").innerHTML = guesses--;

}