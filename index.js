
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
 var listOfGameButtons = document.getElementsByClassName('box');
 var gameContainer = document.getElementById('game-container');


//Declare the game variables
var score = 0 ;
var pattern = [] ;


/* this will toggle the game window to display */

/* this will toggle the game window to display */
function toggleGame () {
    document.getElementById('game-container').classList.toggle('hidden');
    document.getElementsByClassName('start-button-container')[0].classList.toggle('hidden');
    adjustScore(score);
    };
    
/* Making a constant to store the game buttons */ 

var listOfGameButtons = document.getElementsByClassName('box');

/* This function when called, will update the score , pass gameLevel as an argument */
function adjustScore (score) {
    scoreboard.innerText=score;
}

/* This function will return a random array based on the game level */ 

function makeRandomChoices (level) {

    chosenButtons = []
    var possibleButtons = [0,1,2,3,4,5,6,7]
    for (let i = 0;i < level; i ++) { 
        /*choose a random number from the possibleButtons array and push it to the chosenButtons array */
        let randomChoice = possibleButtons[Math.floor(Math.random() * possibleButtons.length)];
        chosenButtons.push(randomChoice)
        
     }
     return chosenButtons;
    }

/*TODO : Write a function that will convey the random array to the user so that they can repeat it . Pass makeRandomChoices as an argument*/ 

function revealPatternToUser (choices) { 

    

    for (let i=0; i< choices.length; i++) {
    task(i);
    }
    
    function task(i) {
    setTimeout(function() {
        listOfGameButtons[choices[i]].classList.toggle('active');
        var audio = new Audio("./assets/audio/note" + [choices[i]] + ".mp3");
        audio.play();
        setTimeout(() => {
            listOfGameButtons[choices[i]].classList.toggle('active');  
        },1000)

    }, 1000 * i);
    }

    evaluateUserInput(choices);

}

/*Make a function that will evaluate the persons input and check it against what the computer has and return a boolean */ 
    function evaluateUserInput (choices) {
        let x = 0 
        var userChoices = [];

        // Add event listeners to all the buttons now
        for (let i = 0 ; i < listOfGameButtons.length; i ++ ) { 
            document.getElementsByClassName('box')[i].addEventListener('click', () => {
                var audio = new Audio("./assets/audio/note" + [i] + ".mp3");
                audio.play();
                //Add something here that check user input against the computers input
                userChoices.push(i);
                if (userChoices.toString() === choices.toString()) {
                    gameLevel += 1 ; 
                    adjustScore(gameLevel);


                }
                for (let x = 0 ; x < choices.length; x++) {
                    if (i === choices[x]) {
                        var audio = new Audio("./assets/audio/correct.mp3");
                        audio.play();
                    }

                    else {
                    var audio = new Audio("./assets/audio/incorrect.mp3");
                    audio.play();
                    toggleGame();
                    }

                }

                
            })
    }
}

    /*Write a fuction that will start the next round */




/* This is the start of the game. Everything inside of here will be the game , until the game ends */

function startGame() {

    toggleGame();


    /* This gets rid of the start button and displays the game as the game starts */

    /* This variable keeps track of the score/level */



    /*Displays a random pattern based on the gameLevel*/
    revealPatternToUser(makeRandomChoices(gameLevel));



    
    /* Adding event listeners to all of the game buttons and playing the corresponding note on click .*/
//     for (let i = 0 ; i < listOfGameButtons.length; i ++ ) { 
//         document.getElementsByClassName('box')[i].addEventListener('click', () => {
//             var audio = new Audio("./assets/audio/note" + [i] + ".mp3");
//             audio.play();
//             /*This is just for testing the score and will be changed later*/
//             gameLevel += 1 ; 
//             adjustScore(gameLevel);
//         })
//     }
}


