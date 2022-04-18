function playRound() {
  let choice = computerPlay();
  const playerChoice =  prompt('What is your choice? Rock, Paper, or Scissors')
  if (choice == playerChoice.toLowerCase()) {
    console.log("It's a Draw!")
  } else {
    console.log("Else statement")

  }
}

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)]
}


playRound();