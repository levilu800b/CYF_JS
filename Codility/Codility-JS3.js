// write a function
// function solution(A);
// that, given an array A of N integers, returns the maximum among all the integers which are multiples of 4.
// for example, given array A as follows:
// [-6, -91, 1011, -100, 84, -22, 0, 1, 473]
// the function should return 84.
// Assume that:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [-10,000..10,000].
// there is at least one element in array A which satisfies the condition in the task statement.

// function solution(A) {
// 	// write your code in JavaScript (Node.js 8.9.4)
// 	let max = -10000;
// 	for (let i = 0; i < A.length; i++) {
// 		if (A[i] % 4 === 0 && A[i] > max) {
// 			max = A[i];
// 		}
// 	}
// 	return max;
// }

// // write a txt file for the result of the function
// const fs = require('fs');
// const result = solution([-6, -91, 1011, -100, 84, -22, 0, 1, 473]);
// fs.writeFileSync('result.txt', result);

// run the code
// node Codility-JS3.js
