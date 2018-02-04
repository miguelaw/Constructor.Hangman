### Constructor Hangman:

This week's project consisted of creating a hangman game, which was command-line based, using different constructor functions and then calling them onto different files using "module.exports".



## Some details about its construction:

* This game receives user input using the `inquirer` or `prompt` npm packages.
(to install type in the terminal: npm install ,and then press enter)
* A constructor, named SelectWord, is used to create an object representing the current word the user is attempting to guess.
* A constructor, named Letter, is used to print each correct letter in the current word. Also each letter object displays an underlying character if the user has not guessed the letter.
* This app also keeps track of the user's remaining guesses and will notify the user "Game Over" if none remain.
* And lastly, each constructor function is in it's own file and is exported to another file wherever needed. 


Thank you for checking out my work! 