// Count how many times a string has the letter a

let myString = 'banana';
let letterToCount = 'a';
let occurrences = 0;

for (let i = 0; i < myString.length; i++) {
    if (myString[i] === letterToCount) {
        occurrences++;
    }
}

console.log(`The letter '${letterToCount}' appears ${occurrences} times in '${myString}'.`);
