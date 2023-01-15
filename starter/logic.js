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
let question = quizQuestions[0].question;
document.querySelector("#question-title").textContent = question;

//DISPLAY THE CHOICES AS BUTTONS

let choices = quizQuestions[0].choices;
document.querySelector("#choices").textContent = "";


for (let i = 0; i < choices.length; i++) {
    let choiceBtn = document.createElement("button");
    choiceBtn.textContent = choices[i];
    //choiceBtn.setAttribute("value", choices[i]);
    choiceBtn.addEventListener("click", checkAnswer);
    document.getElementById("choices").appendChild(choiceBtn);
}

let answer = quizQuestions[0].answer;

//CHECK ANSWER FUNCTION 
function checkAnswer(){
    let usersAnswer = //how do i reference the users answer here? 
console.log("confirming check answer function has run");
}
 