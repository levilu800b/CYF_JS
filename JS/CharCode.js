// charcode for a string

let str = 'hello';

for (let i in str) {
    if (str.hasOwnProperty(i)) {
        console.log(str[i]);
    } else { 
        console.log('nope');
    }
}