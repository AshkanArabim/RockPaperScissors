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

  //   let choice = "";
  //   let choices = document.querySelectorAll("button.choice");

  //   choices.forEach((button) =>
  //     button.addEventListener("click", () => {
  //       choice = button.id;
  //     })
  //   );

  //   alert(choice);

  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt(
      "That is not a valid choice. Please choose one of the following: Rock, Paper, Scissors (You are player 1)"
    ).toLowerCase();
  }

  return choice;
}

function playRound(player1, player2) {
  let winner;
  console.log(`\tHuman: ${player1}`);
  console.log(`\tComputer: ${player2}`);
  if (player1 === player2) {
    console.log("\ttie");
  } else {
    if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      console.log("\tWinner: Human");
      winner = "p1";
    } else {
      console.log("\tWinner: Computer");
      winner = "p2";
    }
  }
  return winner;
}

i = 0;
let p1wins = 0;
let p2wins = 0;

function game(choice) {
  console.log(`----------\nRound ${i} :`);
  let winner = playRound(choice, computerPlay());
  i++;

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

  console.log(`Human: ${p1wins}\nComputer: ${p2wins}`);
  //   if (p1wins > p2wins) {
  //     console.log("The final winner is Player 1!");
  //   } else if (p1wins < p2wins) {
  //     console.log("The final winner is Player 2!");
  //   } else {
  //     console.log("It's a tie!");
  //   }
}

let choice = "";
let choices = document.querySelectorAll("button.choice");

choices.forEach((button) =>
  button.addEventListener("click", () => {
    choice = button.id;
    game(choice);
  })
);
