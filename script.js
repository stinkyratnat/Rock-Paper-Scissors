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

let getPlayerChoice = prompt("test");
let playerSelection = getPlayerChoice.toLowerCase();

console.log(playerSelection);