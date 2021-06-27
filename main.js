const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");

//step-1 Randomly return R/P/S

const Rock = document.querySelector("#rock");
const Paper = document.querySelector("#paper");
const Scissors = document.querySelector("#scissors");

var compChoice = [Rock, Paper,Scissors];
function computerSelection()
{
    let result=compChoice[Math.floor(Math.random()*compChoice.length)];
    return result;
}

function playerSelection()
{
    let playerChoice = [Rock, Paper,Scissors];
    return playerChoice;
}
//step-2 Function that play 1 Round R/P/S and written string

function playRound(playerChoice , compChoice)
{
   playerChoice = playerSelection();
   compChoice = computerSelection();

    if(playerChoice==Rock) 
    {
      if(compChoice==Scissors)
       {++playerScore;
           alert("You Win! Rock beats Scissors.");
       }else if(compChoice==Paper)
        {++compScore;
           alert("You lose! Paper beats Rock.");
        }else{alert("TIE");}
    }
}

/*function game()
{
    console.log(playRound());
    console.log(playRound());
}*/