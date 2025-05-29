function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'cissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'cissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}.`;
  }

  document.getElementById('result').textContent = result;
  document.querySelectorAll('.buttons button').forEach(btn => btn.disabled = true);
  document.getElementById('play-again').style.display = 'inline-block';
}

function resetGame() {
  document.getElementById('result').textContent = '';
  document.querySelectorAll('.buttons button').forEach(btn => btn.disabled = false);
  document.getElementById('play-again').style.display = 'none';
}
