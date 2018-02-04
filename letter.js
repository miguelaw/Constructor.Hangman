//Constructor function for the Letter object
let Letter = function(letter) {
    this.letter = letter;
    this.shown = '_';
    //returns the character "_" to be printed to the console
    this.printLetter = function() {
      return this.shown;
    }
    //changes the displayed character to the actual letter
    this.changeShown = function() {
      this.shown = letter;
    }
  }
  
  module.exports = Letter;