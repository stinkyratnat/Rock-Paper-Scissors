function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let randomInt = getRandomInt(3);
    let computerHand;
    switch(randomInt) {
        case 0:
            computerHand = "Rock";
            break;
        case 1:
            computerHand = "Paper";
            break;
        case 2:
            computerHand = "Scissors";
            break;
    }
    return computerHand;
}

function playRound() {
    function getPlayerChoice(input = prompt("Shoot!")) {
        let playerHand = input.toLowerCase();
        return playerHand.charAt(0).toUpperCase() + playerHand.slice(1);
    };

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    let state;

    if ((playerSelection === "Rock") && (computerSelection === "Scissors")
    || (playerSelection === "Paper") && (computerSelection === "Rock")
    || (playerSelection === "Scissors") && (computerSelection === "Paper")) {
        state = "Win";
    }
    else if ((playerSelection === "Rock") && (computerSelection === "Paper")
    || (playerSelection === "Paper") && (computerSelection === "Scissors")
    || (playerSelection === "Scissors") && (computerSelection === "Rock")) {
        state = "Lose";
    }
    else if ((playerSelection === "Rock") && (computerSelection === "Rock")
    || (playerSelection === "Paper") && (computerSelection === "Paper")
    || (playerSelection === "Scissors") && (computerSelection === "Scissors")) {
        state = "Tie";
    }
    else {
        state = "Invalid";
    }

    if (state === "Win") {
        return "You " + state + "! " + playerSelection + " beats " + computerSelection;
    }
    else if (state === "Lose") {
        return "You " + state + "! " + playerSelection + " loses to " + computerSelection;
    }
    else if (state === "Tie") {
        return "You tied. " + playerSelection + " ties with " + computerSelection;
    }
    else {
        return "Invalid input."
    }
    
}

function game() {
    for (let i = 0; i< 5; i++) {
        console.log(playRound());
    }
}

game();