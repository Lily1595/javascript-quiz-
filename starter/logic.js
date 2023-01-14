//WHEN THE START BUTTON IS PRESSED, THE GAME BEGINS 
document.getElementById("start").addEventListener("click", startGame)

//FUNCTION TO START THE GAME 
function startGame() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
}