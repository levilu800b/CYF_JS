// Write a function that takes a string as input and returns the longest contiguous substring that is a palindrome.

// For example:

// Given "aibohphobia" your function should return "aibohphobia"

// solution

function longestPalindrome(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let sub = str.slice(i, j + 1);
            if (sub.length > longest.length && isPalindrome(sub)) {
                longest = sub;
            }
        }
    }
    return longest;
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(longestPalindrome('aibohphobia'));