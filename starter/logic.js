//DECLARE TIMER GLOBALLY 
let secondsLeft = 60;
//DECLARE SCORE GLOBALLY 
let score = 0;
//DECLARE CURRENT QUESTION VARIABLE GLOBALLY 
let currentQuest = 0;

//WHEN THE START BUTTON IS PRESSED, THE GAME BEGINS 
document.getElementById("start").addEventListener("click", startGame)

//FUNCTION TO START THE GAME 
function startGame() {
    document.getElementById("start-screen").setAttribute("class","hide");
    document.getElementById("questions").removeAttribute("class");
    startTimer();
    displayQuestion();
}

//START TIMER FUNCTION
let timeEl = document.querySelector("#time");
function startTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft--; 
        timeEl.textContent = secondsLeft;
    },1000)
}

//DISPLAY THE QUESTION 
function displayQuestion() {
//DEBUG - all of this code only works for the first question, how to loop through all the questions ?
let question = quizQuestions[index].question;
document.querySelector("#question-title").textContent = question;

//DISPLAY THE CHOICES AS BUTTONS

let choices = quizQuestions[index].choices;
document.querySelector("#choices").textContent = "";


for (let i = 0; i < choices.length; i++) {
    let choiceBtn = document.createElement("button");
    choiceBtn.textContent = choices[i];
    choiceBtn.setAttribute("value", choices[i]);
    choiceBtn.addEventListener("click", checkAnswer);
    document.getElementById("choices").appendChild(choiceBtn);
}

let answer = quizQuestions[index].answer;
}

//CHECK ANSWER FUNCTION 
function checkAnswer(e){
    console.log("confirming check answer function has run");
    let userAnswer = e.target.value;
    console.log(typeof(userAnswer));
    let correctAnswer = answer;
    console.log(typeof(correctAnswer));
    console.log(userAnswer);
    console.log(correctAnswer);
    if (userAnswer == correctAnswer) {
        console.log("correct ans");
        score++
    }
    else {
        console.log("not correct ans");
    //subtract time from the clock 
    }
}