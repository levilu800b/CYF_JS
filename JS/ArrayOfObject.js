// // // const cat1 = {
// // //     name: 'Jamie',
// // //     age: 12,
// // // }

// // // const cat2 = {
// // //     name: 'Brave',
// // //     age: 8,
// // // }

// // // const cat3 = {
// // //     name: 'Sylvester',
// // //     age: 2,
// // // }

// // // const arrayOfCats = [cat1, cat2, cat3];

// // // function underFourYearsOld(cat) {
// // //     return cat.age < 4;
// // // }

// // // const catsUnderFourYearsOld = arrayOfCats.filter(underFourYearsOld);

// // // console.log("Initial Cats: ", arrayOfCats);
// // // console.log('Cats under four years old: ', catsUnderFourYearsOld);

// // // EXERCISE 1

// // // Define an array containing the 3 persons defined below.
// // // Return an array of the person names (hint: use map).
// // // Filter the persons to return an array with the person younger than 28 years old (hint: use filter).

// let person1 = {
//   name: "Alice",
//   age: 25,
// };

// let person2 = {
//   name: "Bob",
//   age: 30,
// };

// let person3 = {
//   name: "John",
//   age: 20,
// };

// // /*
// // DO NOT EDIT ANYTHING ABOVE THIS LINE
// // WRITE YOUR CODE BELOW
// // */

// // // Define an array containing the 3 persons defined above
// let persons = [person1, person2, person3]; // Complete here

// // // Return an array of the person names (hint: use map)
// let personNames = persons.map((person) => person.name); // Complete here

// // // Filter the persons to return an array with the person younger than 28 years old (hint: use filter)
// let personsYoungerThan28YearsOld = persons.filter((person) => person.age < 28); // Complete here

// // /*
// // DO NOT EDIT ANYTHING BELOW THIS LINE
// // */

// console.log(
//   "Question 1: array defined with 3 persons -> ",
//   persons[0] === person1 && persons[1] === person2 && persons[2] === person3
//     ? "Passed :)"
//     : "Not yet :("
// );

// console.log(
//   "Question 2: array containing the person names -> ",
//   personNames[0] === "Alice" &&
//     personNames[1] === "Bob" &&
//     personNames[2] === "John"
//     ? "Passed :)"
//     : "Not yet :("
// );

// console.log(
//   "Question 3: array containing the persons younger than 28 years old -> ",
//   personsYoungerThan28YearsOld[0] === person1 &&
//     personsYoungerThan28YearsOld[1] === person3
//     ? "Passed :)"
//     : "Not yet :("
// );

// // EXERCISE 2

// // An array of travel destinations is defined below. Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

// // Filter the travelDestinations array to return all destination names reachable within 500 kms.
// // Find a destination name reachable by ferry.
// // Print in the console all the destination names more than 300 kms far away and reachable by train.

let destination1 = {
	destinationName: 'Edinburgh',
	distanceKms: 80,
	transportations: ['car', 'bus', 'train'],
};

let destination2 = {
	destinationName: 'London',
	distanceKms: 650,
	transportations: ['car', 'bus', 'train'],
};

let destination3 = {
	destinationName: 'Paris',
	distanceKms: 900,
	transportations: ['train', 'plane'],
};

let destination4 = {
	destinationName: 'Dublin',
	distanceKms: 350,
	transportations: ['plane', 'ferry'],
};

let travelDestinations = [
	destination1,
	destination2,
	destination3,
	destination4,
];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

// Filter the travelDestinations array to return all destination names reachable within 500 kms
let destinationNamesWithin500Kms = travelDestinations
	.filter((destination) => destination.distanceKms < 500)
	.map((destination) => destination.destinationName); // Complete here

// Find a destination name reachable by ferry
let destinationNameReachableByFerry = travelDestinations.find((destination) =>
	destination.transportations.includes('ferry'),
).destinationName; // Complete here

// Print in the console all the destination names more than 300 kms far away and reachable by train
let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations
	.filter(
		(destination) =>
			destination.distanceKms > 300 &&
			destination.transportations.includes('train'),
	)
	.map((destination) => destination.destinationName); // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
	`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`,
);
console.log(
	`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`,
);
console.log(
	`Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`,
);

// EXERCISE 3

// Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, the number of customers in the restaurant at the moment and the menu with prices.

// We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).

// Define a method findAvailableRestaurants which takes a number of people in parameter and returns all the restaurant names which have the required number of seats available at the moment.

// Define a method findRestaurantServingDish which takes a dish name in parameter and returns all the restaurant names serving this dish.

// Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow in parameter (center, west), and returns the number of restaurants in this area.

// let restaurant1 = {
// 	name: 'Paesano',
// 	totalSeats: 10,
// 	numberOfCustomers: 8,
// 	address: {
// 		city: 'Glasgow',
// 		area: 'center',
// 	},
// 	menu: ['pizza', 'calzone', 'salad'],
// };

// let restaurant2 = {
// 	name: 'Ubiquitous Chip',
// 	totalSeats: 20,
// 	numberOfCustomers: 10,
// 	address: {
// 		city: 'Glasgow',
// 		area: 'west',
// 	},
// 	menu: ['salad', 'chocolate cake', 'roast lamb'],
// };

// let restaurant3 = {
// 	name: 'Monkeyz',
// 	totalSeats: 15,
// 	numberOfCustomers: 8,
// 	address: {
// 		city: 'Glasgow',
// 		area: 'center',
// 	},
// 	menu: ['stew', 'chocolate cake', 'panini'],
// };

// let restaurants = [restaurant1, restaurant2, restaurant3];

// // /*
// // DO NOT EDIT ANYTHING ABOVE THIS LINE
// // WRITE YOUR CODE BELOW
// // */

// let restaurantFinderApplication = {
// 	applicationName: 'Restaurant Finder',
// 	applicationVersion: '1.0',
// 	restaurants: restaurants,
// 	findAvailableRestaurants: function (numberOfPeople) {
// 		return this.restaurants
// 			.filter(
// 				(restaurant) =>
// 					restaurant.totalSeats - restaurant.numberOfCustomers >=
// 					numberOfPeople,
// 			)
// 			.map((restaurant) => restaurant.name);
// 		// Complete here
// 	},
// 	findRestaurantServingDish: function (dishName) {
// 		return this.restaurants
// 			.filter((restaurant) => restaurant.menu.includes(dishName))
// 			.map((restaurant) => restaurant.name);
// 		// Complete here
// 	},
// 	countNumberOfRestaurantsInArea: function (area) {
// 		return this.restaurants.filter(
// 			(restaurant) => restaurant.address.area === area,
// 		).length;
// 		// Complete here
// 	},
// };

// // /*
// // DO NOT EDIT ANYTHING BELOW THIS LINE
// // */

// let restaurantsAvailableFor5People =
// 	restaurantFinderApplication.findAvailableRestaurants(5);
// console.log(
// 	`Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`,
// );

// let restaurantsServingSalad =
// 	restaurantFinderApplication.findRestaurantServingDish('salad');
// console.log(
// 	`Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`,
// );

// let numberOfRestaurantsInCityCentre =
// 	restaurantFinderApplication.countNumberOfRestaurantsInArea('center');
// console.log(
// 	`Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`,
// );
