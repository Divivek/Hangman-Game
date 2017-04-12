// <script type="text/javascript">
var words = ['Titanic', 'Amadeus', 'Gandhi', 'cabaret', 'Patton', 'Gravity', 'Schindlers', 'The Sting', 'The Bridge', 'Star Wars'];
var triesRemaining = 0;
var keysUsed = '';
var lostGame = "Lets Play";
var randomWord;
gameWon = " ";
var q = 0;
var empty; // = new Array(randomWordLength);
var emptyChar = "_";
var keyArray = [];

document.getElementById("stat").innerHTML = q;
initilize();

function initilize() {

    keyArray = [];

    gameWon = " ";
    triesRemaining = 12;
    lostGame = "Lets Play again";
    keysUsed = '';

    randomWord = words[Math.floor(Math.random() * (words.length))];

    randomWordLength = randomWord.length;

    empty = new Array(randomWordLength);

    for (var i = 0; i < empty.length; i++) {
        emptyChar = empty[i];

    document.getElementById("demo").innerHTML = empty;
    document.getElementById("remaining").innerHTML = "Tries Remaining: " + triesRemaining;
    document.getElementById("stat").innerHTML = q;
    document.getElementById("key").innerHTML = keyArray;
    document.getElementById("won").innerHTML = "Game on";
    console.log("demo");

    }
  } // END OF FUNCTION INITLILIZE 

function gameIsOver() {

    alert("Game is over");
    exit();

}

function checkifWin(arrayToCheck, charToCheck) {
    var win = true;
    for (var i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] == charToCheck) {
            win = false;
            gameWon = "you win";
        }
    }
    return (win);

    console.log('win');
}
function keyused(x) {
    if (keysUsed.toLowerCase().indexOf(x, 0) >= 0) {
        return true;
    };
    return false;
}

document.onkeyup = function(event) {
    var keyPressed = event.key.toLowerCase();

    if (!keyused(keyPressed)) {
        // add to keypressed string 
        keysUsed = keysUsed.concat(keyPressed);
        keyArray.push(keyPressed);

        if (randomWord.toLowerCase().indexOf(keyPressed, 0) < 0) { // if no match in word 

            triesRemaining--;

            if (triesRemaining <= 0) {
                document.getElementById("won").innerHTML = "Try Again!";
                // initilize();
                q = q + 1;
                document.getElementById("stat").innerHTML = q;
                if (q >= 8) {
                    gameIsOver();
                }

            }; // IF triesRemaining
            document.getElementById("remaining").innerHTML = "Tries Remaining  " + triesRemaining;

            console.log(keyPressed);
            console.log(keyArray);

            document.getElementById("key").innerHTML = keyArray;
        } // Pressed key not found  IF 
        else {
            var p = -1;
            do {
                p = randomWord.toLowerCase().indexOf(keyPressed, p + 1);
                console.log("poistion is " + p);
                console.log("word is  is " + randomWord);
                if (p >= 0) {
                    empty[p] = keyPressed;
                }
            }
            while (p >= 0);
        } // If key is found 
    }; // IF Key used 

    document.getElementById("demo").innerHTML = empty;
    console.log("demo");

    if (checkifWin(empty, emptyChar)) {
        document.getElementById("won").innerHTML = "You Win";
        // alert( " YOU WIN !!!  HANGMAN "); 
        q = q + 1;
        document.getElementById("stat").innerHTML = q;
        if (q >= 8) {
            gameIsOver();
        }

    }

};