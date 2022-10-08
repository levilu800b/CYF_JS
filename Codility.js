// write a function solution that, gines an interger D (between 1 and 5) and a string S (only "one", "two", "three", "four" or "five"), returns the result of multiplying D and S expressed as an interger.

// function solution(D, S) {
// 	//your code here
// 	let results = {
// 		one: 1,
// 		two: 2,
// 		three: 3,
// 		four: 4,
// 		five: 5,
// 	};
// 	return D * results[S];
// }

// console.log(solution(4, 'two'));

// Day of the week represented as three letter strings (Mon, Tue, Wed, Thu, Fri, Sat, Sun)
// Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500), returns the day of the week that is K days later.
// For example, given S = "Wed" and K = 2, the function should return "Fri".
// Given S = "Sat" and K = 23, the function should return "Mon".

// function solution(S, K) {
// 	//your code here
// 	let days = {
// 		Mon: 1,
// 		Tue: 2,
// 		Wed: 3,
// 		Thu: 4,
// 		Fri: 5,
// 		Sat: 6,
// 		Sun: 7,
// 	};
// 	let result = (days[S] + K) % 7;
// 	return Object.keys(days)[result - 1];
// }

// console.log(solution('Sat', 23));
