// DESCRIPTION:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

// My solution:
function nextBigger(n) {
    const digits = n.toString().split('');
    let i = digits.length - 1;
    while (i > 0 && digits[i - 1] >= digits[i]) {
        i--;
    }
    if (i <= 0) {
        return -1;
    }
    let j = digits.length - 1;
    while (digits[j] <= digits[i - 1]) {
        j--;
    }
    const temp = digits[i - 1];
    digits[i - 1] = digits[j];
    digits[j] = temp;
    digits.splice(i, digits.length - i, ...digits.slice(i).reverse());
    return parseInt(digits.join(''));
    }

    