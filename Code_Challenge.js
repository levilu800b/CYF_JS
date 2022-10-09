// An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile) (run, raced in that order and without a break. It hurts... trust me.

// Your task is to take a distance that an athlete is through the race, and return one of the following:

// If the distance is zero, return 'Starting Line... Good Luck!'.

// If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

// If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.

// If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.

// If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

// Finally, if the athlete has completed te distance, return "You're done! Stop running!".

// All distance should be calculated to two decimal places.

// function iTri(s) {
// 	//its gonna be a long day!
//     let distance = 140.6 - s;
//     if (s === 0) {
//         return 'Starting Line... Good Luck!';
//     } else if (s > 0 && s <= 2.4) {
//         return { Swim: distance.toFixed(2) + ' to go!' };
//     } else if (s > 2.4 && s <= 114.4) {
//         return { Bike: distance.toFixed(2) + ' to go!' };
//     } else if (s > 114.4 && s < 130.6) {
//         return { Run: distance.toFixed(2) + ' to go!' };
//     } else if (s >= 130.6 && s < 140.6) {
//         return { Run: 'Nearly there!' };
//     } else if (s >= 140.6) {
//         return "You're done! Stop running!";
//     } else {
//         return 'Error!';
//     }
// }

// console.log(iTri(0));

// function getVoteCount(votes) {
//     return votes.upvotes - votes.downvotes;
// }

// Description:

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// Solution:

// function createPhoneNumber(numbers) {
//     let num = numbers.join('');
//     return `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6)}`;
// }

// DESCRIPTION:

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Solution:

// function moveZeros(arr) {
//     return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0));
// }

// DESCRIPTION:
// Story
// Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

// Input
// The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input.

// Example
// ['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)

// Solution:

// function mixFruit(arr) {
//     let price = 0;
//     arr.forEach((x) => {
//         if (x.toLowerCase() === 'banana' || x.toLowerCase() === 'orange' || x.toLowerCase() === 'apple' || x.toLowerCase() === 'lemon' || x.toLowerCase() === 'grapes') {
//             price += 5;
//         } else if (x.toLowerCase() === 'avocado' || x.toLowerCase() === 'strawberry' || x.toLowerCase() === 'mango') {
//             price += 7;
//         } else {
//             price += 9;
//         }
//     });
//     return Math.round(price / arr.length);
// }

// DESCRIPTION:
// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null

// Solution:

// function uniqueSum(lst) {
// 	//your magic code goes here
//     // expected null
//     if (lst.length === 0) {
//         return null;
//     } else {
//         let sum = 0;
//         let unique = [];
//         lst.forEach((x) => {
//             if (!unique.includes(x)) {
//                 unique.push(x);
//                 sum += x;
//             }
//         });
//         return sum;
//     }
// }

// DESCRIPTION:
// Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

// Example:
// sequence : [2,4,6,8,1,2,5,4,3,2]
// predicate: is an even number
// result   : [2,4,6,8]
// Your task is to implement the takeWhile function.

// Solution:

// function takeWhile(arr, pred) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (pred(arr[i])) {
//             result.push(arr[i]);
//         } else {
//             break;
//         }
//     }
//     return result;
// }