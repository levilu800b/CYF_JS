// Write a function:

// function solution(A);

// that, given an array A consisting of N integer, return the sum of all integers which are multiples of 4.

// for example, given array A as follows:

// [-6, -19, 1011, -100, 84, -22, 0, 1, 473]

// the function should return -16.

// Assume that:

// N is an integer within the range [1..1,000];
// each element of array A is an integer within the range [-10,000..10,000];
// there is at least one element in array A which satisfies the condition in the task statement.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 4 === 0) {
            sum += A[i];
        }
    }
    return sum;
}

console.log(solution([-6, -19, 1011, -100, 84, -22, 0, 1, 473]));

