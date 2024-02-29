let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let msg=document.querySelector("#msg");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#computer-score");


//Draw game 

const drawGame = () => {
    console.log("Game was draw...");
    msg.innerText="Game was draw...Play again";
    msg.style.backgroundColor="black";
}

//winner 

const winner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        console.log("You win...!");
        userScorePara.innerText=userScore;
        msg.innerText=`You win.. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        console.log("You lose.");
        compScorePara.innerText=compScore;
        msg.innerText=`You lose ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

//This is Actual concept of game
const playGame = (userChoice,) => {
    console.log("user choice", userChoice);

    const compChoice = genComputerchoice();
    console.log("Computer choice", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;   //initially truw

        if (userChoice === "rock") {
            //comp choice should be either "paper" or "scissors"
            userWin = compChoice === "paper" ? false : true;  //if comp choice is paper the comp win and if comp choice is sissors then userwin
        }

        else if (userChoice === "paper") {
            //comp choice should be either "rock" or "scissors"
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //here uerChoice is->scissors
            userWin = compChoice === "rock" ? false : true;
        }
        winner(userWin,userChoice,compChoice);
    }

}

//This will generate the computer random choice 
const genComputerchoice = () => {
    const options = ["rock", "paper", "scissors"];

    const radIndex = Math.floor(Math.random() * 3);

    return options[radIndex];
}



