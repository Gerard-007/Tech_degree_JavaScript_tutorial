/*
    this app makes the computer to search to through our random app
    and finds the generated number.
*/

var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts += 1;
}

document.write('<h3>The random number was: ' + randomNumber + '</h3>');
document.write('<h3>It took the computer: ' + attempts + ' attempts to get it right</h3>');
