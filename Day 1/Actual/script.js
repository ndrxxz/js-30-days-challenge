// function to play the sound and add visual effects when a key is pressed
function playSound(e){
    
    // find the corresponding audio element based on the key's keyCode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // find the corresponding .key div element for the pressed key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // if no matching audio element is found, exit the function
    if(!audio) return;

    // reset the audio playback to the start to allow repeated plays
    audio.currentTime = 0;

    // play the audio
    audio.play();

    // add class 'playing' to the .key element for visual animation
    key.classList.add('playing');
}

// function to remove the 'playing' class after the animation ends
function removeTransition(e){

    // only act if the ended transition is for the 'transform' property
    if(e.propertyName !== 'transform') return;

    // remove the class 'playing' from the element
    this.classList.remove('playing');
}

// select all .key class element and add an event listener for the 'transitionend' event
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// add a keydown event listener to the window to trigger the playSound function
window.addEventListener('keydown', playSound);