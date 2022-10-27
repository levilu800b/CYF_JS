// Description:

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

// SOLUTION:


var list1 = [
	{
		firstName: 'Noah',
		lastName: 'M.',
		country: 'Switzerland',
		continent: 'Europe',
		age: 19,
		language: 'JavaScript',
	},
	{
		firstName: 'Maia',
		lastName: 'S.',
		country: 'Tahiti',
		continent: 'Oceania',
		age: 28,
		language: 'JavaScript',
	},
	{
		firstName: 'Shufen',
		lastName: 'L.',
		country: 'Taiwan',
		continent: 'Asia',
		age: 35,
		language: 'HTML',
	},
	{
		firstName: 'Sumayah',
		lastName: 'M.',
		country: 'Tajikistan',
		continent: 'Asia',
		age: 30,
		language: 'CSS',
	},
];


// call a function that counts a dev from EU

function countDevelopersFromEurope(list) {
  // Check there are developers from europe if yes count then and return the result
  // loop over the array
  // if there is no developer from europe return 0
  let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
            count++;
        }
        }
        return count;
}

let count = countDevelopersFromEurope(list1);
console.log(`There are ${count} developers from Europe`);