let myString = 'Hello Worldeaeiouaeiou ahieiou';

if (
  myString.includes('a') &&
  myString.includes('e') &&
  myString.includes('i') &&
  myString.includes('o') &&
  myString.includes('u'))
 {
  console.log(`The string '${myString}' contains all vowels.`);
} else {
  console.log(`The string '${myString}' does not contain all vowels.`);
}
