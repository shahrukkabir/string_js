//split()

// The split() method is used to split a ** string into an array ** of substrings based on a specified delimiter.

let sentence = 'I am learning JavaScript';

//let wordsArray = sentence.split();  //[ 'I am learning JavaScript' ]
// let wordsArray = sentence.split('');   
// let wordsArray = sentence.split('a');   

/*  [
    'I', ' ', 'a', 'm', ' ',
    'l', 'e', 'a', 'r', 'n',
    'i', 'n', 'g', ' ', 'J',
    'a', 'v', 'a', 'S', 'c',
    'r', 'i', 'p', 't'
  ]
*/

let wordsArray = sentence.split(' ');   // ['I', 'am', 'learning', 'JavaScript']
console.log(wordsArray); 

let joinedString = wordsArray.join( ' ' );

console.log(joinedString); 
