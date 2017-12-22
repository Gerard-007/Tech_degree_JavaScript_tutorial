
// basic function structure...
function alertRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
}

// calling our basic function
alertRandom();
alertRandom();
alertRandom();


//=====================================================


// anonymous function as a variable value
var alertRandom = function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
}

// calling our anonymous function
alertRandom();
alertRandom();
alertRandom();