// Write a function `exactly` that accepts an array, a number, and a callback as
// arguments.
// The function should return a boolean indicating whether or not there are
// exactly `number` elements of the array that return true when passed into the callback.
let exactly = function(array, number, callback) {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        // We know that array[index] will be every element
        const element = array[index];
        if (callback(element)) {
            count++;
        }
    }
}