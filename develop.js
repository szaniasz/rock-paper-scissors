const results = document.querySelector('#results');

const selectionButtons = document.querySelectorAll("[data-selection]");

function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    const getIndex = Math.floor(Math.random() * 3);
    const getChoice = arr[getIndex];
    return getChoice;
}
playerScore = 0;
computerScore = 0;


function playRound(playerSelection, computerSelection) {
    // debugger 
    if (playerSelection === computerSelection) {
        results.textContent = ("You chose the same! You: " + playerScore + " : Computer: " +  computerScore);
        return;
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Scissors") || 
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
        computerScore++;
        results.textContent = ("You lose! " + computerSelection + " beats " + playerSelection + " You: " + playerScore + " : Computer: " + computerScore);
        return;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore++;
        results.textContent = ("You win! " + playerSelection + " beats " + computerSelection + " You: " + playerScore + " : Computer: " + computerScore);
        return;
    }
 }

 selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const playerSelection = selectionButton.dataset.selection;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerScore === 5) {
           results.textContent = ("Congratulation! You've won " + playerScore + " to " + computerScore + "!");
           playerScore = 0;
           computerScore = 0;
           return;
       } else if (computerScore === 5) {
        results.textContent = ("Boooooo... You've lost " + playerScore + " to " + computerScore + "...");
        playerScore = 0;
        computerScore = 0;
           return;
       } 
       return;
    })
})