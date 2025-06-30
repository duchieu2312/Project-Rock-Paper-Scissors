function getComputerChoice() {
  let choices = ["rock","paper","scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let choice;

  while (true) {
    choice = prompt("Please choice rock, paper or scissors").toLowerCase();
    
    if (validChoices.includes(choice)) {
      return choice;
    } else {
      alert("Invalid input. Please enter 'rock', 'paper', or 'scissors' only.");
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
      case "rock":
        if (computerChoice == "scissors") {
          console.log("You win! Rock beats Scissors");
          humanScore++;
        } else if (computerChoice == "paper") {
          console.log("You lose! Paper beats Rock");
          computerScore++;
        } else {
          console.log("Draw");
        }
        break;
      case "paper":
        if (computerChoice == "rock") {
          console.log("You win! Paper beats Rock");
          humanScore++;
        } else if (computerChoice == "scissors") {
          console.log("You lose! Scissors beats Paper");
          computerScore++;
        } else {
          console.log("Draw");
        }
        break;
      case "scissors":
        if (computerChoice == "paper") {
          console.log("You win! Scissors beats Paper");
          humanScore++;
        } else if (computerChoice == "rock") {
          console.log("You lose! Rock beats Scissors");
          computerScore++;
        } else {
          console.log("Draw");
        }
        break;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
  }

  if(humanScore > computerScore) {
    console.log("You win the game!");
  } else if(humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("A draw game!");
  }
}

playGame();