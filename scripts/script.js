function computerPlay() {
    //This line take a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
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

function playerPlay() {
    let playerHand = prompt("Select between Rock, Paper or Scissors.");
    //This line take the input text and convert the first character into an upper case and the following in lower case
    let playerHandUp = playerHand.charAt(0).toUpperCase() + playerHand.slice(1).toLowerCase();
    return playerHandUp;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Won";
    } else if (playerSelection == computerSelection) {
        return "Draw";
    } else {
        return "Lose";
    }
    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const currentRound = playRound(playerSelection, computerSelection);
       if (currentRound == "Draw") {
            console.log("You Draw!");
       } else if (currentRound == "Won") {
            playerScore += 1;
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
       } else {
            computerScore += 1;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
       }

    }

    if (playerScore > computerScore) {
        console.log(`You win the game!\nPlayer Score: ${playerScore} Computer Score: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game :(\nPlayer Score: ${playerScore} Computer Score: ${computerScore}`);
    } else {
        console.log(`Wow! Is a Draw.\nPlayer Score: ${playerScore} Computer Score: ${computerScore}`);
    }
}

game();
