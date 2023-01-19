
// Get high scores from local storage
let highScores = JSON.parse(localStorage.getItem("final")) || [];

// Sort high scores from highest to lowest
highScores.sort(function(a, b) {
  return b.score - a.score;
});

// Get the container element where the high scores will be displayed
let highScoreContainer = document.getElementById("highscores");

// Loop through the high scores and create a list element for each one


for (let i = 0; i < highScores.length; i++) {
  let highScore = highScores[i];
  let highScoreList = document.createElement("li");
  highScoreList.innerHTML = highScore.initials + ": " + highScore.score;
  highScoreContainer.appendChild(highScoreList);
}


let clearButton = document.querySelector("#clear");

// Clear Highscores 
clearButton.addEventListener("click", function(){
  localStorage.clear();
  highScoreContainer.innerHTML = "";
}); 