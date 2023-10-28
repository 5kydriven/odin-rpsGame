function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    ComputerScore++;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    ComputerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    ComputerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore++;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    draw++;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    draw++;
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    draw++;
  } else {
    return "Unkown Keyword";
  }
}

function game(e) {
    if (e === "y") {
        for (let i = 1; i <= round; i++) {
            const playerSelection = prompt("Enter your bet: ");
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        }
        console.log("Player: " + playerScore + " Computer: " + ComputerScore + " Draw: " + draw);
        playAgain = prompt("Wanna play again? (y/n)");
    } else {
        console.log("Ok!");
    }
}

let round = 5;
let playerScore = 0;
let ComputerScore = 0;
let draw = 0;
let playAgain = prompt("Wanna play? (y/n)");
game(playAgain);


