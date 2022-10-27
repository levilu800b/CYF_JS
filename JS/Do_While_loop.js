// let input;

// do {
// 	input = 'hello';
// } while (input === undefined || input.length < 5);

// console.log(input);

// We’d like a program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required. Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing.
// The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0.

// const cupsOfSugarNeeded = 5;
// let cupsAdded = 0;

// Use a do...while loop to add cups of sugar to the batter. The loop should run as long as cupsAdded is less than cupsOfSugarNeeded.

// do {
//     cupsAdded++;
// } while (cupsAdded < cupsOfSugarNeeded);

// After the loop, use console.log() to print the value of cupsAdded to the console.

// console.log(cupsAdded);


// const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

// for (let i = 0; i < rapperArray.length; i++) {
//     console.log(rapperArray[i]);
//     if (rapperArray[i] === "Notorious B.I.G.") {
//         break;
//     }
// }

// console.log("And if you don't know, now you know.");

let groceryList = [
	'orange juice',
	'bananas',
	'coffee beans',
	'brown rice',
	'pasta',
	'coconut oil',
	'plantains',
];

// use a for loop to iterate through the array
for (let i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
}

// use a while loop to iterate through the array
let i = 0;
while (i < groceryList.length) {
    console.log(groceryList[i]);
    i++;
}

// use a do...while loop to iterate through the array
let j = 0;
do {
    console.log(groceryList[j]);
    j++;
}
while (j < groceryList.length);

// use a for...of loop to iterate through the array
for (let item of groceryList) {
    console.log(item);
}

// use a for...in loop to iterate through the array
for (let item in groceryList) {
    console.log(groceryList[item]);
}

// use forEach() to iterate through the array
groceryList.forEach(function(item) {
    console.log(item);
});