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

//DISPLAY THE CHOICES
document.querySelector("#choices").textContent = quizQuestions[0].answers;

// FOR LOOP FOR THE CHOICES 
/*
- grab the choice element from the html 
- set variable of answers
- loop over the length of answers
- create a choice button 
- for each choice button, display the inner html as the answers 
- add event listener to the on the choice button so when it is clicked, the check answer function runs 
 */
document.getElementById("choices");
let answers = quizQuestions[0].answers;
//console.log(answers);
for (let i = 0; i < answers.length; i++) {
    let choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = answers[i];
    choiceBtn.addEventListener("click", checkAnswer);
}

//CHECK ANSWER FUNCTION 
function checkAnswer(){

}