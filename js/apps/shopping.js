var shoppingList = ['carrots', 'milk', 'egg', 'bread'];
var addItem = prompt('What item do you wish to add?');
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);
console.log(shoppingList[3]);

// Adding items to our shopping list from front of the array using <unshift> keyword...
shoppingList.unshift(addItem);

// Adding items to our shopping list from back of the array using <push> keyword...
shoppingList.push(addItem);