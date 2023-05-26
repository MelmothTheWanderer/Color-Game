
/* Toggle the burger menu */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

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

/*Lets add event listener to all the buttons to test the sounds*/


function startGame() {

    document.getElementById('game-container').classList.toggle('hidden');

    for (let i = 0 ; i < document.getElementsByClassName('box').length; i ++ ) { 
        document.getElementsByClassName('box')[i].addEventListener('click', () => {
            var audio = new Audio("./assets/audio/note" + [i] + ".mp3");
            audio.play();
        })
    }

}