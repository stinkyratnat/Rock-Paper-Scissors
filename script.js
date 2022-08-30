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

function getPlayerChoice() {
    let playerInput = prompt("test");
    let playerHand = playerInput.toLowerCase();
    return playerHand.charAt(0).toUpperCase() + playerHand.slice(1);
};

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(computerSelection);

function playRound() {
    let state;

    if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        state = "Win";
    }
    else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        state = "Lose";
    }
    else if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        state = "Tie";
    }
    else {
        state = "Invalid"
    }

    if (state === "Win") {
        return "You " + state + "! " + playerSelection + " beats " + computerSelection;
    }
    else if (state === "Lose") {
        return "You " + state + "! " + playerSelection + " loses to " + computerSelection;
    }
    else if (state === "Tie") {
        return "You tied!"
    }
    else {
        return "Invalid input."
    }
}

console.log(playRound());

