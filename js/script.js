document.getElementById("start").addEventListener("click", startGame);
var started = false;
var elem = document.getElementById("start");
var score = 0;

var players = document.getElementsByClassName("players");
 for(var i=0;i<players.length;i++){
    players[i].removeEventListener('click', decreaseTime, false);
    }
    score = 0;

function startGame() {
  if (started === false) {
    started = true;
    if (started === true) {
      elem.text = "Start";
      countDown();
       for(var i=0;i<players.length;i++){
        players[i].addEventListener('click', increaseScore, false);
    }
    }
  }
}

function countDown() {
  if (elem.text === "Start") {
    elem.style.color = "#02E148";
    elem.text = "20";
    setTimeout("countDown()", 1000);
  } else if (elem.text > 0) {
    elem.text--;
    setTimeout("countDown()", 1000);
    if (elem.text < 15 && elem.text > 10) {
      elem.style.color = "#E56414";
    } else if (elem.text < 6) {
      elem.style.color = "red";
    }
  } else if (elem.text === "0"){
    elem.text = "Play Again?";
    started = false;
    alert("Your Score is " + score);
    reInitialize();
  }
}

function increaseScore(){
  if (started == true){
  score++;
  this.removeEventListener("click", increaseScore, false);
  this.addEventListener("click", decreaseTime, false);
} else {
  //do nothing
}
}

function reInitialize() {
  var players = document.getElementsByClassName("players");
  for(var i=0;i<players.length;i++){
        players[i].removeEventListener('click', decreaseTime, false);
    }
 for(var i=0;i<players.length;i++){
        players[i].addEventListener('click', increaseScore, false);
   
    }
    
    score = 0;
}

function decreaseTime() {
  if (elem.text >= 3) {
    elem.text -=3;
  }

}