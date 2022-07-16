function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3);
    let choiceHand;
    switch (choiceNum) {
        case 0:
            choiceHand = "Rock";
            break;
        case 1:
            choiceHand = "Paper";
            break;
        case 2:
            choiceHand = "Scissor";
            break;
        default:
            console.log("Computer can't play");
    }
    return choiceHand;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(-1).toUpperCase() + playerSelection.slice(1).toLowerCase();

    let playerOutcome;
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    playerOutcome = "Draw";
                    break;
                case "Paper":
                    playerOutcome = "Lose";
                    break;
                case "Scissor":
                    playerOutcome = "Win";
                    break;
            }
            break;

        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    playerOutcome = "Win";
                    break;
                case "Paper":
                    playerOutcome = "Draw";
                    break;
                case "Scissor":
                    playerOutcome = "Lose";
                    break;
            }
            break;
            
        case "Scissor":
            switch (computerSelection) {
                case "Rock":
                    playerOutcome = "Lose";
                    break;
                case "Paper":
                    playerOutcome = "Win";
                    break;
                case "Scissor":
                    playerOutcome = "Draw";
                    break;
            }
            break;
    }

    switch (playerOutcome) {
        case "Win":
            return `You ${playerOutcome}! ${playerSelection} beats ${computerSelection}`;
        case "Draw":
            return `The game is a ${playerOutcome}!`;
        case "Lose":
            return `You ${playerOutcome}! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let player;
    let computer;
    for (let i = 0; i < 5; i++) {
        player = prompt("Rock? Paper? Scissor? Pick one", "");
        computer = getComputerChoice();
        console.log(playRound(player, computer));
    }
}

game();