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
let round = document.querySelector("#round");
let hchoice = document.querySelector("#hchoice");
let hwins = document.querySelector("#hwins");
let cchoice = document.querySelector("#cchoice");
let cwins = document.querySelector("#cwins");
let gameover = document.querySelector("#gameover");
let winner = document.querySelector("#winner");
let computerChoice;

function game(choice) {
  i++;
  console.log(`Round ${i} :`);
  computerChoice = computerPlay();
  let winner = playRound(choice, computerChoice);

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

  console.log(`Human: ${p1wins}\nComputer: ${p2wins}\n----------`);
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

function renderer() {
  if (p1wins >= 5 || p2wins >= 5) {
    console.log("game is over");
    gameover.textContent = "Sorry pal, game is over. Refresh to start over.";
    return;
  }
  choice = this.id;

  game(choice);

  round.textContent = `Round ${i}`;
  hchoice.textContent = `Human's choice: ${choice}`;
  hwins.textContent = `Human's wins: ${p1wins}`;
  cchoice.textContent = `Computer's choice: ${computerChoice}`;
  cwins.textContent = `Computer's wins: ${p2wins}`;

  if (p1wins >= 5) {
    console.log("Human has won");
    winner.textContent = "Human has won";
  } else if (p2wins >= 5) {
    console.log("Computer has won");
    winner.textContent = "Computer has won";
  }
}

choices.forEach((button) => button.addEventListener("click", renderer));
