let playerScore = 0
let computerScore = 0
const rockButton = document.querySelector('#rockBtn')
const paperButton = document.querySelector('#paperBtn')
const scissorsButton = document.querySelector('#scissorsBtn')
const results = document.querySelector('.results')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.opponent-score')

  function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
      const p = document.createElement('p')
      p.innerText = 'You Tied!';
      results.appendChild(p)
    } else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') )
        { const p = document.createElement('p')
        p.innerText = 'You Lose!';
        results.appendChild(p)
        computerScore++
    } else {
        const p = document.createElement('p')
        p.innerText = 'You Win!';
        results.appendChild(p)
        playerScore++
    }
}

function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0){
      return 'Rock';
    } else if (randomNumber === 1){
      return 'Paper';
    } else if (randomNumber === 2){
    return 'Scissors';
    }
  }

const gameOver = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('victory')
    h2.innerText = 'WOOOOOOOOOOO :)'
    results.append(h2)
  }
  if (computerScore === 5) {
     const h2 = document.createElement('h2')
     h2.classList.add('defeat')
    h2.innerText = 'NOOOOOOOOO D:'
    results.append(h2)
  }
}

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'Rock'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  gameOver(playerScore, computerScore)
});

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'Paper'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  gameOver(playerScore, computerScore)
});

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'Scissors'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  gameOver(playerScore, computerScore)
});

