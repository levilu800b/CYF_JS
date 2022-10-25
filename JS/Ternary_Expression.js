// Ternary Expression

let username = '';

// Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.

username ? console.log(`Hello, ${username}!`) : console.log('Hello!');

// Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.

let userQuestion = 'Will I become a werewolf tonight?';

// Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!

console.log(`${username} asked: ${userQuestion}`);

// Create another variable named randomNumber. Set its value equal to this expression, which uses two methods from the Math library:

let randomNumber = Math.floor(Math.random() * 8);

// Create a new variable named eightBall, and set its value equal to an empty string. We will save a value to this variable in the next step.

let eightBall = '';

// Write a control flow statement that checks the value saved to randomNumber. Depending on the value of randomNumber, set the value of eightBall to a reply that a Magic Eight Ball would return. Use if/else if/else or switch statements to control the possible values of randomNumber.

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

// Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.

console.log(eightBall);
