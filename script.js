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
        console.log("It's a tie!")
    } else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
               humanChoice == "Scissors" && computerChoice == "Paper" ||
               humanChoice == "Paper" && computerChoice == "Rock"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore++
    } else {
        console.log(`You loose! ${computerChoice} beats ${humanChoice}.`)
        computerScore++
    }

    console.log("Score: Human: " + humanScore + " Computer: " + computerScore)

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
// Create multiple listeners for all buttons 
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Numero de ronda
        console.log("ROUND: " + (roundNumber++))
        
        // Obtener resultado computadora
        computerChoice = getComputerChoice();
        
        // Identificar boton utilizado
        humanChoice = button.id;

        // Mostrar selecciones en consola
        console.log("Your selection was: " + humanChoice)
        console.log("The computer selected: " + computerChoice)

        // Determinar resultado
        result = playRound(humanChoice, computerChoice, humanScore, computerScore);

        // Obtener puntajes de la funcion
        humanScore = result.humanScore;
        computerScore = result.computerScore;

        // Determinar resultado de las rondas
        if (humanScore > computerScore) {
            console.log("The winner is: Human")
        } else if (humanScore < computerScore) {
            console.log("The winner is: Computer")
        } else {
            console.log("There is a Tie!")
        }
        
        })
})









