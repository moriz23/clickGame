document.getElementById("start").addEventListener("click", startGame);
var started = false;
var startButton = document.getElementById("start");
var score = 0;

var players = document.getElementsByClassName("players");
  for(var i=0;i<players.length;i++){
    players[i].removeEventListener('click', decreaseTime);
  }

function startGame() {
  if (started === false) {
    started = true;
    if (started === true) {
      startButton.text = "Start";
      countDown();
      for(var i=0;i<players.length;i++){
        players[i].addEventListener('click', increaseScore);
      }
    }
  }
}

function countDown() {
  if (startButton.text === "Start") {
    startButton.style.color = "#02E148";
    startButton.text = "20";
    setTimeout("countDown()", 1000);
  } else if (startButton.text > 0) {
    startButton.text--;
    setTimeout("countDown()", 1000);
    if (startButton.text < 15 && startButton.text > 10) {
      startButton.style.color = "#E56414";
    } else if (startButton.text < 6) {
      startButton.style.color = "red";
    }
  } else if (startButton.text === "0"){
    startButton.text = "Play Again?";
    started = false;
    alert("Your Score is " + score);
    reInitialize();
  }
}

function increaseScore(){
  if (started == true){
    score++;
    this.removeEventListener("click", increaseScore);
    this.addEventListener("click", decreaseTime);
  }
}

function reInitialize() {
  for(var i=0;i<players.length;i++){
    players[i].removeEventListener('click', decreaseTime);
  }
  for(var i=0;i<players.length;i++){
    players[i].addEventListener('click', increaseScore);   
  }  
  
  score = 0;
}

function decreaseTime() {
  if (startButton.text >= 3) {
    startButton.text -=3;
  }

}