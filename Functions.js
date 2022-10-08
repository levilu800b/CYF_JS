// function printMessage(message) {
//     console.log(message);
// }

// console.log(printMessage());

// function getVillainName(birthday) {
// 	const m = [
// 		'Evil',
// 		'Vile',
// 		'Cruel',
// 		'Trashy',
// 		'Despicable',
// 		'Embarrassing',
// 		'Disreputable',
// 		'Atrocious',
// 		'Twirling',
// 		'Orange',
// 		'Terrifying',
// 		'Awkward',
// 	];
// 	const d = [
// 		'Mustache',
// 		'Pickle',
// 		'Hood Ornament',
// 		'Raisin',
// 		'Recycling Bin',
// 		'Potato',
// 		'Tomato',
// 		'House Cat',
// 		'Teaspoon',
// 		'Laundry Basket',
// 	];

//     return `The ${m[birthday.getMonth()]} ${d[birthday.getDate() % 10]}`;
// }

// console.log(getVillainName(new Date('May 2')));

// const dayOfWeek = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
// ];

// function getDay(day) {
//     if (day === 0 || day === 6) {
//         return `${dayOfWeek[day]} is weekend`;
//     } else if (day >= 1 && day <= 5) {
//         return `${dayOfWeek[day]} is business day`;
//     } else {
//         return 'Uh-oh, the week comprises of just 7 days';
//     }
// }

// console.log(getDay(8));


// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// function validParentheses(parens) {
// 	var n = 0;
// 	for (var i = 0; i < parens.length; i++) {
// 		if (parens[i] == '(') n++;
// 		if (parens[i] == ')') n--;
// 		if (n < 0) return false;
// 	}

// 	return n == 0;
// }

// function caffeineBuzz(n) {
// 	if (n % 12 === 0) return 'CoffeeScript';
// 	if (n % 6 === 0) return 'JavaScript';
// 	if (n % 3 === 0) return 'Java';
// 	return 'mocha_missing!';
// }

// console.log(caffeineBuzz(72));

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// function zero() {
// 	return arguments.length ? arguments[0](0) : 0;
// }
// function one() {
// 	return arguments.length ? arguments[0](1) : 1;
// }
// function two() {
// 	return arguments.length ? arguments[0](2) : 2;
// }
// function three() {
// 	return arguments.length ? arguments[0](3) : 3;
// }
// function four() {
// 	return arguments.length ? arguments[0](4) : 4;
// }
// function five() {
// 	return arguments.length ? arguments[0](5) : 5;
// }
// function six() {
// 	return arguments.length ? arguments[0](6) : 6;
// }
// function seven() {
// 	return arguments.length ? arguments[0](7) : 7;
// }
// function eight() {
// 	return arguments.length ? arguments[0](8) : 8;
// }
// function nine() {
// 	return arguments.length ? arguments[0](9) : 9;
// }

// function plus(b) {
// 	return function (a) {
// 		return Math.floor(a + b);
// 	};
// }
// function minus(b) {
// 	return function (a) {
// 		return Math.floor(a - b);
// 	};
// }
// function times(b) {
// 	return function (a) {
// 		return Math.floor(a * b);
// 	};
// }
// function dividedBy(b) {
// 	return function (a) {
// 		return Math.floor(a / b);
// 	};
// }

// function high(x) {
// 	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// 	let words = x.split(' ');
// 	let wordValues = [];
// 	for (let i = 0; i < words.length; i++) {
// 		let word = words[i].split('');
// 		let wordValue = 0;
// 		for (let j = 0; j < word.length; j++) {
// 			let letter = word[j];
// 			let letterValue = alphabet.indexOf(letter) + 1;
// 			wordValue += letterValue;
// 		}
// 		wordValues.push(wordValue);
// 	}
// 	let highestValue = Math.max(...wordValues);
// 	let highestValueIndex = wordValues.indexOf(highestValue);
// 	return words[highestValueIndex];
// }

// write a function which returns the time since midnight in milliseconds.

// function past(h, m, s) {
// 	//#Happy Coding! ^_^
//     let totalSeconds = (h * 3600) + (m * 60) + s;
//     return totalSeconds * 1000;
// }

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr(n, s) {
// 	return s.repeat(n);
// }
