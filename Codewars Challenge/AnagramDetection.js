// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My solution:

// function isAnagram(test, original) {
// 	return (
// 		test.toLowerCase().split('').sort().join('') ===
// 		original.toLowerCase().split('').sort().join('')
// 	);
// }

// console.log(isAnagram('foefet', 'toffee'));

// solution 2:

function isAnagram(test, original) {
	if (test.length !== original.length) {
		return false;
	}
	test = test.toLowerCase().split('').sort().join('');
	original = original.toLowerCase().split('').sort().join('');
	return test === original;
}

console.log(isAnagram('foefet', 'toffee'));
