let playerScore = 0;
let computerScore = 0;
function scoreCheck(gameResult) {
  if (gameResult === 'win') {
    playerScore++;
  } else if (gameResult === 'lose') {
    computerScore++;
  }

  if (playerScore >= 5) {
    document.getElementById('grandResult').innerHTML = 'Player wins!';
    playerScore = 0;
    computerScore = 0;
  }
  if (computerScore >= 5) {
    document.getElementById('grandResult').innerHTML = 'Computer wins...';
    playerScore = 0;
    computerScore = 0;
  }

  document.getElementById('playerResult').innerHTML = playerScore;
  document.getElementById('computerResult').innerHTML = computerScore;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const result = choices[Math.floor(Math.random() * 3)];
  return result;
}

function playRound(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  let result;
  document.getElementById('playerSelection').innerHTML = playerSelection;
  document.getElementById('computerSelection').innerHTML = computerSelection;
  if (p === computerSelection) {
    result = 'tie';
  } else if (
    (p === 'rock' && computerSelection === 'scissors')
    || (p === 'scissors' && computerSelection === 'paper')
    || (p === 'paper' && computerSelection === 'rock')
  ) {
    result = 'win';
  } else {
    result = 'lose';
  }
  scoreCheck(result);
}

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

/*
function game() {
  for (let i = 0; i < 1; i++) {
    const playerSelection = document.getElementById('userChoice').value;
    const computerSelection = getComputerChoice();
    const gameResult = playRound(playerSelection, computerSelection);
    document.getElementById('gameResult').innerHTML = gameResult;
  }
}
*/
