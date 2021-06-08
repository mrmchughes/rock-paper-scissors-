function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return(choices[randomChoice]);
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "That is a tie! Try again!";
    } 

    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            return "You lost! Paper beats Rock.";
        } else {
            return "You win! Rock beats Scissors.";
        }
    }

    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Scissors') {
            return "You lost! Scissors beats Paper.";
        } else {
            return "You win! Paper beats Rock.";
        }
    }

    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            return "You lost! Rock beats Scissors.";
        } else {
            return"You win! Scissors beats Paper.";
        }
    }
};

let playerSelection = 'Paper';
let computerSelection = computerPlay();

function game() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
}
console.log(game()); 

//computerPlay and playRound seem to work fine, getting game() to call a unique instance of playRound each time seems to be the issue at present, since it is the same result five times//