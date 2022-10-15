// ForEach example 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (item, index, array) {
    console.log(item, index);
    });

console.log(arr);

// ForEach example 2

var numbers = [2, 3, 5, 7];

var forEachNum = numbers.forEach(function (number) {
	return number;
});
console.log(forEachNum);

