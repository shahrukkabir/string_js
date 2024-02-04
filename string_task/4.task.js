//If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let myString = 'A fox and a box';

if (myString.includes('x')) {
    myString = myString.replace(/x/g, 'y');
}

if (myString.includes('X')) {
    myString = myString.replace(/X/g, 'Y');
}

console.log(`Modified string: ${myString}`);
