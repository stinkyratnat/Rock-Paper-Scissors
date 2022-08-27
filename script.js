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

console.log(getComputerChoice());

function getPlayerChoice() {
    let playerInput = prompt("test");
    let playerSelection = playerInput.toLowerCase();
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
};

console.log(getPlayerChoice());