// const arr = [1, 3, 5, 7, 9, 100];

// function getIndex(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }
// console.log(getIndex(arr, 5)); // 2
// console.log(getIndex(arr, 100)); // 5
// console.log(getIndex(arr, 1)); // 0


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function square(num) {
//     return num * num;
// }

// for (let i = 0; i < number.length; i++) {
//     console.log(square(number[i]));
// }

// const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];

// fruits[(1, 4)] = 'raspberry', 'pineapple';

// // console.log(fruits[2]);
// // console.log(fruits[3]);
// // console.log(fruits[5]);
// // console.log(fruits[0]);

// console.log(fruits);

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// function sortArray(array) {
// 	let oddArray = [];
// 	let evenArray = [];
// 	let newArray = [];
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] % 2 === 0) {
// 			evenArray.push(array[i]);
// 		} else {
// 			oddArray.push(array[i]);
// 		}
// 	}
// 	oddArray.sort(function(a, b) {
// 		return a - b;
// 	});
// 	for (let j = 0; j < array.length; j++) {
// 		if (array[j] % 2 === 0) {
// 			newArray.push(evenArray.shift());
// 		} else {
// 			newArray.push(oddArray.shift());
// 		}
// 	}
// 	return newArray;
// }


// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// function deleteNth(arr, n) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let count = 0;
// 		for (let j = 0; j < newArr.length; j++) {
// 			if (arr[i] === newArr[j]) {
// 				count++;
// 			}
// 		}
// 		if (count < n) {
// 			newArr.push(arr[i]);
// 		}
// 	}
// 	return newArr;
// }

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//     let newArr = [];
//     for (let i = 0; i < a.length; i++) {
//         if (b.indexOf(a[i]) === -1) {
//             newArr.push(a[i]);
//         }
//     }
//     return newArr;
// }

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// function isSortedAndHow(array) {
//     let ascending = array.slice().sort((a, b) => a - b);
//     let descending = array.slice().sort((a, b) => b - a);
//     if (array.toString() === ascending.toString()) {
//         return 'yes, ascending';
//     } else if (array.toString() === descending.toString()) {
//         return 'yes, descending';
//     } else {
//         return 'no';
//     }
// }

// console.log(isSortedAndHow([1, 2])); // yes, ascending


// DESCRIPTION:
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Solution:

function flattenAndSort(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j]);
        }
    }
    return newArray.sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));