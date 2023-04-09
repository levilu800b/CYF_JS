// Write a function
// function solution(A);
// that, given an array A consisting of N integers, returns the minimum among all integers which are multiples of 11.
// For example, given array A as follows:
// [-6, -91, 1011, -100, 84, -22, 0, 1, 473]
// the function should return -22.
// Assume that:
// N is an integer within the range [1..1,000];
// each element of array A is an integer within the range [-10,000..10,000].
// there is at least one element in array A which satisfies the condition in the task statement.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min = 10000;
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 11 === 0 && A[i] < min) {
            min = A[i];
        }
    }
    return min;
}
