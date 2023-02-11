// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
	// your code here
    const givenString = x.toLowerCase();
    const reversedString = givenString.split('').reverse().join('');
    if (givenString === reversedString) {
        return true;
    }
    return false;
}