//In this tutorial examples let & const keyword was introduced
// const person;
// let description;


const person = {
	firstName: "Gerard",
	lastName: "Nwazk",
	role: "Director"
}

function personDescription(person) {
	let description = person.firstName;
	if(person.role) {
		description = description + " is a ";
		description = description + person.role;
	}
	console.log(description);
}

personDescription(person);