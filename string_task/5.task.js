//Capitalize Every first Letter of each word in a String

let myString = 'converT stRing To  tItle case';

let words = myString.split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let capitalizedString = words.join(' ');

console.log(`Original string: ${myString}`);
console.log(`Capitalized string: ${capitalizedString}`);
