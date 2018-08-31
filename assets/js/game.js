// Declare needed variables


var wordChoices = [
  "throw",
  "kick",
  "punch",
  "judo",
  "karate",
  "grappling",
  "choke",
  "hyperextension",
  "defense",
  "tournament",
  "arm bar"

];

var word
var lives = 10
var showlives = document.getElementById("lives");
var game = {
  wins: 0,
  losses: 0,
  // computerGuess:
};

var guessedLetters = document.getElementById("guessedLetters");

// Set the way the user is going to select letters, use functions!

var userGuess = function storeKey(event) {
  return (event.key);
};

document.onkeyup = function(event) {
  var keypress = event.key.toLowerCase();
  var userGuess = storeKey(event);

  
  if (keypress == "a" || keypress == "b" || keypress == "c" || keypress == "d" || keypress == "f" || keypress == "g" || keypress == "h" || keypress == "j" || keypress == "k" || keypress == "l" || keypress == "m" || keypress == "n" || keypress == "o" || keypress == "p" || keypress == "q" || keypress == "r" || keypress == "s" || keypress == "t" || keypress == "u" || keypress == "v" || keypress == "w" || keypress == "x" || keypress == "y" || keypress == "z") {
    

  guessedLetters.innerHTML += userGuess

  };



  // var guessedLetters = document.getElementById("guessedLetters")

  // guessedLetters.textContent = userGuess

};

function storeKey(event) {
  return ("" + event.key);
};
  // console.log(userGuess)

// userGuess = document.onkeyup(event)




// Research how to do an object to put logic in it




// Set the way the computer is going to randomly choose words
var start = document.getElementById("startGame")

start.addEventListener("click", function(){
  var wordGuess = wordChoices[Math.floor(Math.random() * Choices.length)];

  console.log(wordGuess);



});
  



// Check for whether the user guessed letter matches any of the character in the randomly generated word


// If the character matches reveal that letter from the word



// If the character does not match then reveal one of the parts of the hangman picture


// If the word is guess create a win condition at the end



// if user runs out of chances display lose condition at the end




//Reset game and choose a different word