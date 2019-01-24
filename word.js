var Letter = require("./letter.js");

var Word = function(word) {
    this.characters = word.toLowerCase().split("");
    this.letters = [];
    for (let i=0; i < this.characters.length; i++) {
        this.letters[i] = new Letter (this.characters[i]);
    }
    // this.letterObjects = function() {
    //     let objects = [];
    //     for (let i=0; i < this.characters.length; i++) {
    //         if (this.characters[i] !== " ") {
    //             let letter = new Letter (this.characters[i]);
    //             objects.push(letter);
    //         }
                
    //     }
    //     console.log(objects);
    // };
    this.stringWord = function() {
        // create empty string that will hold concatenated letters/underscores
        // loop through letters objects array and call toString for each and append to empty string
        let str = "";
        for (let i=0; i<this.letters.length; i++) {
            str = str + this.letters[i].toString();
        }

        return str;

    }

    this.checkGuess = function(guess) {
        for (let i=0; i<this.letters.length; i++) {
            this.letters[i].changeGuessed(guess);
        }
    }
}

module.exports = Word;
