let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUserWord = "_user".fontsize(3);
const smallComputerWord = "_computer".fontsize(3);

rock_div.addEventListener("click", () => {
  game("r");
});

paper_div.addEventListener("click", () => {
  game("p");
});

scissors_div.addEventListener("click", () => {
  game("s");
});

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      tie(userChoice);
      break;
  }
};

const getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  return choices[Math.floor(Math.random() * 3)];
};

const win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  document.getElementById(userChoice).classList.add("green-glow");
  result_p.innerHTML = `${convertGameWord(userChoice)}
    beats  ${convertGameWord(computerChoice)} You win! `;

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);
};

const lose = (userChoice, computerChoice) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  document.getElementById(userChoice).classList.add("red-glow");
  result_p.innerHTML = `${convertGameWord(userChoice)} 
    loses to  ${convertGameWord(computerChoice)}. You lose! `;

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);
};

const tie = (userChoice) => {
  document.getElementById(userChoice).classList.add("yellow-glow");
  result_p.innerHTML = `Both picked ${convertGameWord(userChoice)}. Tie.`;

  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("yellow-glow");
  }, 500);
};

const convertGameWord = (letter) => {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
};
