const robot = {
	model: '1E78V2',
	energyLevel: 100,
};

// Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:
// I am MODEL and my current energy level is ENERGYLEVEL.
// Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!

robot.provideInfo = function () {
	return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
};

// Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.

console.log(robot.provideInfo());

const robot = {
	energyLevel: 100,
	checkEnergy: () => {
		console.log(`Energy is currently at ${this.energyLevel}%.`);
	},
};

robot.checkEnergy();

// Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.
// Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.
// After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.

const robot = {
	energyLevel: 100,
	checkEnergy() {
		console.log(`Energy is currently at ${this.energyLevel}%.`);
	},
};

robot.checkEnergy();

const robot = {
	_energyLevel: 100,
	recharge() {
		this._energyLevel += 30;
		console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
	},
};

robot._energyLevel = 'high';

// Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.
// What will happen now that _energyLevel isn’t a number?
// Call .recharge() on robot to find out.
// Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties.

robot.recharge();

const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
};

// In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
	get energyLevel() {
		return this._energyLevel;
	},
};

// Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.
// Make sure you return the string and not logging it to the console.

const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
	get energyLevel() {
		if (typeof this._energyLevel === 'number') {
			return `My current energy level is ${this._energyLevel}`;
		} else {
			return 'System malfunction: cannot retrieve energy level';
		}
	},
};

// If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.
// Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
	get energyLevel() {
		if (typeof this._energyLevel === 'number') {
			return `My current energy level is ${this._energyLevel}`;
		} else {
			return 'System malfunction: cannot retrieve energy level';
		}
	},
};

// Log the result of calling the getter method energyLevel on robot to the console.
// Notice that the method will return a formatted response rather than just accessing a property!

console.log(robot.energyLevel);


const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
	_numOfSensors: 15,
	get numOfSensors() {
		if (typeof this._numOfSensors === 'number') {
			return this._numOfSensors;
		} else {
			return 'Sensors are currently down.';
		}
	},
};

// Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem.
// Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.';
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};

// There are a couple of things we should do in the setter method:
// Add a check to see if num is a number using the typeof operator.
// num should also be greater than or equal to 0.
// If both conditions are met, reassign this._numOfSensors to num.

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.';
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};

// Use the numOfSensors setter method on robot to assign _numOfSensors to 100.

robot.numOfSensors = 100;

// To check that the setter method worked, console.log() robot.numOfSensors.

console.log(robot.numOfSensors);