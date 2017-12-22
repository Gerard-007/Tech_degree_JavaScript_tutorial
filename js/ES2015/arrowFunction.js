// ============== Anonymous function...
const name = "Gerard";

var sayName = function () {
	const message = "My name is " + name;
	console.log(message);
}

sayName();

var sayBye = function () {
	console.log("Bye " + name);
}




// ============= Es2015 arrow function...
const name = "Gerard";

const sayName = () => {
	const message = "My name is " + name;
	console.log(message);
}


const sayBye = () => console.log("Bye " + name);


/*

Benefits of Arrow Functions

The first benefit of arrow functions, as discussed in this workshop, is it's shorter syntax.

const sayHello = () => {
  console.log("Hello");
}
The advanced technical benefit with arrow functions comes with using callbacks in object orientated programming and using this.

In this example we're increasing a person's age by 1 ever one second.

function Person() {
  this.age = 0;

  var self = this;

  setInterval(function() {
    self.age ++;
  }, 1000);

}
You have to assign this to a variable, in this case self because whenever you create a function a new this value is defined.

Arrow functions do not have a this value defined. You can write the above code in the following way.

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age ++;
  }, 1000);

}
Not worrying about this in your code is less frustrating. For more reading check the MDN documentation on Arrow Functions

*/