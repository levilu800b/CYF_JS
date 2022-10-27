// A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:

// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051
// The 20 smallest Hamming numbers are given in the Example test fixture.

// Your code should be able to compute the first 5 000 ( LC: 400, Clojure: 2 000, NASM, C, D, C++, Go and Rust: 13 282 ) Hamming numbers without timing out.

function hamming(n) {
  let hammingNumbers = [1];
  let i = 0;
  let j = 0;
  let k = 0;
  while (hammingNumbers.length < n) {
    let next = Math.min(hammingNumbers[i] * 2, hammingNumbers[j] * 3, hammingNumbers[k] * 5);
    if (next === hammingNumbers[i] * 2) i++;
    if (next === hammingNumbers[j] * 3) j++;
    if (next === hammingNumbers[k] * 5) k++;
    hammingNumbers.push(next);
  }
  return hammingNumbers[n - 1];
}

