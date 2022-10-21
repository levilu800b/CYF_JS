const characters = [
	{
		name: 'Luke Skywalker',
		height: '172',
		mass: '77',
		eye_color: 'blue',
		gender: 'male',
	},

	{
		name: 'Darth Vader',
		height: '202',
		mass: '136',
		eye_color: 'yellow',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: '150',
		mass: '49',
		eye_color: 'brown',
		gender: 'female',
	},
	{
		name: 'Anakin Skywalker',
		height: '188',
		mass: '84',
		eye_color: 'blue',
		gender: 'male',
	},
	{
		name: 'Princess Leia',
		height: '150',
		mass: '49',
		eye_color: 'brown',
		gender: 'Female',
	},
];

// let CountObjectsByColor = characters.reduce((acc, cur) => {
// 	let color = cur.eye_color;
// 	if (acc[color]) {
// 		acc[color] = acc[color] + 1;
// 	} else {
// 		acc[color] = 1;
// 	}
// 	return acc;
// }, {});
// If you want to practice more please try out these questions below:

// Reduce
// 1.Get the total mass of all characters
// const totalMass = characters.reduce((acc, cur) => {
// 	return (acc += cur.mass);
// }, 0);
// console.log(totalMass);
// 2.Get the total height of all characters
// const totalHeight = characters.reduce((acc, cur) => {
// 	return acc + cur.height;
// }, 0);
// console.log(totalHeight);
// 3. Get the total number of characters in all the character names
// const totalCharacters = characters.reduce((acc, cur) => {
// 	return acc + cur.name.length;
// }, 0);
// console.log(totalCharacters);
// 4. Get the total number of characters by eye color
// const totalEyeColor = characters.reduce((acc, cur) => {
// 	let color = cur.eye_color;
// 	if (acc[color]) {
// 		acc[color] = acc[color] + 1;
// 	} else {
// 		acc[color] = 1;
// 	}
// 	return acc;
// }, {});
// console.log(totalEyeColor);
// 5. Get the total number of characters
// const totalNumberOfCharacters = characters.reduce((acc, cur) => {
// 	return acc + 1;
// }, 0);
// console.log(totalNumberOfCharacters);

// map
// 1. Get an array of all names
// const names = characters.map((character) => {
// 	return character.name;
// });
// console.log(names);
// 2. Get an array of all heights
// const heights = characters.map((character) => {
// 	return character.height;
// });
// console.log(heights);
// 3. Get an array of objects with just name and height properties
// const nameAndHeight = characters.map((character) => {
// 	return { name: character.name, height: character.height };
// });
// 4. Get an array of all first names
// const firstNames = characters.map((character) => {
// 	return character.name.split(' ')[0];
// });
// console.log(firstNames);

// filter
// 1.Get characters with mass greater than 100
// const massGreaterThan100 = characters.filter((character) => {
// 	return character.mass > 100;
// });
// console.log(massGreaterThan100);
// 2.Get characters with height less than 200
// const heightLessThan200 = characters.filter((character) => {
// 	return character.height < 200;
// });
// console.log(heightLessThan200);
// 3.Get all male characters
// 4.Get all female characters

// Sort
// 1.Sort by name
// 2.Sort by mass
// 3.Sort by height

// Every
// 1. Does every character have blue eyes?
// 2.Does every character have mass more than 40?
// 3. Is every character shorter than 200?
