// Switch method

let athleteFinalPosition = 'first place';

// Let’s write a switch statement to decide what medal to award an athlete. athleteFinalPosition is already defined at the top of main.js. So start by writing a switch statement with athleteFinalPosition as its expression.

switch (athleteFinalPosition) { 
    case 'first place': 
        console.log('You get the gold medal!');
        break;      
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
}