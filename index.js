let comp = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 1) {
    computerImg.src = "./images/rock.png";
    return 'rock';
  } else if (choice === 2) {
    computerImg.src = "./images/paper.png";
    return 'paper';
  } else {
    computerImg.src = "./images/scissor.png";
    return 'scissor';
  }
}

function playerSelection(bet) {
  if (bet.innerText.toLowerCase() === 'rock') {
    playerImg.src = "./images/rock.png";
  } else if (bet.innerText.toLowerCase() === 'paper') {
    playerImg.src = "./images/paper.png";
  } else {
    playerImg.src = "./images/scissor.png";
  }
  pChoice =  bet.innerText.toLowerCase();
}

function game(player, computer) {
  if (player === 'rock' && computer === 'paper' || player === 'scissor' && computer === 'rock' || player === 'paper' && computer === 'scissor') cScore.innerText++;
  if (player === 'rock' && computer === 'scissor' || player === 'scissor' && computer === 'paper' || player === 'paper' && computer === 'rock') pScore.innerText++;
}



let pChoice = '';
const btn = document.querySelectorAll('button');
const playerImg = document.querySelector(".playerBet");
const computerImg = document.querySelector(".computerBet");
let pScore = document.querySelector(".player");
let cScore = document.querySelector(".computer");


btn.forEach(btns => {
  if (pScore.innerText !== 5 || cScore.innerText !== 5) {
    btns.addEventListener('click', () => {
      game(pChoice, comp());
      console.log(pScore.innerText);
    })
  } else {
    pScore.innerText === 5 ? alert("You Win!") : alert("Computer Win!");
  }
});


