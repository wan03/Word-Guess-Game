// On load funtion (seems cool)
window.onload = function () {






// Declare needed variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z"];

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
  "arm-bar"

];

var word;
var lives = 10;
var showLives = document.getElementById("lives");
var wins = 0;
var losses = 0;
var wordGuess;
var guesses = [ ];


var guessedLetters = document.getElementById("guessedLetters");

//Function to create the word container

result = function () {
  wordHolder = document.getElementById("computer-word");
  correct = document.createElement("ul");

  for (var i = 0; i < word.length; i++) {
    correct.setAttribute("id", "my-word");
    wordGuess = document.createElement("li");
    wordGuess.setAttribute("class", "guess");
    if (word[i] === "-") {
      wordGuess.innerHTML = "-";
      space = 1;
    } else {
      wordGuess.innerHTML = "_";
    }

    guesses.push(wordGuess);
    wordHolder.appendChild(correct);
    correct.appendChild(wordGuess);
  }
}


// Set the way the computer is going to randomly choose words
var start = document.getElementById("startGame")

start.addEventListener("click", function(){
  word = wordChoices[Math.floor(Math.random() * wordChoices.length)];

  result()
  console.log(word);
});  


  

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





// Check for whether the user guessed letter matches any of the character in the randomly generated word


// If the character matches reveal that letter from the word



// If the character does not match then reveal one of the parts of the hangman picture


// If the word is guess create a win condition at the end



// if user runs out of chances display lose condition at the end




//Reset game and choose a different word

}