// Convert String To Title Case

var input = "converT stRing To  tItle case";
console.log("Original: " + input);

var words = input.split(" "); 

for (var i = 0; i < words.length; i++) {
    var firstChar = words[i].charAt(0).toUpperCase();
    var restOfWord = words[i].slice(1).toLowerCase();
    words[i] = firstChar + restOfWord;
}

var converted = words.join(" "); 
console.log("Converted: " + converted);

