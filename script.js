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

function getHumanChoice () {
    let userInput = prompt("Enter: 1 (Rock) - 2 (Paper) - 3 (Scissors)")

    if (userInput === "1") {
        choice = "Rock";
    } else if (userInput === "2") {
        choice = "Paper";
    } else if (userInput === "3") {
        choice = "Scissors";
    } else {
        console.log("Invalid number")
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

let humanScore = 0
let computerScore = 0
let humanChoice
let computerChoice

for (let i=0; i<5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("Your selection was: " + humanChoice)
    console.log("The computer selected: " + computerChoice)
    result = playRound(humanChoice, computerChoice, humanScore, computerScore);
    humanScore = result.humanScore;
    computerScore = result.computerScore;
}

if (humanScore > computerScore) {
    console.log("The winner is: Human")
} else if (humanScore < computerScore) {
    console.log("The winner is: Computer")
} else {
    console.log("There is a Tie!")
}
