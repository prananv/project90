player1score=0;
player2score=0;

playername1=localStorage.getItem("player1");
playername2=localStorage.getItem("player2");
 
document.getElementById("player1_name").innerHTML=playername1+" : ";
document.getElementById("player2_name").innerHTML=playername2+" : ";

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("question").innerHTML="Question turn: "+playername1;
document.getElementById("answer").innerHTML="Answer turn: "+playername2;