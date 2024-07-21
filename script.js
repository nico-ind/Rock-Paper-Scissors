function getComputerChoice() {
    let randomNumber = Math.random() * 10
    let choice = "init"

    if (randomNumber < 3.33) {
        choice = "Rock";
    } else if (randomNumber > 3.33 && randomNumber < 6.66) {
        choice = "Paper";
    } else {
        choice = "Scissors";   
    }

    return (choice)
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice == computerChoice) {
        resultP.textContent = "It's a tie!";
    } else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
               humanChoice == "Scissors" && computerChoice == "Paper" ||
               humanChoice == "Paper" && computerChoice == "Rock"
    ) {
        resultP.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++
    } else {
        resultP.textContent = `You loose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++
    }

    currentScore.textContent = "Score: Human: " + humanScore + " Computer: " + computerScore;

    return {
        humanScore, 
        computerScore
    };
}

// Inicializar valores
let humanScore = 0
let computerScore = 0
let humanChoice
let computerChoice
let roundNumber = 1


// Llamar funciones

// Get reference to the container div and p elements that exists in the html
const container = document.querySelector('#container');
const round = document.querySelector('#round');
const playerSelection = document.querySelector('#playerSelection');
const computerSelection = document.querySelector('#computerSelection');
const resultP = document.querySelector('#resultP');
const currentScore = document.querySelector('#currentScore');
const endgameResult = document.querySelector('#endgameResult');
endgameResult.style.fontSize = 'x-large';

// Create multiple listeners for all buttons 
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Reset de endgameResult
        if (humanScore === 0 && computerScore === 0) {
            endgameResult.textContent = '';
        }
        // Numero de ronda
        round.textContent = "ROUND: " + (roundNumber++);
        
        // Obtener resultado computadora
        computerChoice = getComputerChoice();
        
        // Identificar boton utilizado
        humanChoice = button.id;

        // Mostrar selecciones en consola
        playerSelection.textContent = "Your selection was: " + humanChoice;
        computerSelection.textContent = "The computer selected: " + computerChoice;

        // Determinar resultado
        result = playRound(humanChoice, computerChoice, humanScore, computerScore);

        // Obtener puntajes de la funcion
        humanScore = result.humanScore;
        computerScore = result.computerScore;

        // Determinar resultado de la partida para un x numero de rondas
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                endgameResult.textContent = "The winner is: Human";
            } else if (humanScore < computerScore) {
                endgameResult.textContent = "The winner is: Computer";
            } 

            // Reset scores for new round
            humanScore = 0;
            computerScore = 0;
        }
    })
})









