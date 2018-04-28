var Letter = require("./Letter.js")

var Word = function(){
    this.letters = [];
    this.buildWord = function(word){
        for(x in word){
            var letter = new Letter(word[x]);
            this.letters.push(letter);
        }       
    }
    this.returnWord = function(){
        console.log(this.letters.join(" "));
    }
    this.checkGuess = function(userChar){
        var validGuess = false;
        this.letters.forEach(letter => {
            if(letter.validate(userChar)){
                validGuess = true;
            }            
        })
        return validGuess;        
    }
    this.win = function(){
        var allGuessed = true;
        this.letters.forEach(letter => {
            if(!letter.guessed){
                allGuessed = false;
            }
        })
        return allGuessed;
    }
}
module.exports = Word;