const button = document.querySelector('button');
const randonNum = Math.floor((Math.random() * 100) + 1); // Generates a random number between 1-100 and stores it.
let value; // Initialization to be used for storing players input.
let guessCount = 0; // Initialization to be used for storing players guess count
let outputAdv = document.querySelector('.output-advice');
let outputGuesses = document.querySelector('.output-guess');
document.getElementById("playerGuess").disabled = false;
document.querySelector("button").disabled = false;

button.addEventListener('click', game);

function game() {
        getValue(); // Stores and parses user input
        checkValue(); // Checks if the given value is correct - Else warns player
        outputGuess(); // Prints out users guess and its guess count
        gameOver(); // If the players guess amount exceeds 5 attempts - Disables input/Guess button
}

// If the players guess amount exceeds 5 attempts - Disables input/Guess button
function gameOver() {
    if (guessCount >= 5) {
        disable();
        alert("Game Over!");
    }
}

// When called Prints out users guess and its guess count
function outputGuess() {
    outputGuesses.innerHTML += `${guessCount}. ${value} <br>`
}

// When called this will check if player input matches the random number, else it will give player a hint
function checkValue() {
    if (value == randonNum) {
        console.log("You won");
        outputAdv.innerHTML = `Your guess with ${value} is correct. You won!`;
        disable(); // Calls the function disable
    }
    else if (value < randonNum) {
        console.log("Too low.");
        outputAdv.innerHTML = `Your guess with ${value} is too low`;
    }
    else {
        console.log("Too high");
        outputAdv.innerHTML = `Your guess with ${value} is too high`;
    }
    guessCount += 1;
    console.log(guessCount)
}

// When called disables the input field and the Guess button
function disable() {
    document.getElementById("playerGuess").disabled = true;
    document.querySelector("button").disabled = true;
}

// Stores input from the player when called
function getValue() {
    value = parseInt(document.getElementById('playerGuess').value);
    console.log(randonNum)
}