// Reduce Method

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var sum = arr.reduce(function (a, b) {
// 	return a + b;
// });

// console.log(sum);

// Reduce method in an object

var arr = [
    { name: "John", age: 20 },
    { name: "Peter", age: 30 },
    { name: "John", age: 40 },
    { name: "Peter", age: 50 },
    { name: "John", age: 60 },
];

var sum = arr.reduce(function (a, b) {
    return a + b.age;
}
    , 0);

console.log(sum);

// let array = [100, 200, 300];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// let total = array.reduce((a, b) => a + b);

// console.log(total);


// function reduce(array, func, seed) {
//   let previousResult;
//   if (seed === undefined) {
//     previousResult = array[0];
//     for (let i = 1; i < array.length; i++) {
//       previousResult = func(previousResult, array[i], i, array);
//     }
//     console.log(previousResult);
//   } else {
//     previousResult = seed;
//     each(array, function(e, i, a) {
//       previousResult = func(previousResult, e, i, array);
//     });
//   }
//   return previousResult;
// }

// console.log(reduce);