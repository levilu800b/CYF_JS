// Numbers

// create two variables numberOfTrainees and numberOfMentors
// const numberOfTrainees = 15;
// const numberOfMentors = 8;

// log a message that displays the total number of trainees and mentors
// console.log(numberOfTrainees + numberOfMentors);

// using the variables above, log a message that displays the percentage of mentors in the group

// const total = numberOfTrainees + numberOfMentors;
// const percentageOfMentors = (numberOfMentors / total) * 100;
// const percentageOfTrainees = (numberOfTrainees / total) * 100;
// const roundedPercentageOfMentors = Math.round(percentageOfMentors);
// const roundedPercentageOfTrainees = Math.round(percentageOfTrainees);
// console.log(
// 	'There are ' +
// 		roundedPercentageOfMentors +
// 		'%' +
// 		' ' +
// 		'mentors and ' +
// 		roundedPercentageOfTrainees +
// 		'%' +
// 		' ' +
// 		'trainees',
// );

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// function invert(array) {
//     //your code here
//     return array.map((num) => -num);
// }

// console.log(invert([1, 2, 3, 4, 5]));

// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

// function double(array) {
//     // Use array.map() to return a new array with each value twice
//     // as large as the corresponding value in the passed in array.
//     return array.map((num) => num * 2);
// }

// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

// function sum(array) {
//     // Use array.reduce() to find and return the
//     // sum of the values in the passed in array.
//     return array.reduce((acc, num) => acc + num);
// }


// function repeater(string, n) {
// 	//Your code goes here.
//     let result = '';
//     for (let i = 0; i < n; i++) {
//         result += string;
//     }
//     return result;
// }

// console.log(repeater('a', 5));

// .every() method

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const isEven = numbers.every((num) => num % 2 === 0);

// console.log(isEven);


// function basicOp(operation, value1, value2) {
// 	// Code
//     if (operation === '+') {
//         return value1 + value2;
//     } else if (operation === '-') {
//         return value1 - value2;
//     } else if (operation === '*') {
//         return value1 * value2;
//     } else if (operation === '/') {
//         return value1 / value2;
//     }
//     else {
//         return 'Invalid operation';
//     }
// }

// console.log(basicOp('+', 4, 7));

// function bonusTime(salary, bonus) {
// 	// your code here
//     return bonus ? `£${salary * 10}` : `£${salary}`;
// }

// console.log(bonusTime(10000, true));

// var summation = function (num) {
// 	// Code here
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// };


// function negativePositiveZero(num) {
//     if (num < 0) {
//         return 'negative';
//     } else if (num > 0) {
//         return 'positive';
//     } else {
//         return 'zero';
//     }
// }

// console.log(negativePositiveZero(0));

// function makeNegative(num) {
// 	// Code?
// 	return num < 0 ? num : -num;
// }

// function smallEnough(a, limit) {
//     // your code here
//     return a.every((num) => num <= limit);
// }