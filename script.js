function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return getRandomInt(3);

}

console.log(getComputerChoice());