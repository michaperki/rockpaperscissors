// create three buttons in the control-panel div for rock, paper, scissors
controlPanel = document.getElementById("control-panel");
rockButton = document.createElement("button");
rockButton.innerHTML = "Rock";
rockButton.addEventListener("click", function() {
    playRound("rock", computerPlay());
    }
);
controlPanel.appendChild(rockButton);

paperButton = document.createElement("button");
paperButton.innerHTML = "Paper";
paperButton.addEventListener("click", function() {
    playRound("paper", computerPlay());
    }
);
controlPanel.appendChild(paperButton);

scissorsButton = document.createElement("button");
scissorsButton.innerHTML = "Scissors";
scissorsButton.addEventListener("click", function() {
    playRound("scissors", computerPlay());
    }
);
controlPanel.appendChild(scissorsButton);

// create an end game button
// when the game ends, move the results to the final results div
endGameButton = document.createElement("button");
endGameButton.innerHTML = "End Game";
endGameButton.addEventListener("click", function() {
    endGame();
    }
);
controlPanel.appendChild(endGameButton);


var score = "Player: 0 Computer: 0";
var playerScore = 0;
var computerScore = 0;
var results = "";
var finalResults = "";

// create a div for the score
scoreDiv = document.createElement("div");
scoreDiv.innerHTML = "Score: " + score;
document.body.appendChild(scoreDiv);

// create a div for the results
resultsDiv = document.createElement("div");
resultsDiv.innerHTML = "Results: " + results;
document.body.appendChild(resultsDiv);

// create a div for the final results
finalResultsDiv = document.createElement("div");
finalResultsDiv.innerHTML = "Final Results: " + finalResults;
document.body.appendChild(finalResultsDiv);

function computerPlay() {
    // randomly return rock, paper, or scissors
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // play a single round of rock paper scissors
    if (playerSelection == computerSelection) {
        results = "Tie! You both chose " + playerSelection + ".";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        results = "You lose! Paper beats rock.";
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        results = "You win! Rock beats scissors.";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        results = "You win! Paper beats rock.";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        results = "You lose! Scissors beats paper.";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        results = "You lose! Rock beats scissors.";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        results = "You win! Scissors beats paper.";
        playerScore++;
    } else {
        results = "Something went wrong.";
    }
    score = "Player: " + playerScore + " Computer: " + computerScore;
    scoreDiv.innerHTML = "Score: " + score;
    resultsDiv.innerHTML = "Results: " + results;
    if (playerScore == 5) {
        finalResults = "You win!";
        finalResultsDiv.innerHTML = "Final Results: " + finalResults;
    } else if (computerScore == 5) {
        finalResults = "You lose!";
        finalResultsDiv.innerHTML = "Final Results: " + finalResults;
    }
}

function endGame() {
    // end the game and reset the score
    // first set the final results to the current score
    finalResults = "Player: " + playerScore + " Computer: " + computerScore;
    finalResultsDiv.innerHTML = "Final Results: " + finalResults;
    // then reset the score
    score = "Player: 0 Computer: 0";
    playerScore = 0;
    computerScore = 0;
    scoreDiv.innerHTML = "Score: " + score;
    // then reset the results
    results = "";
    resultsDiv.innerHTML = "Results: " + results;


}