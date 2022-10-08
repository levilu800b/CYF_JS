// An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile) (run, raced in that order and without a break. It hurts... trust me.

// Your task is to take a distance that an athlete is through the race, and return one of the following:

// If the distance is zero, return 'Starting Line... Good Luck!'.

// If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

// If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.

// If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.

// If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

// Finally, if the athlete has completed te distance, return "You're done! Stop running!".

// All distance should be calculated to two decimal places.

// function iTri(s) {
// 	//its gonna be a long day!
//     let distance = 140.6 - s;
//     if (s === 0) {
//         return 'Starting Line... Good Luck!';
//     } else if (s > 0 && s <= 2.4) {
//         return { Swim: distance.toFixed(2) + ' to go!' };
//     } else if (s > 2.4 && s <= 114.4) {
//         return { Bike: distance.toFixed(2) + ' to go!' };
//     } else if (s > 114.4 && s < 130.6) {
//         return { Run: distance.toFixed(2) + ' to go!' };
//     } else if (s >= 130.6 && s < 140.6) {
//         return { Run: 'Nearly there!' };
//     } else if (s >= 140.6) {
//         return "You're done! Stop running!";
//     } else {
//         return 'Error!';
//     }
// }

// console.log(iTri(0));

// function getVoteCount(votes) {
//     return votes.upvotes - votes.downvotes;
// }

// You are given an array of positive and negative integers and a number n and n > 1. The array may have elements that occurs more than once. Find all the combinations of n elements of the array that their sum are 0.

// arr = [1, -1, 2, 3, -2]
// n = 3
// find_zero_sum_groups(arr, n) == [-2, -1, 3] # -2 - 1 + 3 = 0
// The function should ouput every combination or group in increasing order.

// We may have more than one group:

// arr = [1, -1, 2, 3, -2, 4, 5, -3 ]
// n = 3
// find_zero_sum_groups(arr, n) == [[-3, -2, 5], [-3, -1, 4], [-3, 1, 2], [-2, -1, 3]]
// In the case above the function should output a sorted 2D array.

// The function will not give a group twice, or more, only once.

// arr = [1, -1, 2, 3, -2, 4, 5, -3, -3, -1, 2, 1, 4, 5, -3 ]
// n = 3
// find_zero_sum_groups(arr, n) == [[-3, -2, 5], [-3, -1, 4], [-3, 1, 2], [-2, -1, 3]]
// If there are no combinations with sum equals to 0, the function will output an alerting message.

// arr = [1, 1, 2, 3]
// n = 2
// find_zero_sum_groups(arr, n) == "No combinations"
// If the function receives an empty array will output an specific alert:

// arr = []
// n = 2
// find_zero_sum_groups(arr, n) == "No elements to combine"

// function find_zero_sum_groups(arr, n) {
//     //your code here
//     let result = [];
//     let sum = 0;
//     let temp = [];
//     if (arr.length === 0) {
//         return 'No elements to combine';
//     } else if (n > arr.length) {
//         return 'No combinations';
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = i + 1; j < arr.length; j++) {
//                 for (let k = j + 1; k < arr.length; k++) {
//                     if (arr[i] + arr[j] + arr[k] === 0) {
//                         temp.push(arr[i], arr[j], arr[k]);
//                         result.push(temp);
//                         temp = [];
//                     }
//                 }
//             }
//         }
//     }
//     return result;
// }