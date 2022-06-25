function playRound() {
  let choice = computerPlay();
  const playerChoice = document.querySelectorAll('button')
  if (choice == playerChoice.toLowerCase()) {
    console.log("It's a Draw!")
  } else if((choice == "rock" && playerChoice.toLowerCase() == "scissors") || (choice == "scissors" && playerChoice.toLowerCase() == "paper") ||
   (choice == "paper" && playerChoice.toLowerCase()=="rock")){
    console.log("Computer wins!")
  }

  else {
      console.log ("Player wins")
    }
}

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)]
}


playRound()
