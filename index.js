
function getComputerChoice () {
    const choice = Math.floor(Math.random() * 2);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scsissor";
    }
}