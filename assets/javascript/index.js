/* Toggle the burger menu */
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/* Change the color of the Letters on hover */

// Define the color spans as as variable
const listOfSpans = document.getElementsByClassName('color-letter');
//Write a function that will Change an elements color property to a random color
function changeToRandomColor() {
    let colorArray = ['Brown', 'DarkOrange', 'gold', 'DarkOliveGreen ', 'LightSeaGreen', 'MediumVioletRed', 'Violet'];
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    if (this.style.color !== randomColor) {
        this.style.color = randomColor;
    } else {
        this.style.color = 'blue';
    }
}

for (let i = 0; i < listOfSpans.length; i++) {
    listOfSpans[i].addEventListener('mouseover', changeToRandomColor);

}

/*
 #####                           #####                       
#     #   ##   #    # ######    #     #  ####  #####  ###### 
#        #  #  ##  ## #         #       #    # #    # #      
#  #### #    # # ## # #####     #       #    # #    # #####  
#     # ###### #    # #         #       #    # #    # #      
#     # #    # #    # #         #     # #    # #    # #      
 #####  #    # #    # ######     #####   ####  #####  ###### 
 */

//Declare the variables for DOM elements
const listOfGameButtons = document.getElementsByClassName('box');
const gameContainer = document.getElementById('game-container');
const scoreboard = document.getElementById("score");


//Declare the game variables
let score = 0;
let pattern = [];

/* This function when called, will update the score , pass score as an argument */
function adjustScore(score) {
    scoreboard.innerText = score;
}

/* this will toggle the game window to display */
function toggleGame() {
    document.getElementById('game-container').classList.toggle('hidden');
    document.getElementsByClassName('start-button-container')[0].classList.toggle('hidden');
    adjustScore(score);
}

//!! START THE GAME
function initTheGame() {
    //1. Rest the score and pattern
    score = 0;
    pattern = [];
    adjustScore(score);
    //2 Display the game area and hide the start button
    toggleGame();
    addToThePattern();
    displayPatternToUser(pattern);
}

//ADD TO THE PATTERN 
/* This function will return a random choice of button */

function addToThePattern() {

    chosenButton = undefined;
    let possibleButtons = [0, 1, 2, 3, 4, 5, 6, 7];
    /*choose a random number from the possibleButtons array and push it to the chosenButtons array */
    let randomChoice = possibleButtons[Math.floor(Math.random() * possibleButtons.length)];
    chosenButton = randomChoice;

    pattern.push(chosenButton);
}

//DISPLAY THE PATTERN TO THE USER
//Pass pattern as an argument

function displayPatternToUser(p) {

    for (let i = 0; i < p.length; i++) {
        task(i);
    }

    function task(i) {
        setTimeout(function() {
            setTimeout(() => {
                listOfGameButtons[p[i]].classList.toggle('active');
            }, 50);

            let audio = new Audio("./assets/audio/note" + [p[i]] + ".mp3");
            audio.play();
            setTimeout(() => {
                listOfGameButtons[p[i]].classList.toggle('active');
            }, 750);

        }, 750 * i);
    }
}

//!! LISTEN TO USERS INPUT

function listenToUserInput() {


    timesClicked = 0;
    userGuesses = [];
    // Add event listeners to all the buttons now
    for (let i = 0; i < listOfGameButtons.length; i++) {
        listOfGameButtons[i].addEventListener('click', () => {

            //Code to execute on click of button : 

            let audio = new Audio("./assets/audio/note" + [i] + ".mp3");
            audio.play();
            //!! TEST CODE: 
            console.log(`The i value is ${i}`);
            //what to do when guess is correct: 
            if (i === pattern[timesClicked]) {
                let audio = new Audio("./assets/audio/correct.mp3");
                audio.play();
                userGuesses.push(i);
            }
            //What to do when guess is incorrect: 
            if (i !== pattern[timesClicked]) {
                let audio = new Audio("./assets/audio/gameover.mp3");
                audio.play();
                gameContainer.innerHTML = "<h1 class = 'game-over'>Your score is : " + score + "</h1><h1 class='reload-text'>The game will reload in 3 seconds</h1>";
                setTimeout(() => {
                    window.location.reload();
                }, 4000);
            }
            //Keep track of how many times clicked
            if (timesClicked < pattern.length) {
                timesClicked += 1;
            }
            //What to do when the guesses match perfectly

            if (userGuesses.toString() === pattern.toString()) {
                score += 1;
                addToThePattern();
                adjustScore(score);
                timesClicked = 0;
                userGuesses = [];
                //Start the game over but leave a little room for a delay . 

                setTimeout(() => {
                    displayPatternToUser(pattern);
                }, 1000);

            }
        });
    }
}

listenToUserInput(pattern);