/*
TO DEBUG: 
1. TIMER IS GOING INTO MINUS NUMBERS
2. CHECK ANSWER FUNCTION ISN'T WORKING PROPERLY 
3. NOT MOVING TO THE NEXT QUESTION ONCE BUTTON IS PRESSED 
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
        choicesEl.appendChild(choiceBtn);
        choicesEl.addEventListener("click", checkAnswer);
        choicesEl.addEventListener("click", function(){
            currentQuestion++;
        });
}
} 

//CHECK ANSWER FUNCTION
function checkAnswer(e) {
    let selectedAnswer = e.target.innerHTML;
    console.log(selectedAnswer);
    let correctAnswer = quizQuestions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer){
    console.log ("correct");
    score++;
}
    else {
        console.log("this was not correct")
        secondsLeft -= 10;
    }
}

//END GAME FUNCTION 
function endGame() {
    //display end screen
    startScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    finalScore.innerHTML = score;
}

//SAVE INITIALS AND SCORE THIS IN LOCAL STORAGE FUNCTION 
let initialsArray = [JSON.parse(localStorage.getItem("initialsArray"))];
let scoreArray = [JSON.parse(localStorage.getItem("scoreArray"))];

submit.addEventListener("click", storeHighScore); 

function storeHighScore() {
let initialsInput = initials.value;
if (initialsInput === "") {
    alert("Please type your initials");
}
else if (initialsInput.length > 3) {
    alert('maximum 3 letters')
}
else {
    initialsArray.push(initialsInput);
    scoreArray.push(finalScore);
    localStorage.setItem("initialsArray", JSON.stringify(initialsArray));
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
}
feedback.classList.remove('hide');
}














/*
function storeHighscores() 
    let initialsInput = initials.value;
submit.addEventListener("click", function() {})*/



     /* Conditions to check the correct and wrong answers
    if (userAnswer.matches("button")) {
      if (index < questions.length - 1 && timeLeft > 0) {
        if (key === correctAnswer) {
          feedback.textContent = "Correct!";
          correctSound.play();
        } else {
          feedback.textContent = "Wrong!";
          wrongSound.play();
          timeLeft -= 20;
        }
        index++;
      } else {
        if (key !== correctAnswer) {
          timeLeft -= 20;
        }

*/
/*
let userAnswer = e.target;
    let btnKey = userAnswer.innerText;
    console.log(btnKey);
    if (btnKey === quizQuestions[currentQuestion].answer){
    console.log ("correct");
    score++;
}
    else {
        console.log("this was not correct")
        secondsLeft -= 10;
    }
    currentQuestion++;
}
*/
//CHECK ANSWER FUNCTION
/*
function checkAnswer(event) {
    let buttonEl = event.target;
    if(!buttonEl.matches(".choice-button")){
        return
    }
    let correctAnswer = quizQuestions[currentQuestion].answer;
    if (buttonEl.value === correctAnswer){
        console.log("this was correct")
        score++;    }
    else {
        console.log("this was not correct")
        secondsLeft -= 10;
    }
    currentQuestion++;
}

//CHECK ANSWER FUNCTION 2 
function checkAnswer(event) {
    let correctAnswer = quizQuestions[currentQuestion].answer;
    if (correctAnswer === event.target.textContent) {
        console.log("this was correct")
        score++;  
    } else {
        console.log("this was not correct")
        secondsLeft -= 10;}
     currentQuestion++; 
    }
    

//CHECK ANSWER FUNCTION 3 
function checkAnswer(event) {
        let usersAnswer = event.target;
        let correctAnswer = quizQuestions[currentQuestion].answer;
        if (usersAnswer.value === correctAnswer){
            console.log("this was correct")
            score++;    }
        else {
            console.log("this was not correct")
            secondsLeft -= 10;
        }
        currentQuestion++;
    }

    */