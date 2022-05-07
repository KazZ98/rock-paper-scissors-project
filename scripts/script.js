function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3); //This line take a random number between 0 and 2
    let computerHand;
    if (randomNumber === 0) {
        computerHand = "Rock";
        return computerHand;
    } else if (randomNumber === 1){
        computerHand = "Paper";
        return computerHand;
    } else {
        computerHand = "Scissors";
        return computerHand;
    }
}

function playerPlay(e) {
    const playerHand = e.target.textContent;
    return playerHand
}

function playRound(e) {
    const playerSelection = playerPlay(e);
    const computerSelection = computerPlay();
    const infoDiv = document.createElement("div");
    const playerDiv = document.querySelector("#player-score");
    const computerDiv = document.querySelector("#computer-score");

    if (computerDiv.textContent === "5") {
        infoDiv.textContent = "You lose the game :(";
        document.body.appendChild(infoDiv);
    } else if (playerDiv.textContent === "5") {
        infoDiv.textContent = "You won the game :)";
        document.body.appendChild(infoDiv);
    } else {
        
        if (playerDiv.textContent === "" || computerDiv.textContent === "") {
            playerDiv.textContent = 0;
            computerDiv.textContent = 0;
            if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
                infoDiv.textContent = "You Won!";
                document.body.appendChild(infoDiv);
                let playerScore = 1;
                playerDiv.textContent = playerScore;
            } else if (playerSelection === computerSelection) {
                infoDiv.textContent = "You Draw!";
                document.body.appendChild(infoDiv);
            } else {
                infoDiv.textContent = "You Lose!";
                document.body.appendChild(infoDiv);
                let computerScore = 1;
                computerDiv.textContent = computerScore;
            }
        } else {
            let playerCount = parseInt(playerDiv.textContent);
            let computerCount = parseInt(computerDiv.textContent);
    
            if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
                infoDiv.textContent = "You Won!";
                document.body.appendChild(infoDiv);
                playerCount = playerCount + 1;
                playerDiv.textContent = playerCount;
            } else if (playerSelection === computerSelection) {
                infoDiv.textContent = "You Draw!";
                document.body.appendChild(infoDiv);
            } else {
                infoDiv.textContent = "You Lose!";
                document.body.appendChild(infoDiv);
                computerCount = computerCount + 1;
                computerDiv.textContent = computerCount;
            }
        }
    }
}

const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("click", playRound));