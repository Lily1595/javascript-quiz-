/* ISSUES TO DEBUG: HOW TO GET THE USERS ANSWER FROM THE EVENT CLICK
AND HOW TO STORE THE INITIALS AND HIGH SCORES AT THE END*/


//DECLARE TIMER GLOBALLY 
let secondsLeft = 60;
//DECLARE SCORE GLOBALLY 
let score = 0;
//DECLARE CURRENT QUESTION VARIABLE GLOBALLY 
let currentQuestion = 0;

//WHEN THE START BUTTON IS PRESSED, THE GAME BEGINS 
document.getElementById("start").addEventListener("click", startGame)

//FUNCTION TO START THE GAME 
function startGame() {
    document.getElementById("start-screen").setAttribute("class", "hide");
    document.getElementById("questions").removeAttribute("class");
    startTimer();
    displayQuestion();
    displayChoices();
}

//START TIMER FUNCTION
let timeEl = document.querySelector("#time");
function startTimer() {
        setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    }, 1000)
    if (secondsLeft === 0) {
        endGame();
    }
}

//DISPLAY THE QUESTION 
function displayQuestion() {
    let question = quizQuestions[currentQuestion].question;
    document.querySelector("#question-title").textContent = question;
    }

//DISPLAY THE CHOICES AND MAKE CHOICES INTO BUTTONS 
function displayChoices() {
        let choices = quizQuestions[currentQuestion].choices;
        document.querySelector("#choices").textContent = "";
        for (let i = 0; i < choices.length; i++) {
            let choiceBtn = document.createElement("button");
            choiceBtn.textContent = choices[i];
            choiceBtn.addEventListener("click", checkAnswer);
            document.getElementById("choices").appendChild(choiceBtn);
    }
}   
    
//CHECK ANSWER FUNCTION 
function checkAnswer(event) {
    console.log("confirming check answer function has run");
    event.preventDefault(); 
    let userAnswer = value.this;
    console.log(value.this)
    let correctAnswer = quizQuestions[currentQuestion].answer; 
    if (userAnswer === correctAnswer){
        score++;
        currentQuestion++;
    }
    else {
        secondsLeft -= 10;
        currentQuestion++;
    }
}

//END GAME FUNCTION 
function endGame() {
    //display end screen
    document.getElementById("questions").setAttribute("class", "hide");
    document.getElementById("end-screen").removeAttribute("class");
    document.getElementById("final-score").innerHTML = score;
}

//SAVE INITIALS AND SCORE TO LOCAL STORAGE FUNCTION 
function storeHighscores() {
}
