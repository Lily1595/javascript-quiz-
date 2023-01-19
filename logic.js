/*
TO DEBUG: 
1. TIMER IS GOING INTO MINUS NUMBERS
2. END GAME FUNCTION NOT WORKING 
3. STORE HIGH SCORES FUNCTION NOT WORKING  
*/

// INITIALISE JS VARIABLES 
let startButton = document.querySelector("#start-screen");
let timer = document.querySelector("#time");
let startScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let feedback = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let submit = document.querySelector("#submit");
let initials = document.querySelector("#initials");

//DECLARE TIMER GLOBALLY 
let secondsLeft = 60;

//DECLARE SCORE GLOBALLY 
let score = 0;

//DECLARE CURRENT QUESTION GLOBALLY 
let currentQuestion = 0;

//WHEN THE START BUTTON IS PRESSED, THE GAME BEGINS 
startButton.addEventListener("click", startGame)

//FUNCTION TO START THE GAME 
function startGame() {
    startButton.setAttribute("class", "hide");
    startScreen.removeAttribute("class");
    startTimer();
    displayQuestion();
}

//START TIMER FUNCTION
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0 || currentQuestion === quizQuestions.length) {
            timer.textContent = 0;
            clearInterval(timerInterval)
            endGame();
        }
    }, 1000)
}

//DISPLAY THE QUESTION 
function displayQuestion() {
    let question = quizQuestions[currentQuestion].question;
    questionTitle.textContent = question;
    let choices = quizQuestions[currentQuestion].choices;
    choicesEl.textContent = "";
    for (let i = 0; i < choices.length; i++) {
        let choiceBtn = document.createElement("button");
        choiceBtn.textContent = choices[i];
        choicesEl.appendChild(choiceBtn);
        choicesEl.addEventListener("click", checkAnswer);
    };
}

//CHECK ANSWER FUNCTION
function checkAnswer(e) {
    let selectedAnswer = e.target.innerHTML;
    console.log(selectedAnswer);
    let correctAnswer = quizQuestions[currentQuestion].answer;
    console.log(correctAnswer);
    if (selectedAnswer === correctAnswer) {
        score++;
        currentQuestion++;
        if (currentQuestion === quizQuestions.length) {
            endGame()
        } else {
            displayQuestion();
        }
    } else {
        feedback.textContent = "Wrong answer!";
        secondsLeft -= 10;
        currentQuestion++;
        if (currentQuestion === quizQuestions.length) {
            endGame()
        } else {
            displayQuestion();
        }
    }
}


//END GAME FUNCTION 
function endGame() {
    console.log("end game funcion has run")
    //display end screen
    startScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    //display score 
    finalScore.innerHTML = score;
}

//SAVE INITIALS AND SCORE THIS IN LOCAL STORAGE FUNCTION
submit.addEventListener("click", function (e) {
    e.preventDefault();
    let initialsInput = initials.value;
    let info = {initials: initialsInput, score: score}
    var final = localStorage.getItem("final")
    if(final === null) {
        final = []
    } else {
        final = JSON.parse(final)
    }
    if (initialsInput === "") {
        alert("Please type your initials");
    }
    else if (initialsInput.length > 3) {
        alert('maximum 3 letters')
    }
    else {
        final.push(info);
        localStorage.setItem("final", JSON.stringify(final));
 
    }
    
});