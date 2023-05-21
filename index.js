
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



