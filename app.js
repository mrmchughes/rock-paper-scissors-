//sets scores and score displays//
const player = {
    score: 0,
    display: document.querySelector('#playerDisplay'),
}

const computer = {
    score: 0,
    display: document.querySelector('#computerDisplay'),
}

//sets buttons, sets winningScore, has game start//
const buttons = document.querySelectorAll('.buttons');
const resetButton = document.querySelector('#resetButton');
const winningScore = 3;
let isGameOver = false;


//computer choice//
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return(choices[randomChoice]);
};


//game logic//
function playRound(playerSelection) {
    //what playRound uses to make choice for the computer//
    let computerSelection = computerPlay()

    //if gameOver is not true, function proceeds as normal until the winning score is reached//
    //when the player wins, the player score is incremented by 1, and the same for the computer when it wins//
    if (!isGameOver){
        if (playerSelection == computerSelection) {
            result = "That is a tie! Try again!";
        } 

        else if (playerSelection == 'Rock') {
            if (computerSelection == 'Paper') {
                result = "You lost! Paper beats Rock.";
                computer.score += 1;
            } else {
                result = "You win! Rock beats Scissors.";
                player.score += 1;
            }
        }

        else if (playerSelection == 'Paper') {
            if (computerSelection == 'Scissors') {
                result ="You lost! Scissors beats Paper.";
                computer.score += 1;
            } else {
                result = "You win! Paper beats Rock.";
                player.score += 1;
            }
        }

        else if (playerSelection == 'Scissors') {
            if (computerSelection == 'Rock') {
                result = "You lost! Rock beats Scissors.";
                computer.score += 1;
            } else {
                result ="You win! Scissors beats Paper.";
                player.score += 1;
            }
        }
        //once either the player or computer score reach the winning score, triggers isGameOver = true//
        //updates the winner and loser displays with green and red, and disables all buttons except for reset//
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            computer.display.classList.add('loser');
            buttons.disabled = true;
        } else if (computer.score === winningScore) {
            isGameOver = true;
            computer.display.classList.add('winner');
            player.display.classList.add('loser');
            buttons.disabled = true;
        }
        //updates the scores each time playRound is called//
        player.display.textContent = player.score;
        computer.display.textContent = computer.score;
    }
    //displays the winning and losing message each time playRound is called//
    document.getElementById('result').innerHTML = result
    return
};

//in the future, I would like to add an img that displays the choice for both the player and the computer//


//makes the button values work//
buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

//triggers game reset//
resetButton.addEventListener('click', reset)

//reset function//
function reset() {
    isGameOver = false;
    for (let i of [player, computer]){
        i.score = 0;
        i.display.textContent = 0;
        i.display.classList.remove('winner', 'loser');
    }
    document.getElementById('result').innerHTML = '';
}