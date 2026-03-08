const welcomeMessage = `
⚡️------------------------------------------------⚡️
| Welcome to Odin Rock 🪨, Paper 📄, Scissors ✂️ ! |
⚡️------------------------------------------------⚡️
`;
alert(welcomeMessage);

// 1 match = 5 rounds, winner = most wins across all rounds
// Display score after each round
let computerScore = 0;
let playerScore = 0;
let numRounds = 0;

// Play entire game
while (numRounds < 5) {
  numRounds++;
  let computerChoice = getComputerChoice()
  let playerChoice = getPlayerChoice()
  let gameWinner = getGameWinner(computerChoice, playerChoice)
  switch (gameWinner) {
    case 'computer':
      computerScore++;
      break;
    case 'player':
      playerScore++;
      break;
    default:
      break;
  }
  let gameResultMessage = `
  ${getGameResult(gameWinner)}
  ${getScoreboard(computerScore, playerScore)}
  `
  alert(gameResultMessage)
}
getMatchWinner(computerScore, playerScore)

// Get computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Get human choice
function getPlayerChoice() {
  let playerChoiceIsValid = false;
  let playerChoice;
  while ( !playerChoiceIsValid ) {
    playerChoice = prompt("Please type in your choice (rock, paper, or scissors): ");
    if ( choiceIsValid(playerChoice) ) {
      return playerChoice;
    } else {
      alert("Please enter a valid choice, either rock, paper, or scissors!")
    }
  }

}

// Validate player choice
function choiceIsValid(choice) {
  return (choice.toLowerCase() == 'rock') || (choice.toLowerCase() == 'paper') || (choice.toLowerCase() == 'scissors')
}

// Determine game winner
function getGameWinner(computerChoice, playerChoice) {
  if ( computerChoice == playerChoice ) {
    return 'tie';
  } else if (
    computerChoice == 'rock' && playerChoice == 'scissors' ||
    computerChoice == 'paper' && playerChoice == 'rock' ||
    computerChoice == 'scissors' && playerChoice == 'paper'
  ) {
    return 'computer'
  } else {
    return 'player'
  }
}

// Determine match winner
function getMatchWinner(computerScore, playerScore) {
  let resultMessage;
  if ( computerScore == playerScore ) {
    resultMessage = 'Tie game!'
  } else if ( computerScore > playerScore ) {
    resultMessage = 'Computer wins!'
  } else {
    resultMessage = 'You win!'
  }
  alert('The results are in! After 5 rounds...')
  let matchOverMessage = `
  ${resultMessage}
  ${getScoreboard(computerScore, playerScore)}
  `
  alert(matchOverMessage)
}

// Live scoreboard
function getScoreboard(computerScore, playerScore) {
  return `🤖 ${computerScore} : ${playerScore} 👤`
}

// Game result
function getGameResult(gameWinner) {
  switch (gameWinner) {
    case 'computer':
      return 'Computer wins, too bad...'
    case 'player':
      return 'You win, great move!'
    default:
      return 'Tie! Good game 🤝'
  }
}
