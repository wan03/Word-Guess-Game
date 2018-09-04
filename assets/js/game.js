// On load funtion
window.onload = function () {

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
  "arm-bar",
  "jigoro-kano",
  "morihei-ueshiba",
  "ju-jutsu"  
];

var word;
var lives = 10;
var showLives = document.getElementById("lives");
var wordGuess;
var showLives = document.getElementById("lives");
var counter;
var guessedLetters = document.getElementById("guessedLetters");
var space = 1;
var wordHolder = document.getElementById("computer-word");
var start = document.getElementById("start-game");
var reset = document.getElementById("reset-game");
var bowDiv = document.getElementById("bow");
var winCondition = document.getElementById("win-condition");
var fact;
var wordExist = 0;
var winningWord;

// Function to reset the game so that it can be replayed

reset = function(){
  wordHolder.innerHTML = " ";
  guessedLetters.innerHTML = " ";
  lives = 10;
  counter = 0;      
  
};

//Function to create the word container

result = function () {
  wordHolder = document.getElementById("computer-word");
  bowDiv.setAttribute("class", "hidden");

  for (var i = 0; i < word.length; i++) {
    wordGuess = document.createElement("span");
    wordGuess.setAttribute("id", "guess"+i);
    wordGuess.setAttribute("class", "guess");
    if (word[i] === "-") {
      wordGuess.innerHTML = "-";
      space = 1;
    } else {
      wordGuess.innerHTML = "_";
    };

    wordHolder.appendChild(wordGuess);
  };
};

// Detect word that wins and add appropriate response to the DOM

winner = function() {

winCondition.setAttribute("id", winningWord);

if (word == "throw") {
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/OWW2pr04JUY?rel=0&amp;start=8");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");    
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);  
  winCondition.removeAttribute("id", word);  
 
} else if (word == "kick"){ 
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/dRaz5_0oUU4");
  ifrm.setAttribute("frameborder", "0");  
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "punch"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/6b8Z-RzhaQc");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "judo"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/dFp-dy4NXD8");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "karate"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/b5xbGct2E8E?rel=0");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "grappling"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/d7125-XhCps");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "choke"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/OlDSm8UTK20");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "hyperextension"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/Tf7O9l9kA2Y");
  ifrm.setAttribute("frameborder", "0");  
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "defense"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/n0Eo74qbDww");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "tournament"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/w84H1S2SPgw");
  ifrm.setAttribute("frameborder", "0");  
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "arm-bar"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/n2dTvWLlRm0");
  ifrm.setAttribute("frameborder", "0");  
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "jigoro-kano"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/FoFwE8pX2js");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "morihei-ueshiba"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/8V7NHLlmT3Y");
  ifrm.setAttribute("frameborder", "0"); 
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

} else if (word == "ju-jutsu"){
  fact = document.getElementById(word);
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/wLRc7SIsj2s");
  ifrm.setAttribute("frameborder", "0");  
  ifrm.setAttribute("allow", "encrypted-media");
  ifrm.setAttribute("id", word);  
  ifrm.style.width = "560px";
  ifrm.style.height = "315px";
  winCondition.appendChild(ifrm);
  winCondition.removeAttribute("id", word);

};
};

// Function to delete de video that gets created when person wins.

deleteVideo = function() {  
if (wordExist != 0) {     
document.getElementById(winningWord).remove();
wordExist = 0; 
};
};

// Set the way the computer is going to randomly choose words. Now this has turned into click to make everything work. Decided to wrap the word choice in its own function so that maybe I will be able to reuse it.

play = function() {  
  deleteVideo();
  word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  winningWord = word;
  lives = 10;
  counter = 0;
  space = 0;  
  result();
  comments();
  check();   
};

//Getting the button to work

start.addEventListener("click", function(){
  reset();
  play();

}); 

  

// Set the way the user is going to select letters and so that they cannot repeat the same letters. This also check to see if the letter corresponds to one of the letters in the word and displays that letter if it does or reduces the lives if it doesn't.

check = function() {

var usedKeys = [ ];  

document.onkeyup = function(event) {  
  
  var keypress = event.key.toLowerCase();  
  var userGuess = storeKey(event);
  
  if (usedKeys.includes(keypress) == false) {

  if (keypress == "a" || keypress == "b" || keypress == "c" || keypress == "d" || keypress == "e" || keypress == "f" || keypress == "g" || keypress == "h" || keypress == "i" || keypress == "j" || keypress == "k" || keypress == "l" || keypress == "m" || keypress == "n" || keypress == "o" || keypress == "p" || keypress == "q" || keypress == "r" || keypress == "s" || keypress == "t" || keypress == "u" || keypress == "v" || keypress == "w" || keypress == "x" || keypress == "y" || keypress == "z") {   
    
    usedKeys.push(userGuess);    
    
    for (var i = 0; i < word.length; i++) {
      if (word[i] === userGuess) {        
        var changeLetter = document.getElementById("guess"+i);
        changeLetter.innerHTML=userGuess;       
        counter += 1;
      }; 
    };
    var j = (word.indexOf(userGuess));
    if (j === -1) {
      lives -= 1;
      guessedLetters.innerHTML += userGuess;
      comments();
      // animate();
    } else {
      comments();
    };  
  };  
  };
};
};

//Storing event.key so that other variables can use it.

function storeKey(event) {
  return ("" + event.key);
};

  // Show lives and determine win condition and display value on the DOM. Added a way of resetting if another letter is pressed. Only using it for when player loses because it is very easy to hit a letter and if you do that when you win you will not be able to see the video.

  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over: Please click on New Game or press any key to continue playing.";
      reset();
        document.onkeyup = function(event) {
        var keypress = event.key.toLowerCase();
        if (keypress == "a" || keypress == "b" || keypress == "c" || keypress == "d" || keypress == "e" || keypress == "f" || keypress == "g" || keypress == "h" || keypress == "i" || keypress == "j" || keypress == "k" || keypress == "l" || keypress == "m" || keypress == "n" || keypress == "o" || keypress == "p" || keypress == "q" || keypress == "r" || keypress == "s" || keypress == "t" || keypress == "u" || keypress == "v" || keypress == "w" || keypress == "x" || keypress == "y" || keypress == "z") {
            play();
        };
        };
    };

      if (counter + space === word.length) {
        showLives.innerHTML = "You Win! Enjoy the video below. Once you are ready please click on New Game to continue playing.";
        wordExist++;                
        winner();
        reset();        
        document.onkeyup = function(event) {
          var keypress = event.key.toLowerCase();
          if (keypress == "a" || keypress == "b" || keypress == "c" || keypress == "d" || keypress == "e" || keypress == "f" || keypress == "g" || keypress == "h" || keypress == "i" || keypress == "j" || keypress == "k" || keypress == "l" || keypress == "m" || keypress == "n" || keypress == "o" || keypress == "p" || keypress == "q" || keypress == "r" || keypress == "s" || keypress == "t" || keypress == "u" || keypress == "v" || keypress == "w" || keypress == "x" || keypress == "y" || keypress == "z") {          
          //  play();
          showLives.innerHTML = "You Win! Enjoy the video below. Once you are ready please click on New Game to continue playing.";  
          };
          };         
      };
    }; 

   // Do not really understand how to do this from scratch but thought it was really cool and wanted to include it. Couldn't get it to work properly, will try again later as I want to get the core of the game going first. 

  // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  };

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

};
