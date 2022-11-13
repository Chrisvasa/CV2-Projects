const buttons = document.querySelectorAll('button');
const choices = ["rock", "paper", "scissors"];
let resultOutput = document.querySelector('.winner');
let playerOutput = document.querySelector('.player-pick');
let computerOutput = document.querySelector('.computer-pick');
const playerWin = "Player";
const computerWin = "Computer";
let playerPoints = 0;
let computerPoints = 0;
game();

function game() {
    buttons.forEach(function (button) {
        button.addEventListener('click', function() {
            button = this.value;
            handleClick(button);
        })
    })
}

function handleClick(button) {
    if (button == "reset") {
        resetGame();
    }
    else {
        gameplay(button);
    }
}
// A function that takes in the button value from the clicked button, and then stores it. 
// also calls and stores the computerChoice
// Then it checks if its a draw or who won
function gameplay(button) {
    const playerChoice = button;
    const compChoice = computerChoice();
    playerOutput.innerHTML = `${button}`.toUpperCase();
    computerOutput.innerHTML = `${compChoice}`.toUpperCase();

    if (playerChoice == compChoice) {
        printChoices(1)
    }
    else if (playerChoice == "rock" && compChoice == "scissors") {
        printChoices(playerWin);
        pointCalculator(playerWin)
    }
    else if (playerChoice == "paper" && compChoice == "rock") {
        printChoices(playerWin);
        pointCalculator(playerWin)
    }
    else if (playerChoice == "scissors" && compChoice == "paper") {
        printChoices(playerWin);
        pointCalculator(playerWin)
    }
    else {
        printChoices(computerWin);
        pointCalculator(computerWin)
    }

}

function pointCalculator(winner) {
    if (winner == playerWin) {
        playerPoints += 1;
        document.querySelector('.score-output-player').innerHTML = playerPoints;
        if (playerPoints == 10) {
            alert("Player has won");
        }
    }
    else if (winner == computerWin) {
        computerPoints += 1;
        document.querySelector('.score-output-computer').innerHTML = computerPoints;
        if (computerPoints == 10) {
            alert("Computer has won")
        }
    }
    else {
        return;
    }
}

// A function that will print out two different strings depending on the case
function printChoices(winner) {
    switch(winner) {
        case 1:
            resultOutput.innerHTML = `Nobody has won this round. It's a draw!`;
            break;
        default:
            resultOutput.innerHTML = `The ${winner} has won this round!`;
            break;
    }
}
// A function that randomizes a number between 1 and 3, then returns this value.
function computerChoice() {
    const index = Math.floor(Math.random() * 3)
    const compMove = choices[index];
    return compMove;
}

function resetGame() {
    document.location.reload();
    console.log("Game has been reset!")
}