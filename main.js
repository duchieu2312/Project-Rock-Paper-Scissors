let humanScore = 0;
let computerScore = 0;
let round = 0;
let totalRound = 5;

function getComputerChoice() {
  let choices = ["rock","paper","scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

const roundWinnerDisplay = document.querySelector("#roundWinner");
function playRound(humanChoice, computerChoice) {
  switch(humanChoice) {
    case "rock":
      if (computerChoice == "scissors") {
        roundWinnerDisplay.textContent = "You win! Rock beats Scissors";
        humanScore++;
      } else if (computerChoice == "paper") {
        roundWinnerDisplay.textContent = "You lose! Paper beats Rock";
        computerScore++;
      } else {
        roundWinnerDisplay.textContent = "Draw";
      }
      break;
    case "paper":
      if (computerChoice == "rock") {
        roundWinnerDisplay.textContent = "You win! Paper beats Rock";
        humanScore++;
      } else if (computerChoice == "scissors") {
        roundWinnerDisplay.textContent = "You lose! Scissors beats Paper";
        computerScore++;
      } else {
        roundWinnerDisplay.textContent = "Draw";
      }
      break;
    case "scissors":
      if (computerChoice == "paper") {
        roundWinnerDisplay.textContent = "You win! Scissors beats Paper";
        humanScore++;
      } else if (computerChoice == "rock") {
        roundWinnerDisplay.textContent = "You lose! Rock beats Scissors";
        computerScore++;
      } else {
        roundWinnerDisplay.textContent = "Draw";
      }
      break;
  }
}

const humanScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
function score() {
  humanScoreDisplay.textContent = "Your score: " + humanScore;
  computerScoreDisplay.textContent = "Computer score: " + computerScore;
}
score();


const winnerDisplay = document.querySelector("#gameWinner");
function winner() {
  if(humanScore > computerScore) {
    winnerDisplay.textContent = "You win the game!";
    btnRestart.style.display = "inline-block";
    btns.forEach(btn => btn.disabled = true);
  } else if(humanScore < computerScore) {
    winnerDisplay.textContent = "You lose the game!";
    btnRestart.style.display = "inline-block";
    btns.forEach(btn => btn.disabled = true);
  } else {
    winnerDisplay.textContent = "A draw game!";
    btnRestart.style.display = "inline-block";
    btns.forEach(btn => btn.disabled = true);
  }
}

const btns = document.querySelectorAll(".playBtn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const humanSelection = btn.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    score();
    round++;
    if (round == totalRound) {
      winner();
    }
  })
});

const btnRestart = document.querySelector("#restart");
btnRestart.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  score();
  winnerDisplay.textContent = "";
  roundWinnerDisplay.textContent = "";
  btns.forEach(btn => btn.disabled = false);
  btnRestart.style.display = "none";
});
