
/* Toggle the burger menu */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
/* Scoreboard */
var scoreboard = document.getElementById("score")

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/* Change the color of the Letters on hover */

// Define the color spans as as variable
const listOfSpans=document.getElementsByClassName('color-letter')
//Write a function that will Change an elements color property to a random color
function changeToRandomColor () {
    let colorArray = ['Brown', 'DarkOrange', 'gold' , 'DarkOliveGreen ', 'LightSeaGreen', 'MediumVioletRed' ,'Violet' ];
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    if (this.style.color !== randomColor) {
        this.style.color=randomColor;
    }
    else {
        this.style.color='blue';
    }
}

for (let i = 0 ; i < listOfSpans.length;i++) {
    listOfSpans[i].addEventListener('mouseover', changeToRandomColor);

}

/* This is the start of the game. Everything inside of here will be the game , until the game ends */


function startGame() {

    /* This gets rid of the start button and displays the game as the game starts */
    document.getElementById('game-container').classList.toggle('hidden');
    document.getElementsByClassName('start-button-container')[0].classList.toggle('hidden');
    /* This variable keeps track of the score/level */
    var gameLevel = 1 
    /* This function when called, will update the score */
    function adjustScore () {
        scoreboard.innerText=gameLevel;
    }
    /* todo: write a function that will choose a random pattern based on the game level , then convey this information to the user on screen for them to try and reproduce in 
    order to score a point and progress to the next level */
    function revealPattern (level) {

        chosenButtons = []
        var possibleButtons = [0,1,2,3,4,5,6,7]
        for (let i = 0;li < level; i ++) { 
            /*choose a random number from the possibleButtons array and push it to the chosenButtons array */
            let randomChoice = possibleButtons[Math.floor(Math.random() * possibleButtons.length)];
            chosenButtons.push(randomChoice)
         }
        
        /*TODO: Now that we have a random arrary , it's a matter of conveying the information on screen to the user */


    }
    adjustScore();
    /* Adding event listeners to all of the game buttons and playing the corresponding note on click .*/
    for (let i = 0 ; i < document.getElementsByClassName('box').length; i ++ ) { 
        document.getElementsByClassName('box')[i].addEventListener('click', () => {
            var audio = new Audio("./assets/audio/note" + [i] + ".mp3");
            audio.play();
            gameLevel += 1 ; 
            adjustScore();
        })
    }

}