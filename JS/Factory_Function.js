// Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!
// Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.
// Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        },
    };
};

// Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.

const tinCan = robotFactory('P-500', true);

// Let’s now check what tinCan can do! Call .beep() on tinCan.
// You should see 'Beep Boop' printed to the console which means the factory function produced a robot object! Play around with tinCan to check the other properties!

tinCan.beep();

function robotFactory(model, mobile) {
	return {
		model: model,
		mobile: mobile,
		beep() {
			console.log('Beep Boop');
		},
	};
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// Use the property value shorthand and refactor the factory function in main.js
// to use it.

// function robotFactory(model, mobile) {
//     return {
//         model,
//         mobile,
//         beep() {
//             console.log('Beep Boop');
//         },
//     };
// }

// // To check that the property value shorthand technique worked:
// const newRobot = robotFactory('P-501', false);  
// console.log(newRobot.model);
// console.log(newRobot.mobile);

// const robot = {
// 	model: '1E78V2',
// 	energyLevel: 100,
// 	functionality: {
// 		beep() {
// 			console.log('Beep Boop');
// 		},
// 		fireLaser() {
// 			console.log('Pew Pew');
// 		},
// 	},
// };

// Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.
// If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.

// const { functionality } = robot;

// Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.
// Take advantage of this shortcut and call the .beep() method on functionality.

// functionality.beep();

// const robot = {
// 	model: 'SAL-1000',
// 	mobile: true,
// 	sentient: false,
// 	armor: 'Steel-plated',
// 	energyLevel: 75,
// };

// // What is missing in the following method call?
// const robotKeys = Object.keys(robot);

// console.log(robotKeys);

// // Declare robotEntries below this line:
// const robotEntries = Object.entries(robot);

// console.log(robotEntries);

// // Declare newRobot below this line:
// const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot);
// console.log(newRobot);