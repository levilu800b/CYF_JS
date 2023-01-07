// ## `groupByCountry`
// ​
// Implement a function `groupByCountry` which takes the following type of input:
// ​
// ```js
// [
//   { country: "Belarus", city: "Brest" },
//   { country: "Russia", city: "Omsk" },
//   { country: "Russia", city: "Samara" },
//   { country: "Belarus", city: "Grodno" },
//   { country: "Belarus", city: "Minsk" },
//   { country: "Poland", city: "Lodz" },
// ];
// ```
// ​
// - an array of objects listing cities and the country they're in
// ​
// The function should return a new object with each country as a key and a list of all the countries for that particular country. For example, for the input above the function should return:
// ​
// ```js
// {
//   "Belarus": ["Brest", "Grodno", "Minsk"],
//   "Russia" : ["Omsk", "Samara"],
//   "Poland" : ["Lodz"]
// }
// ```

