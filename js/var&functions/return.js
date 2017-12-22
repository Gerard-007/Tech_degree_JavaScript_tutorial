
function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
   return randomNumber;
}

// calling our basic function
alert(getRandomNumber());
console.log(getRandomNumber());
var dieRoll = getRandomNumber();


function isEmailEmpty() {
    var emailField = document.getElementById('email');
    if (emailField.value === '') {
        return true;
    } else {
        return false;
    }
}

var emailFieldTest = isEmailEmpty();
if (emailFieldTest === true) {
    document.write("<h2> please provide a valid email.</h2>");
}
