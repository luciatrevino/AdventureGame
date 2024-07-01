// Store the different parts of the story
const openingScreen = document.querySelector('.story-opening');
const optionOneScreen = document.querySelector('.doctor-screen');
const optionTwoScreen = document.querySelector('.death-scene');
const optionThreeScreen = document.querySelector('.red-apple');
const optionFourScreen = document.querySelector('.golden-apple');

// Store the buttons
const optionOneButton = document.querySelector('.option-one');
const optionTwoButton = document.querySelector('.option-two');
const optionThreeButton = document.querySelector('.option-three');
const optionFourButton = document.querySelector('.option-four');
const optionFiveButton = document.querySelector('.option-five');


// Event listener for option one button
optionFourScreen.style.display= 'none';
optionOneButton.addEventListener('click', function(){
    // Hide the opening screen
    openingScreen.style.display = 'none';
    optionFourScreen.style.display= 'none';

    
    // Show the option one screen
    optionOneScreen.style.display = 'block';
});

// Event listener for option two button
optionTwoButton.addEventListener('click', function(){
    // Hide the opening screen
    openingScreen.style.display = 'none';
    
    // Show the option two screen
    optionTwoScreen.style.display = 'block';
});


// Event listener for the end of option one
// This could be triggered by clicking on something within optionOneScreen
optionOneScreen.addEventListener('click', function(){
    // Hide the current screen
    optionOneScreen.style.display = 'none';
    
    // Show the option one end screen
    optionOneEnd.style.display = 'block';
});

// Event listener for the end of option two
// This could be triggered by clicking on something within optionTwoScreen
optionTwoScreen.addEventListener('click', function(){
    // Hide the current screen
    optionTwoScreen.style.display = 'none';
    
    // Show the option two end screen
    optionTwoEnd.style.display = 'block';
});
optionThreeButton.addEventListener('click', function(){
    optionOneScreen.style.display = 'none';
    optionThreeScreen.style.display= 'block';
});
optionFourButton.addEventListener('click', function(){
    optionOneScreen.style.display = 'none';
    optionThreeScreen.style.display= 'block';
});