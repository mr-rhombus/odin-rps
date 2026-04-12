const computerScore = document.querySelector("#computerScore");
const playerScore = document.querySelector("#playerScore");
const numRounds = document.querySelector("#roundNumber");
const gameWinnerPara = document.querySelector("#game > p");
const matchResultDiv = document.querySelector("#matchResult");
const endGameMessage = document.querySelector("#matchResult > h1");

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.textContent.toLowerCase();
    playRound(playerChoice);
  }),
);

// Play a single round
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let winner = getGameWinner(computerChoice, playerChoice);
  updateScoreboard(winner);
  displayGameResult(winner);
  if (
    Number(computerScore.textContent) == 3 ||
    Number(playerScore.textContent) == 3
  ) {
    endGame();
  }
}

// Get computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Get human choice
function getPlayerChoice() {
  let playerChoiceIsValid = false;
  let playerChoice;
  while (!playerChoiceIsValid) {
    playerChoice = prompt(
      "Please type in your choice (rock, paper, or scissors): ",
    );
    if (choiceIsValid(playerChoice)) {
      return playerChoice;
    } else {
      alert("Please enter a valid choice, either rock, paper, or scissors!");
    }
  }
}

// Validate player choice
function choiceIsValid(choice) {
  return (
    choice.toLowerCase() == "rock" ||
    choice.toLowerCase() == "paper" ||
    choice.toLowerCase() == "scissors"
  );
}

// Determine game winner
function getGameWinner(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return "tie";
  } else if (
    (computerChoice == "rock" && playerChoice == "scissors") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissors" && playerChoice == "paper")
  ) {
    return "computer";
  } else {
    return "player";
  }
}

function updateScoreboard(winner) {
  numRounds.textContent = Number(numRounds.textContent) + 1;
  switch (winner) {
    case "computer":
      computerScore.textContent = Number(computerScore.textContent) + 1;
      break;
    case "player":
      playerScore.textContent = Number(playerScore.textContent) + 1;
      break;
    default:
      break;
  }
}

// Game result
function displayGameResult(gameWinner) {
  gameWinnerPara.textContent = "test";
  switch (gameWinner) {
    case "computer":
      gameWinnerPara.textContent = "Computer wins, too bad...";
      break;
    case "player":
      gameWinnerPara.textContent = "You win, great move!";
      break;
    default:
      gameWinnerPara.textContent = "Tie! Good game 🤝";
      break;
  }
}

function endGame() {
  const finalPlayerScore = Number(playerScore.textContent);
  const finalComputerScore = Number(computerScore.textContent);
  let winner = finalPlayerScore > finalComputerScore ? "player" : "computer";
  switch (winner) {
    case "player":
      endGameMessage.textContent = `🥳 You win, congratulations! Final score: ${finalPlayerScore} - ${finalComputerScore} 🏆`;
      break;
    case "computer":
      endGameMessage.textContent = `😥 Computer wins. Final score: ${finalComputerScore} - ${finalPlayerScore} 😔`;
      break;
  }
  allButtons.forEach((button) => (button.disabled = true));
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.setAttribute("id", "reset-button");
  resetButton.addEventListener("click", () => resetGame());
  matchResultDiv.appendChild(resetButton);
}

function resetGame() {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  numRounds.textContent = 1;
  gameWinnerPara.textContent = "Awaiting first choice...";
  endGameMessage.textContent = "";
  allButtons.forEach((button) => (button.disabled = false));
  const resetButton = document.querySelector("#reset-button");
  resetButton.remove();
}
