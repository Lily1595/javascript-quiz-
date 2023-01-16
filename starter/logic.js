
// INITIALISE JS VARIABLES 
let startButton = document.querySelector("#start-screen");
let timer = document.querySelector("#time");
let startScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let feedback = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");

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
    displayChoices();
}

//START TIMER FUNCTION
function startTimer() {
        setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
    }, 1000)
    if (secondsLeft === 0) {
        endGame();
    }
}

//DISPLAY THE QUESTION 
function displayQuestion() {
    let question = quizQuestions[currentQuestion].question;
    questionTitle.textContent = question;
    }

//DISPLAY THE CHOICES AND MAKE CHOICES INTO BUTTONS 
function displayChoices() {
    let choices = quizQuestions[currentQuestion].choices;
    choicesEl.textContent = "";
    for (let i = 0; i < choices.length; i++) {
        let choiceBtn = document.createElement("button");
        choiceBtn.textContent = choices[i];
        choiceBtn.setAttribute('class', 'choice');
        choicesEl.appendChild(choiceBtn);
}
} 
choicesEl.onclick = checkAnswer;

//CHECK ANSWER FUNCTION 
function checkAnswer(event) {
    let buttonEl = event.target;
    if(!buttonEl.matches('.choice')){
        return
    }
    let correctAnswer = quizQuestions[currentQuestion].answer;
    if (buttonEl.value === correctAnswer){
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
    startScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    finalScore.innerHTML = score;
}

//SAVE INITIALS AND SCORE TO LOCAL STORAGE FUNCTION 
function storeHighscores() {
}
