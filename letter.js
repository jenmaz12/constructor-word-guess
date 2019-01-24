var Letter = function(char) {
    this.char = char;
    if (this.char !== " ") {
        this.guessed = false;
    }
    else {
        this.guessed = true;
    };
    
    this.toString = function() {
        if (this.guessed) {
            return this.char + " ";
        }
        else {
            return "_ ";
        }
    };
    this.changeGuessed = function(letter) {
        if (letter === this.char) {
            this.guessed = true;
        }
    }
};

module.exports = Letter;
