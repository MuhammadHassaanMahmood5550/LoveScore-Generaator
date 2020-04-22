
document.querySelector(".ref").addEventListener("click" , function(){ document.location.reload();});



var randomNumber=Math.floor(Math.random()*100)+1;
document.querySelector(".che").addEventListener("click" , msgAction);

function msgAction(){

if(randomNumber >= 80){
  document.querySelector(".score").innerHTML = +randomNumber+ "%" ;
  document.querySelector("h2").innerHTML = "You love each other as Romeo loves Juliet😍";
}

else if(randomNumber >= 70 && randomNumber < 80){
  document.querySelector(".score").innerHTML = +randomNumber+ "%" ;
  document.querySelector("h2").innerHTML = "You really love each other!🥰";
}

else if(randomNumber >= 50){
  document.querySelector(".score").innerHTML = +randomNumber+ "%" ;
  document.querySelector("h2").innerHTML = "Hmm..  Not bad!😊";
}

else if(randomNumber >= 30){
  document.querySelector(".score").innerHTML = +randomNumber+ "%" ;
  document.querySelector("h2").innerHTML = "Your love is very Little!🙁";
}

else{
  document.querySelector(".score").innerHTML = +randomNumber+ "%" ;
  document.querySelector("h2").innerHTML = "You do not love each Other!😕";
}

}
