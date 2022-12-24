function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const result = choices[Math.floor(Math.random() * 3)];
  return result;
}

function playRound(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  document.getElementById('playerSelection').innerHTML = playerSelection;
  document.getElementById('computerSelection').innerHTML = computerSelection;
  if (p === computerSelection) {
    return 'tie';
  } if (p === 'rock' && computerSelection === 'scissors'
  || p === 'scissors' && computerSelection === 'paper'
  || p === 'paper' && computerSelection === 'roc') {
    return 'Winner!';
  }
  return 'Loser...';
}

function game() {
  for (let i = 0; i < 1; i++) {
    const playerSelection = document.getElementById('userChoice').value;
    const computerSelection = getComputerChoice();
    const gameResult = (playRound(playerSelection, computerSelection));
    document.getElementById('gameResult').innerHTML = gameResult;
  }
}
