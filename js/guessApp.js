var randomNumber = getRandomNumber(10);
var guess;
var attempts = 0;
var correctGuess = false;

function getRandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
	return num;
}

while ( attempts < 10 ) {
	guess = prompt('I am thinking of a number between 1 and 10. What is it?');
	attempts += 1;
	if (parseInt(guess) === randomNumber) {
		correctGuess = true;
		break;
	}
}

if (correctGuess) {
	document.write('<h3>You guessed the number!</h3>');
	document.write('<h3>It took the you: ' + attempts + ' attempts to guess the number ' + randomNumber + '</h3>');
} else {
	document.write('<h1>Sorry. You didnt guess the number!</h1>');
}


/*
	do {
    	guess = prompt("I am thinking of a number between 1 to 10. which is it?");
    	attempts += 1;
    	if (parseInt(guess) === randomNumber) {
        	correctGuess = true;
    	}
	} while (! correctGuess)
*/