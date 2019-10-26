//main variables
var scoreP1 = document.querySelector(".P1 .score p");
var scoreP2 = document.querySelector(".P2 .score p");
var P1 = document.querySelector(".P1 .player-name p");
var P2 = document.querySelector(".P2 .player-name p");
var message = document.querySelector(".message p");
var scissor = document.getElementById("scissor");
var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var resetBtn = document.querySelector("#resetBtn");
var player1Choice = "";
var player2Choice = "";
var playerChoice = [player1Choice, player2Choice];
var turn = 0;
var score = [0, 0]
var choiceList = [scissor, paper, rock];
P1.classList.add("active")

// when player click add the choice to the variable
for(j = 0;j < choiceList.length; j++){
    choiceList[j].addEventListener("click", function(){
        playerChoice = this.id;
        turn++;
        if (turn === 1) {
            player2Choice = "";
            player1Choice = playerChoice;
            P1.classList.remove("active")
            P2.classList.add("active")
            message.textContent = "New Game";
        }
        else if (turn === 2) {
            player2Choice = playerChoice;
            P2.classList.remove("active")
            P1.classList.add("active")
            turn = 0;
            message.textContent = (" P1: " + player1Choice + " " + "P2: " + player2Choice);
            console.log(player1Choice, player2Choice);
        }
        checkWinner();
    });
}

function checkWinner(){
    //check if someone wins or it's a tie
    if (player1Choice === "scissor" && player2Choice === "paper") {
        score[0]++;
    }
    else if (player1Choice === "paper" && player2Choice === "rock") {
        score[0]++;
    }
    else if (player1Choice === "rock" && player2Choice === "scissor") {
        score[0]++;
    }
    else if (player2Choice === "scissor" && player1Choice === "paper") {
        score[1]++;
    }
    else if (player2Choice === "paper" && player1Choice === "rock") {
        score[1]++;
    }
    else if (player2Choice === "rock" && player1Choice === "scissor") {
        score[1]++;
    }
    else if (player1Choice === player2Choice) {
        score = score;
    }
    scoreP1.textContent = score[0];
    scoreP2.textContent = score[1];
}

//reset button event listener
resetBtn.addEventListener("click", reset);

//reset the message and the score
function reset(){
    message.textContent = "New Game";
    score = [0, 0];
    scoreP1.textContent = score[0];
    scoreP2.textContent = score[1];
    player1Choice = "";
    player2Choice = "";
    P1.classList.add("active");
    P2.classList.remove("active");
};