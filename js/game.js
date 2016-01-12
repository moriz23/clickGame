document.getElementById("start").addEventListener("click", startGame);
var started = false;
var startButton = document.getElementById("start");
var finalResult = document.getElementById('final-result');
var score = 0;

var players = document.getElementsByClassName("players");

function startGame() {
    started = true;
    startButton.text = "Start";
    startButton.removeEventListener('click', startGame);
    countDown();
    for(var i=0;i<players.length;i++){
      players[i].addEventListener('click', increaseScore);
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
    startButton.addEventListener('click', startGame);
    started = false;
    finalResult.textContent = "Your Score is " + score;
    $('#results-modal').modal('toggle');
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