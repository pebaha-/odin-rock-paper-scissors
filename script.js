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

function game() {
    alert("Welcome to Rock Paper Scissors. You will now play five rounds against the computer.")
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose either 'rock', 'paper', or 'scissors'");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            case "Win":
                alert("You win! Computer chose " + computerSelection);
                break;
            case "Loss":
                alert("You lost. Computer chose " + computerSelection);
                break;
            case "Tie":
                alert("It's a tie! You both chose " + computerSelection);
                break;
            default:
                alert("Huh? This shouldn't happen.");
                break;
        }
    }
}

game();