let playerScore = 1;
let computerScore = 1;

const yourScore = document.getElementById('playerScore');
const CompScore = document.getElementById('computerScore');
const allButtons = document.querySelectorAll('.selection button');
const showUser  = document.querySelector('.showUser i');
const showComp = document.querySelector('.showComputer i');

const random = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text1 = document.getElementById('winner');
const text2 = document.getElementById('choose');


const startGame = () =>{
    allButtons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
   let clickedBtn = e.target.className;
   showUser.className = clickedBtn;
   let randomNumber = Math.floor(Math.random() * random.length);
   showComp.className = random [randomNumber];

   if (showUser.className === showComp.className){
    yourScore.innerHTML = yourScore.innerHTML;
    showComp.innerHTML = showComp.innerHTML;
    text1.innerHTML = " Its Tie !";
    text2.innerHTML = text1.innerHTML;
    text2.style.color = 'blue';

   } else if (showUser.className === random[0] && showComp.className === random[2]){
    yourScore.innerHTML = playerScore;
    playerScore++;
    text1.innerHTML = " You Won! ";
    text2.innerHTML = text1.innerHTML;
    text2.style.color = 'green';
}else if (showUser.className === random[0] && showComp.className === random[1]){
    CompScore.innerHTML = computerScore;
    computerScore++;
    text1.innerHTML = "You lost ! The bot won ";
    text2.innerHTML = text1.innerHTML;
    text2.style.color = 'red';

}else if (showUser.className === random[1] && showComp.className === random[2]){
    CompScore.innerHTML = computerScore;
    computerScore++;
    text1.innerHTML = "You lost ! The bot won  ";
    text2.innerHTML = text1.innerHTML;
    text2.style.color = 'red';

    
} else if (showUser.className === random[1] && showComp.className === random[0]){
    yourScore.innerHTML = playerScore;
    playerScore++;
    text1.innerHTML = " You Won! ";
    text2.innerHTML = text1.innerHTML;
    text2.style.color = 'green';

} else if (showUser.className === random[2] && showComp.className === random[0]){
    CompScore.innerHTML = computerScore;
    computerScore++;
    text1.innerHTML = "You lost ! The bot won ";
    text2.innerHTML = text1.innerHTML;
    text2.style.color = 'red';


} else if (showUser.className === random[2] && showComp.className === random[1]){
    yourScore.innerHTML = playerScore;
    playerScore++;
    text1.innerHTML = " You Won! ";
    text2.innerHTML = text1.innerHTML;
    text2.style.color = 'green';

}

    });
    });
}

startGame();
