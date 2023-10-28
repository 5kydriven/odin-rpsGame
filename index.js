
function getComputerChoice () {
    const choice = Math.floor(Math.random() * 2);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose!";
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        return "You Lose!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        return "You Lose!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return "You Win!";
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        return "You Win!";
    } else {
        return "Unkown Keyword"; 
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));