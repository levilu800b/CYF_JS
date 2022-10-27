// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.
// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

// var group = {
//     A: 20, 
//     B: 15, 
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}

function splitTheBill(x) {
	//code away...
    let total = 0;
    let count = 0;
    for (let key in x) {
        total += x[key];
        count++;
    }
    let average = total / count;
    for (let key in x) {
        x[key] = Math.round((x[key] - average) * 100) / 100;
    }
    return x;
}

// use different method to solve this problem
function splitTheBill(x) {
    var sum = 0;
    for(var item in x) {
        sum += x[item];
    }
    var result = {};
    for(var item in x) {
        result[item] = Number((x[item] - sum / Object.keys(x).length).toFixed(2));
    }
    return result;
}

// use different method to solve this problem
function splitTheBill(x) {
    var avg = Object.values(x).reduce((a, b) => a + b) / Object.keys(x).length;
    return Object.keys(x).reduce((a, b) => (a[b] = +(x[b] - avg).toFixed(2), a), {});
}

// use different method to solve this problem
function splitTheBill(x) {
    var sum = Object.values(x).reduce((a, b) => a + b);
    var avg = sum / Object.keys(x).length;
    return Object.keys(x).reduce((a, b) => (a[b] = +(x[b] - avg).toFixed(2), a), {});
}
