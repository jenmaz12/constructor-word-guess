const Word = require("./word.js");
const inquirer = require("inquirer");
let wordBank = ["Titanic", "Forrest Gump", "A Few Good Men", "Shawshank Redemption", "Remember the Titans", "Harry Potter", "The Wizard of Oz", "The Sound of Music", "Pitch Perfect", "Star Wars", "Rocky", "Wedding Crashers", "The Proposal", "When Harry Met Sally..."];
let currentWord;

function guessing() {
    inquirer
        .prompt([
           {
            name: "guess",
            type: "input",
            message: "Guess a letter!"
           }
        ])
        .then(function(answer){
            currentWord.checkGuess(answer.guess);
            console.log(currentWord.stringWord());

            if (currentWord.stringWord().includes("_ ")) {
                guessing();
            }
            else {
                playAgain();
            }
        })
}

function startGame() {
    currentWord = new Word(wordBank[Math.floor(Math.random() * (wordBank.length - 1))]);
    console.log(currentWord.stringWord());    
};

function playAgain() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "playAgain",
                message: "Would you like to play again?",
                choices: ["Yes", "No"]
            }
        ])
        .then(function(answer) {
            if (answer.playAgain === "Yes") {
                startGame();
                guessing();
            }
            else {
                console.log("Thanks for playing!");
            }
        })
}

startGame();
guessing();
