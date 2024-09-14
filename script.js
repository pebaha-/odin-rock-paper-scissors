function getOptions() {
    return ["Rock", "Paper", "Scissors"];
}

function getComputerChoice() {
    return getOptions()[Math.floor(Math.random() * getOptions().length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "Rock":
                return "Tie";
            case "Paper":
                return "Loss";
            case "Scissors":
                return "Win";
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "Rock":
                return "Win";
            case "Paper":
                return "Tie";
            case "Scissors":
                return "Loss";
        }
    }
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "Rock":
                return "Loss";
            case "Paper":
                return "Win";
            case "Scissors":
                return "Tie";
        }
    }
}

function setChoices(playerSelection, computerSelection) {
    let choicesDiv = document.querySelector("#choices");
    choicesDiv.textContent = `Player chose: ${playerSelection}, Computer chose: ${computerSelection}`;
}

function resetChoices() {
    let choicesDiv = document.querySelector("#choices");
    choicesDiv.textContent = "";
}

function setScores(playerScore, computerScore) {
    let resultsDiv = document.querySelector("#results");
    resultsDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    setScores(playerScore, computerScore);
}

function resetGame() {
    resetChoices();
    resetScores();
}

let playerScore = 0;
let computerScore = 0;

setScores(playerScore, computerScore)

const container = document.querySelector("#container");
container.addEventListener('click', (event) => {
    let target = event.target;
    let playerSelection = "";

    switch (target.id) {
        case 'rockBtn':
            playerSelection = 'rock';
            break;
        case 'paperBtn':
            playerSelection = 'paper';
            break;
        case 'scissorsBtn':
            playerSelection = 'scissors';
            break;
        default:
            return;
    }
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == 'Win') {
        playerScore++;
    }
    else if (result == 'Loss') {
        computerScore++;
    }

    setChoices(playerSelection, computerSelection);
    setScores(playerScore, computerScore);

    if (playerScore >= 5) {
        alert("You won five rounds! Resetting score now.");
        resetGame();
    }
    else if (computerScore >= 5) {
        alert("Sorry, the computer won five rounds! Resetting score now.");
        resetGame();
    }
});
