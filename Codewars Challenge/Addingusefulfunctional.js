// DESCRIPTION:
// The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum . Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

// Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]

// Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3 Example: Array.range(-1,4).sum() should return 2

// While not forbidden try to write both function without using a for loop

// My solution:

Array.range = function(start, count) {
    return Array.apply(0, Array(count))  // apply(0, Array(count)) creates an array of length count with undefined values in it 
        .map(function(element, index) { // map() creates a new array with the results of calling a provided function on every element in this array
        return index + start;  // index + start is the value of the element in the new array 
        });
    };

Array.prototype.sum = function() {
    return this.reduce(function(a, b) { return a + b; }, 0); // reduce() applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
};

console.log(Array.range(0, 3));