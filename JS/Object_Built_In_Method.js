// const obj = {
//     name: 'John',
//     age: 30,
//     sayHi: function() {
//         console.log('Hi');
//     },
// nestedObject: {
//     height: 180,
//     weight: 80,
// }
// }
// // Object.keys(obj) - returns an array of keys
// console.log(Object.keys(obj)); // [ 'name', 'age', 'sayHi', 'nestedObject' ]

// // Object.values(obj) - returns an array of values
// console.log(Object.values(obj)); // [ 'John', 30, [Function: sayHi], { height: 180, weight: 80 } ]

// // Object.entries(obj) - returns an array of arrays of key-value pairs
// console.log(Object.entries(obj)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'sayHi', [Function: sayHi] ], [ 'nestedObject', { height: 180, weight: 80 } ] ]

// EXERCISE 1

// Return the keys and values of the following object


// let capitalCities = {
//   scotland: "Edinburgh",
//   kenya: "Nairobi",
//   australia: "Canberra",
//   canada: "Ottawa",
// };

// let highScores = {
//   55: "Alistair",
//   100: "David",
//   89: "Hannah",
//   34: ["Sergi", "Frank"],
// };

// // ONLY EDIT BELOW HERE

// let capitalCitiesKeys = Object.keys(capitalCities);
// let highScoresKeys = Object.keys(highScores);
// let capitalCitiesValues = Object.values(capitalCities);
// let highScoresValues = Object.values(highScores);

// // ONLY EDIT ABOVE HERE

// console.log(capitalCitiesKeys);
// // prints [ 'scotland', 'kenya', 'australia', 'canada' ]

// console.log(highScoresKeys);
// // prints ['34, '55', '89', '100']

// console.log(capitalCitiesValues);
// // prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

// console.log(highScoresValues);
// // prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']

// EXERCISE 2

// You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

// You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.


let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};

// // ONLY EDIT BELOW THIS LINE

let mentorsNames = Object.keys(mentorsAges);

let mentorsNamedUppercased = mentorsNames.map((name) => name.toUpperCase());

// // ONLY EDIT ABOVE THIS LINE

console.log(mentorsNamedUppercased);
// // prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]


// EXERCISE 3
// Objects very often contain other objects.

// This exercise will give you practice in getting the keys of objects inside other objects.

// Use the provided console.log statements below and follow the instructions above them.

// let storeBranches = {
//   glasgow: {
//     manager: "Andrew",
//     assistant: "Laura",
//     interns: {
//       head_intern: "Mozafar",
//       intern: "James",
//     },
//   },

//   edinburgh: {
//     director: "Kelly",
//     manager: "Sally",
//     assistant: "Derek",
//     interns: {
//       head_intern: "John",
//       intern: "Sarah",
//     },
//   },
// };

// ONLY EDIT BELOW THIS LINE

// # 1
// prints [ 'glasgow', 'edinburgh' ]
// console.log(Object.keys(storeBranches));

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
// console.log(Object.keys(storeBranches.glasgow));

// # 3
// prints [ 'head_intern', 'intern' ]
// console.log(Object.keys(storeBranches.glasgow.interns));

// ONLY EDIT ABOVE THIS LINE

let spaceship = {
	passengers: null,
	telescope: {
		yearBuilt: 2018,
		model: '91031-XLT',
		focalLength: 2032,
	},
	crew: {
		captain: {
			name: 'Sandra',
			degree: 'Computer Engineering',
			encourageTeam() {
				console.log('We got this!');
			},
			'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
		},
	},
	engine: {
		model: 'Nimbus2000',
	},
	nanoelectronics: {
		computer: {
			terabytes: 100,
			monitors: 'HD',
		},
		'back-up': {
			battery: 'Lithium',
			terabytes: 50,
		},
	},
};

// Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)

let capFave = spaceship.crew.captain['favorite foods'][0];

// Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.

spaceship.passengers = [
	{
		name: 'Ryu',
		age: 30,
	},
	{
		name: 'Anna',
		age: 33,
	},
];

// Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)

let firstPassenger = spaceship.passengers[0];

let spaceship = {
	'Fuel Type': 'Turbo Fuel',
	homePlanet: 'Earth',
};

// Write your code below
// Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.

function greenEnergy(obj) {
	obj['Fuel Type'] = 'avocado oil';
}

// Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.

function remotelyDisable(obj) {
	obj.disabled = true;
}

// Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

let spaceship = {
	crew: {
		captain: {
			name: 'Lily',
			degree: 'Computer Engineering',
			cheerTeam() {
				console.log('You got this!');
			},
		},
		'chief officer': {
			name: 'Dan',
			degree: 'Aerospace Engineering',
			agree() {
				console.log('I agree, captain!');
			},
		},
		medic: {
			name: 'Clementine',
			degree: 'Physics',
			announce() {
				console.log(`Jets on!`);
			},
		},
		translator: {
			name: 'Shauna',
			degree: 'Conservation Science',
			powerFuel() {
				console.log('The tank is full!');
			},
		},
	},
};

// Write your code below
// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.

for (let crewMember in spaceship.crew) {
	console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.

for (let crewMember in spaceship.crew) {
	console.log(
		`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`,
	);
}


