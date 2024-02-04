//Count how many times a string has the letter a or A

let myString = 'BananaAa';
let letterToCount = 'a';
let occurrences = 0;

for (let i = 0; i < myString.length; i++) {
    if (myString[i].toLowerCase() === letterToCount) {
        occurrences++;
    }
}

console.log(`The letter '${letterToCount}'(case sensitive) appears ${occurrences} times in '${myString}'.`);
