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

  function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return ('You Tied!');
    } else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') )
        return ('You Lose!')
     else {
        return ('You Win!')
    }
}

const playerSelection ="Rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));