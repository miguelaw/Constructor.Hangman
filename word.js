let Word = require("./wordChecker.js");

// Function that contains the word choice, and the randomizer
let SelectWord = function() {
    let words = ["rottweiler", "bulldog", "beagle", "dobermann", "boxer", "akita", "greyhound", "saluki", "pointer", "bullmastiff"];
    let num = Math.floor(Math.random() * 10);
    let word = new Word(words[num]);
    return word;
}


module.exports = {SelectWord};
