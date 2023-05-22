
/* Toggle the burger menu */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/* Change the color of the Letters on hover */

/* Step1: Make an array that will house the range of possible colors. I used the colours of 
the rainbow for now , but they might look better as pastels or more subdued colors */

const colorArray = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

/* Step 2: Using a FOR loop , add an event listener to each of the "spans" in the brand title 
so that we can change the color when the mouse passes over it */


const listOfSpans=document.getElementsByClassName('color-letter')

// for (let i = 0; i < listOfSpans.length; i ++){
// let colorArray = ['Brown', 'DarkOrange', 'gold' , 'DarkOliveGreen ', 'LightSeaGreen', 'MediumVioletRed' ,'Violet' ]
// let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
// listOfSpans[i].style.color=randomColor;
// }

function changeToRandomColor () {
    let colorArray = ['Brown', 'DarkOrange', 'gold' , 'DarkOliveGreen ', 'LightSeaGreen', 'MediumVioletRed' ,'Violet' ];
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    if (this.style.color!= randomColor) {
        this.style.color=randomColor;
    }
    else {
        this.style.color='black';
    }
}


for (let i = 0 ; i < listOfSpans.length;i++) {
    listOfSpans[i].addEventListener('mouseover', changeToRandomColor);
}
