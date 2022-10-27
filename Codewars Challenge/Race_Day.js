let raceNumber = Math.floor(Math.random() * 1000);

// Create a variable that indicates whether a runner registered early or not.
// Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.

let early = true;
// Create a variable for the runner’s age and set it equal to a number.
// You’ll change this later as you test different runner conditions.
let age = 18;

// Create a control flow statement that checks whether the runner is an adult AND registered early.
// Add 1000 to their raceNumber if this is true.
if (age > 18 && early === true) {
    raceNumber += 1000;
}
// Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.
// For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.

// “Late adults run at 11:00 am”
//Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am
// Write the corresponding else if statement.
//Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.

// “Youth registrants run at 12:30 pm (regardless of registration)”
// For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.

// Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console!
// You can check your work using the examples provided in the hint.

// “Please see the registration desk.”


if (age > 18 && early === true) {
    console.log(`You will run at 9:30 am. Your race number is ${raceNumber}`);
} else if (age > 18 && early === false) {
    console.log(`You will run at 11:00 am. Your race number is ${raceNumber}`);
} else if (age < 18) {
    console.log(`You will run at 12:30 pm. Your race number is ${raceNumber}`);
} else {
    console.log('Please see the registration desk.');
}