//DECLARE TIMER GLOBALLY 
let timer = 60;
//DECLARE SCORE GLOBALLY 
let score = 0;

//WHEN THE START BUTTON IS PRESSED, THE GAME BEGINS 
document.getElementById("start").addEventListener("click", startGame)

//FUNCTION TO START THE GAME 
function startGame() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
}

//DISPLAY THE QUESTION 
document.querySelector("#question-title").textContent = quizQuestions[0].question;