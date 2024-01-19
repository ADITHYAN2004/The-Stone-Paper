//take signs or player wepons form the player 
// take signs from the computer 
// compare it and show the result */
//ui for the ui show the wepons of the player and the computer 
// show the scores of the plyaer and computer show wheter the game draw loos or win 
// the game finish in 5 points the first one to score 5 points will win and will pop up a result and with a restart button
//___________________________________________________________

//score and sign display
const playerSign=document.querySelector(".your-wepon-sign")
const computerSign=document.querySelector(".computer-wepon-sign")
const playerScore=document.querySelector(".your-score")
const computerScore=document.querySelector(".computer-score")
const pop=document.querySelector(".popup")
const text=document.querySelector(".pop-txt")


//player to click button
document.querySelector(".btn1").addEventListener("click",()=>handleClick("Rock"));
document.querySelector(".btn2").addEventListener("click",()=>handleClick("paper"));
document.querySelector(".btn3").addEventListener("click",()=>handleClick("sissor"))

// compute random game
var computerGame =()=>{
      const randomNumber=Math.floor(Math.random()*3)
     
        if(randomNumber==0){
               return "Rock"
        }
       else if(randomNumber==1){
              return "paper"
        }
        else if(randomNumber==2){
             return"sissor"
        }
  }

function handleClick(playerSelection){
const computerSelect=computerGame();
 click(playerSelection,computerSelect);
updateScore(playerSelection,computerSelect);


}

function click(playerSelection,computerSelect){
   
      switch(playerSelection){
            case "Rock":
                  playerSign.innerHTML="✊"
                computerGame();
                  break;
            case "paper":
                  playerSign.innerHTML="✋"   
                  console.log("hello")   
                  break;
            case "sissor":
                  playerSign.innerHTML="✌️"      
      }

            switch(computerSelect){
            case "Rock":
                  computerSign.innerHTML="✊"
                  console.log("hei")
                  break;
            case "paper":
                 computerSign.innerHTML="✋"   
                  console.log("hello")   
                  break;
            case "sissor":
                  computerSign.innerHTML="✌️"      
      }
   
       
}


let count_pl=0;
let count_pc=0;
function updateScore(playerSelection,computerSelect){
      console.log(playerSelection,computerSelect)
 if(playerSelection==computerSelect){
      document.querySelector(".sub-about").innerHTML="Draw!"
 }
 if(playerSelection=="Rock"&&computerSelect=="sissor"||
 playerSelection=="sissor"&&computerSelect=="paper"||
 playerSelection=="paper"&&computerSelect=="Rock"){
     
       count_pl++
     playerScore.innerHTML=`You  :  ${count_pl}`;
     document.querySelector(".sub-about").innerHTML="You win"
     if(count_pl==5){
      winGame()
     }
 }
else if(computerSelect=="Rock"&&playerSelection=="sissor"||
 computerSelect=="sissor"&&playerSelection=="paper"||
 computerSelect=="paper"&&playerSelection=="Rock"){
       
    count_pc++
      
     computerScore.innerHTML=`Computer  :  ${count_pc}`;
     document.querySelector(".sub-about").innerHTML="Computer Win"
     if(count_pc===5){
      winGame()
     }
 }
 

}
function winGame(){
         setTimeout(()=>{
           popup();
         },0)
            
       
     
}

function popup()
{
    
    pop.style.transform="translate(-50%, -50%) scale(1)";

    if(count_pc===5){
   text.innerHTML="Computer Wins"
}
else if(count_pl===5){
      text.innerHTML="Player wins"
}
   
}
document.querySelector(".btnr").addEventListener('click',()=>{
      pop.style. transform="translate(-50%, -50%) scale(0)";
       window.location.reload();
       return false;
    })
