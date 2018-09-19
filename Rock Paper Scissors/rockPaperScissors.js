const getUserChoice = (userInput) => {
  userChoice = userInput.toLowerCase();
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
  	return userChoice;
  } console.log ("Error Input");
}

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";
  switch(randomNumber){
    case 0: 
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    default:
      computerChoice = 'scissors';
      break;
  } console.log (`Computer choose ${computerChoice}`) 
   return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
  let result = "";
  if (userChoice === computerChoice){
    result = `You choose ${userChoice}, computer choose ${computerChoice}. TIE`;
    return result;
  } else {
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
      	result =`You choose ${userChoice}, computer choose ${computerChoice}. YOU LOSE`;
        return result;
      } result = `You choose ${userChoice}, computer choose ${computerChoice}. YOU WIN`;
      	return result;
    } else if (userChoice === 'paper') {
      if (computerChoice === 'rock'){
      	result = `You choose ${userChoice}, computer choose ${computerChoice}. YOU WIN`;
        return result;
      } result = `You choose ${userChoice}, computer choose ${computerChoice}. YOU LOSE`;
     		return result;
    } else {
      if (computerChoice === 'rock'){
      	result = `You choose ${userChoice}, computer choose ${computerChoice}. YOU LOSE`;
        return result;
      } result = `You choose ${userChoice}, computer choose ${computerChoice}. YOU WIN`;
      	return result;
    }
  }
}

function playGame(userInput){
  console.log(determineWinner(getUserChoice(userInput)), getComputerChoice());
}

console.log(getComputerChoice());
playGame('rock');