let playerScore = document.querySelector("#playerScore");
let compScore = document.querySelector("#compScore");
//const selection = document.querySelectorAll("button")

//selection.forEach(button => button.addEventListener('click', playerSelect) )

//step-1 Randomly return R/P/S


let compChoice = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
function computerSelection()
{
    let result=compChoice[Math.floor(Math.random()*compChoice.length)];
    return result;
}

console.log(computerSelection());
 
//let choice = document.getElementsByClassName(".btn")[0,1,2].innerHTML;

function playerSelect0()
{
    document.getElementsByClassName(".btn")[1];
    return 'Rock'
}

function playerSelect1()
{
  document.getElementsByClassName(".btn")[1];
  return 'Paper'
}

function playerSelect2()
{
   document.getElementsByClassName(".btn")[2];
   return 'Scissors'
}


function playRound(playerChose,compChose)
{
   playerChose = playerSelect0;
   playerChose = playerSelect1;
   playerChose = playerSelect2;
   compChose = computerSelection
}









