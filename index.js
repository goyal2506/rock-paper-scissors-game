let playerScore = 0;
let computerScore = 0;

function userChoice(userInput) {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * 3);
    var computerInput = choices[randomIndex];
    var result;
    var selection;

    if (userInput === computerInput) {
        result = 'It\'s a tie!';
    } else if (
        (userInput === 'rock' && computerInput === 'scissors') ||
        (userInput === 'scissors' && computerInput === 'paper') ||
        (userInput === 'paper' && computerInput === 'rock')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    document.getElementById('result').innerHTML = ` ${result} chosse another`;
    document.getElementById('score').innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
    document.getElementById('selection').innerHTML = `Player  : ${userInput} | Computer  :${computerInput}`;

}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').innerHTML = 'Choose your weapon!';
    document.getElementById('score').innerHTML = 'Player: 0 | Computer: 0';
    document.getElementById('selection').innerHTML = `Player  : none | Computer  : none`;

}