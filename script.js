let compScore = 0;
let userScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let compScorePara = document.querySelector("#comp-score");
let userScorePara = document.querySelector("#user-score");

// showWinner fucntion
const showWinner = (userWin) => {
  if (userWin === true) {
    console.log("User win");
    msg.innerHTML = "Congratulations, You win";
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    console.log("Computer win");
    msg.innerHTML = "Oops, You lose";
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = compScore;
  }
};

// Generate Computer Choice is
const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const playGame = (userChoiceId) => {
  let userChoice = userChoiceId;
  console.log(`choice is selected by user is = ${userChoice}`);
  let compChoice = genCompChoice();
  console.log(`choice is selected by computer is = ${compChoice}`);

  //  Conditions

  if (compChoice === userChoice) {
    console.log("game was draw");
    msg.innerHTML = "Game was draw";
    msg.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissor") {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin);
  }
};
// showWinner function is start here
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoiceId = choice.getAttribute("id");
    // console.log("Choice is =", userChoiceId);
    playGame(userChoiceId);
  });
});
