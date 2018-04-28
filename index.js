var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordsToGuess = ["DEMOGORGON", "EXPERIMENT", "PORTAL", "LABORATORY", "GATE", "TELEKINESIS", 
"TELEPATHY", "POLLYWOG", "ELEVEN"];
var chosen = "testWord"; 
  
var word = new Word();
startGame();

function startGame(){
    var numGuesses = 10;
    //build random word from array into Word object
    chosen = getRandomWord();  
    word.buildWord(chosen);
    word.returnWord();
    //start game!
    playGame(word, numGuesses);
}

function playGame(word, numGuesses){
    //if user still has guesses left
    if(numGuesses > 0 ){
        inquirer.prompt([
            {
                type: "input",
                name: "userGuess",
                message: "Guess a letter!"
            }
        ]).then(function(answer){
            if(word.checkGuess(answer.userGuess)){
                console.log("Correct!")
            }
            else{
                console.log ("Wrong");
                numGuesses--;
            }
            //display word/dashes after guess has been made
            word.returnWord();

            if(numGuesses == 0){
                console.log("You ran out of guesses. You lost!");
            }
            else if(!word.win()){
                playGame(word, numGuesses); 
            }
            else{
                console.log("Congrats you won!");
            }        
        })
    }
    
}

function getRandomWord(){
    return wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
}

