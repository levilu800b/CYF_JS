// Write a function that takes an array of integers as input and returns the smallest integer in the array.

// For example:

// Given [34, 15, 88, 2] your function should return 2

// Given [34, -345, -1, 100] your function should return -345

// You can assume, for the purpose of this challenge, that the supplied array will not be empty.

// My solution

function findSmallestInt(args) {
    return Math.min(...args);
    }

console.log(findSmallestInt([34, 15, 88, 2]));