let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#userScore")
const compScorePara = document.querySelector("#compScore");
const gemCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = () =>{
    console.log("Game is Draw.");
    msg.innerText="Game is Draw. Play again";
    msg.style.backgroundColor="#214f4b";
};
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose!");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame = (userChoice) =>{
    console.log("User's choice = ",userChoice);
    const compChoice = gemCompChoice();
    console.log("Computer's Choice = ", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice ==="scissor" ? false : true;
        }
        else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice)=>{
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", ()=>{
        playGame(userChoice);
    });
});