var Letter = function(value){
    this.guessed = false;
    this.value = value;
    this.toString = function(){
        if(this.guessed){
            return this.value;
        }
        else{
            return "_";
        }
    };
    this.validate = function(guessValue){
        var validGuess = false;
        if(guessValue.toUpperCase() === this.value.toUpperCase()){
            this.guessed = true;
            validGuess = true;
        }
        return validGuess;
    };
}

module.exports = Letter;