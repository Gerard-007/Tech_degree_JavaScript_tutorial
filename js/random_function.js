function getRandomNumber(lower, upper) {
    // how to control the user input...
    if ( isNaN(lower) || isNaN(upper) ) {
        throw new Error("Both argument must be a number");
    }
    // random formulae...
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber(1, 6));
console.log(getRandomNumber(1, 100));
console.log(getRandomNumber(200, 500));
