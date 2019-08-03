





//-- Letters chossen by computer. --//
var computerChoice = ["a", "c", "g", "k", "r", "n"];
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computerGuess);

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessesSoFar = [];

var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesChosen = document.getElementById("guessessofar");

document.onkeyup = function (event) {

    var userGuess = event.key;
    console.log(userGuess);
    guessesLeft--;
    console.log(guessesLeft);
    guessesSoFar.push(userGuess);
    console.log(guessesSoFar);
    guessesLeftText.textContent = "guessesLeft: " + guessesLeft;
    guessesChosen.textContent = "guessessofar: " + guessesSoFar;
    
    if (userGuess === computerGuess) {
        wins++;
        winsText.textContent = "wins: " + wins;
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        guessesLeft = 5;
    }else if (guessesLeft === 0){
        losses++;
        lossesText.textContent = "losses: " + losses;
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        guessesLeft = 5;

    } 
}