/*
    In this lesson we created an object person with properties...
    we create a function to print our object and its properties to out div tag...
    We print out our object properties...
*/

//We created an object person with properties and values...
var person = {
	name: "Gerard",
  	sex: "male",
	country: "Nigeria",
	age: 27,
	webDeveloper: true,
	skills: ['html', 'css', 'javascript', 'python', 'django']
};

//We create a function to print our object and its properties to out div tag...
function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}

//We access the object properties values
var message = "<h3>Hello I go by the name" + person.name +"./h3>";
	message += "<p>I am a citizen of " + person.country + ".</p>";
	message += "<p>I am " + person.age + " years old.</p>";
    person.name = "Geemix"
	message += "<p>You can also call me " + person.name + ".</p>";
	message += "<p>I have " + person.skills.length + " web development skills, which are: " + person.skills.join(', ') + ".</p>";
	print(message);