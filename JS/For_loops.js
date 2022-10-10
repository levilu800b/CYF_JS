// const firstName = "Meron";

// for (let i = 0; i < firstName.length; i++) {
// 	console.log(firstName[i]);
// }

// Write a program that prints the first 12 lines in the 7 times table. The output should look like this:

// 1 x 7 = 7
// 2 x 7 = 14

// for (let i = 1; i <= 12; i++) {
// 	console.log(`${i} x 7 = ${i * 7}`);
// }


// find numbers which are divisible by given number

// function divisibleBy(numbers, divisor) {
//     let result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % divisor === 0) {
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// }

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

//Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

// function multiTable(number) {
//     let result = '';
//     for (let i = 1; i <= 10; i++) {
//         result += `${i} * ${number} = ${i * number}${i === 10 ? '' : '\n'}`;
//     }
//     return result;
// }

// console.log(multiTable(5));

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

// function spinWords(string) {
// 	//TODO Have fun :)
// 	let words = string.split(' ');
// 	let newWords = [];
// 	for (let i = 0; i < words.length; i++) {
// 		if (words[i].length >= 5) {
// 			let word = words[i].split('');
// 			let newWord = word.reverse();
// 			let joinedWord = newWord.join('');
// 			newWords.push(joinedWord);
// 		} else {
// 			newWords.push(words[i]);
// 		}
// 	}
// 	let newString = newWords.join(' ');
// 	return newString;
// }

// console.log(spinWords('Hello World!'));
