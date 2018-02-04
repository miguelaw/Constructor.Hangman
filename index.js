var inquirer = require("inquirer");
let SelWord = require("./word.js");
let Letter = require("./letter.js");

let word = SelWord.SelectWord();
//selectedWord gets the random word from the variable word located inside the selectedWord function
let selectedWord = word.word;
let letters = [];
for (var i = 0; i < selectedWord.length; i++) {
    letters.push(new Letter(selectedWord.charAt(i)));
}
let guessesLeft = 5;
userGuess();

//recursive function that gets called as long as the word has not been guessed and there are guesses left
function userGuess() {
    displayWord();
    inquirer.prompt({
            name: "letter",
            message: "Please enter a letter:"
        })
        .then(function(answer) {

            if (word.checkLetter(answer.letter, letters) == true) {
                console.log("Good job!");
            } else {
                guessesLeft--;
                if (guessesLeft > 0) {
                    console.log("Incorrect. You have " + guessesLeft + " guesses left.");
                } else {
                    console.log("Incorrect. Game over! :(");
                    console.log("The Correct Word was: " + selectedWord);
                }

            }

            if (word.checkIfSolved(letters) == false) {
                if (guessesLeft > 0) {
                    userGuess();
                }
            } else {
                displayWord();
                console.log("You win! :)");
            }

        });
}

//Function that displays the hidden chosen word 
function displayWord() {
    let displayedWord = "";
    for (var i = 0; i < letters.length; i++) {
        displayedWord += letters[i].printLetter();
        displayedWord += " ";
    }
    console.log(displayedWord);
}