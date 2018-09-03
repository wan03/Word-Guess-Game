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
var showLives = document.getElementById("lives");
var counter;
var guessedLetters = document.getElementById("guessedLetters");
var space = 1;
var wordHolder = document.getElementById("computer-word");
var start = document.getElementById("start-game");
var reset = document.getElementById("reset-game");

//Function to create the word container
reset = function(){
  wordHolder.innerHTML = " ";
  guessedLetters.innerHTML = " ";  
  
}

result = function () {
  wordHolder = document.getElementById("computer-word");
  

  for (var i = 0; i < word.length; i++) {
    wordGuess = document.createElement("span");
    wordGuess.setAttribute("id", "guess"+i);
    if (word[i] === "-") {
      wordGuess.innerHTML = "-";
      space = 1;
    } else {
      wordGuess.innerHTML = "_";
    }

    wordHolder.appendChild(wordGuess);
    console.log(word)
  }
}


// Set the way the computer is going to randomly choose words. Now this has turned into click to make everything work. Decided to wrap the word choice in its own function so that maybe I will be able to reuse it.



play = function() {
  word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  
  result();
  comments();
  check();
  // console.log(word);
};

//Getting the button to work

start.addEventListener("click", function(){
  reset();
  stop
  play ();

}); 

  

// Set the way the user is going to select letters, use functions!

// var userGuess = function storeKey(event) {
//   return (event.key);
// };
check = function() {
document.onkeyup = function(event) {
  var keypress = event.key.toLowerCase();
  var userGuess = storeKey(event);

  
  if (keypress == "a" || keypress == "b" || keypress == "c" || keypress == "d" || keypress == "e" || keypress == "f" || keypress == "g" || keypress == "h" || keypress == "i" || keypress == "j" || keypress == "k" || keypress == "l" || keypress == "m" || keypress == "n" || keypress == "o" || keypress == "p" || keypress == "q" || keypress == "r" || keypress == "s" || keypress == "t" || keypress == "u" || keypress == "v" || keypress == "w" || keypress == "x" || keypress == "y" || keypress == "z") {
    
  // guessedLetters.innerHTML += userGuess;

    for (var i = 0; i < word.length; i++) {
      if (word[i] === userGuess) {
        // console.log(userGuess)
        var changeLetter = document.getElementById("guess"+i);
        changeLetter.innerHTML=userGuess;
        // guesses[i].innerHTML = userGuess;
        // guesses[i] = userGuess;
        // guesses[i] = wordGuess[i];
        // wordGuess[1].innerHTML = userGuess;
        // guesses[i].innerHTML = userGuess;
        counter += 1;
        // guessedLetters.innerHTML += userGuess;
      } 
    }
    var j = (word.indexOf(userGuess));
    if (j === -1) {
      lives -= 1;
      guessedLetters.innerHTML += userGuess;
      comments();
      // animate();
    } else {
      comments();
    }
  

  };
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


  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over: Please click on New Game to continue playing.";
      reset();
    }
    for (var i = 0; i < word.length; i++) {
      if (counter + space === word.length) {
        showLives.innerHTML = "You Win! Please click on New Game to continue playing";
        reset();
      }
    }
  }

   // Do not really understand how to do this from scratch but thought it was really cool and wanted to include it. Couldn't get it to work properly, will try again later as I want to get the core of the game going first. 

  // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

//Hangman

   canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


// Check for whether the user guessed letter matches any of the character in the randomly generated word


// If the character matches reveal that letter from the word



// If the character does not match then reveal one of the parts of the hangman picture


// If the word is guess create a win condition at the end



// if user runs out of chances display lose condition at the end




//Reset game and choose a different word. Did this by asking the player to click on New Game. Will try later to see if I can automate that.

}
