/* 
	In this tutorial we searched through our list using 
	<indexOf> keyword to search through our array
*/

var inStock = ['apple', 'milk', 'sugar', 'egg', 'cheeze', 'bread'];
var searchGuide = "Type 'list' to show all of the products and 'quit' to exit.";
var search;

document.write(searchGuide);

function printStock (message) {
	document.write('<p>' + message + '</p>');
}

while (true) {
	search = prompt("Search for available product");
	search = search.toLowerCase();
	if (search === 'quit' || search === 'exit') {
		break;
	} else if (search === 'list') {
		printStock(inStock.join(', '));
	} else {
		if ( inStock.indexOf(search) > -1 ) {
			printStock('Yes, we have ' + search + ' in the store');
		} else {
			printStock(search + ' is not in store');
		}
	}
}