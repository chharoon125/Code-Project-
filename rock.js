let userScore = 0;
let compScore = 0;

// ✅ Select all elements with class "choice"
const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

// ✅ Generate computer choice
const genCompchoice = () => {
  const options = ["rock", "paper", "scissor"]; // keep "scissor" consistent everywhere
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const DrawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "black";
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userscorepara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compscorepara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// ✅ Play game with user's choice
const playGame = (userChoice) => {
   const compChoice = genCompchoice();

  if (userChoice === compChoice) {
    DrawGame();
  } else {
    let userwin = true;

    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }

    showWinner(userwin, userChoice, compChoice); // ✅ fixed
  }
};

Choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // get id="rock"/"paper"/"scissor"
    playGame(userChoice);
  });
});
