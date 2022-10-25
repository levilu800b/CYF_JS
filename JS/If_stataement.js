// function remainder(n, m) {
// 	// Divide the larger argument by the smaller argument and return the remainder
// 	if (n > m) {
// 		let answer = n % m;
// 		if (m === 0) {
// 			return NaN;
// 		} else {
// 			return answer;
// 		}
// 	} else if (m > n) {
// 		let answer = m % n;
// 		if (n === 0) {
// 			return NaN;
// 		} else {
// 			return answer;
// 		}
// 	} else {
// 		let answer = n % m;
// 		return answer;
// 	}
// }

// console.log(remainder(5, 3));

// function greet(name){
//     if (name !== "Johnny") {
//         return "Hello, " + name + "!";
//     } else {
//         return "Hello, my love!";
//     }
// }


// function numberChecker(num) {
// 	if (num > 20) {
// 		return `${num} is greater than 20`;
// 	} else if (num === 20) {
// 		return `${num} is equal to 20`;
// 	} else if (num < 20) {
// 		return `${num} is less than 20`;
// 	} else {
// 		return `${num} isn't even a number :(`;
// 	}
// }

// console.log(numberChecker(80));

//  let mood = true;

// function moodChecker(mood) {
// 	if (mood === "happy") {
// 		return "Good job, you're doing great!";
// 	} else if (mood === "sad") {
// 		return "Every cloud has a silver lining";
// 	} else if (typeof mood === "number") {
// 		return "Beep beep boop";
// 	} else {
// 		return "I'm sorry, I'm still learning about feelings!";
// 	}
// }

// console.log(moodChecker("sad"));


// function mood () {
// 	let isHappy = false;
// 	if (isHappy) {
// 		console.log("I am happy");
// 	} else {
// 		console.log("I am not happy");
// 	}
// }

// mood();

// function checkAlive(health) {
// 	if (health <= 0) {
// 		health < 0;
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

// console.log(checkAlive(5));

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

 // Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// function aliasGen(f, l) {
//     //your code here
//     if (f[0] === f[0].toUpperCase() && l[0] === l[0].toUpperCase()) {
//         return `${f[0]} ${l[0]}`;
//     } else {
//         return 'Your name must start with a letter from A - Z.';
//     }
// }

// function aliasGen(first, last) {
// 	let nameFirst = first[0].toUpperCase();
// 	let nameLast = last[0].toUpperCase();

// 	if (firstName[nameFirst] && surname[nameLast]) {
// 		return firstName[nameFirst] + ' ' + surname[nameLast];
// 	} else {
// 		return 'Your name must start with a letter from A - Z.';
// 	}
// }

// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
// function logicalCalc (array, op) {
//     let result = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (op === 'AND') {
//             result = result && array[i];
//         } else if (op === 'OR') {
//             result = result || array[i];
//         } else if (op === 'XOR') {
//             result = result !== array[i];
//         }
//     }
//     return result;
// }

// console.log(logicalCalc([true, true, true, false], "AND"));



let hungerLevel = 7;

if (hungerLevel => 7) {
	console.log('Time to eat!');
} else {
	console.log('We can eat later!');
}