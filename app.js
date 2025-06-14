let userScore=0;
let compScore=0;
let arr=["paper", "rock", "scissors"];

$(".choice").click(function(){
  let buttonClicked=$(this).attr("id");

 let computerSelected= compChoice();
  Playgame(buttonClicked,computerSelected);
})

function compChoice(){
let generatedNo=Math.floor(Math.random()*3);
let SelectedChoice=arr[generatedNo];
return SelectedChoice;
}

function showWinner(userWin,buttonClicked,computerSelected){
  if(userWin===true){
    userScore++;
    $("#user").text(userScore);
  $("#msg").text(`you Won! your ${buttonClicked} beats ${computerSelected}`);
  $("#msg").css("background-color","green");
  }
  else{
    compScore++;
     $("#comp").text(compScore);
   $("#msg").text(`you Lose (T_T) ${computerSelected} beats ${buttonClicked}`);
   $("#msg").css("background-color","red");
  }
}

function Playgame(buttonClicked,computerSelected){
 
  if(buttonClicked===computerSelected){
   $("#msg").text("Draw!.Play again");
     $("#msg").css("background-color","#030303");
  }

  else{
    let userWin=true;
    if(buttonClicked==="rock"){
      userWin=computerSelected==="paper"?false:true;
    }
    else if(buttonClicked==="paper"){
      userWin=computerSelected==="scissors"?false:true;

    }
    else{
      userWin=computerSelected==="rock"?false:true;
    }
    showWinner(userWin,buttonClicked,computerSelected);
  }
  
}