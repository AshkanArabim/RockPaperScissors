function computerPlay() {
  let randomizer = Math.floor(Math.random() * 3 + 1);
  let choice = "";
  switch (randomizer) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }

  return choice;
}

function playerPlay() {
  let choice = prompt(
    "Please choose one of the following: Rock, Paper, Scissors (You are player 1)"
  ).toLowerCase();

  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt(
      "That is not a valid choice. Please choose one of the following: Rock, Paper, Scissors (You are player 1)"
    ).toLowerCase();
  }

  return choice;
}

function playRound(player1, player2) {
  let winner;
  console.log(`\tPlayer 1: ${player1}`);
  console.log(`\tPlayer 2: ${player2}`);
  if (player1 === player2) {
    console.log("\ttie");
  } else {
    if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      console.log("\tWinner: Player 1");
      winner = "p1";
    } else {
      console.log("\tWinner: Player 2");
      winner = "p2";
    }
  }
  return winner;
}

function game() {
  let p1wins = 0;
  let p2wins = 0;

  for (i = 1; i <= 5; ++i) {
    console.log(`Round ${i} :`);
    let winner = playRound(playerPlay(), computerPlay());

    switch (winner) {
      case "p1":
        p1wins++;
        break;
      case "p2":
        p2wins++;
        break;
      default:
        break;
    }

    console.log(`Scores:\n\tPlayer 1: ${p1wins}\n\tPlayer 2: ${p2wins}`);
    console.log("-----------");
  }

  if (p1wins > p2wins) {
    console.log("The final winner is Player 1!");
  } else if (p1wins < p2wins) {
    console.log("The final winner is Player 2!");
  } else {
    console.log("It's a tie!");
  }
}
