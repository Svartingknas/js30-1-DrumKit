/** GOAL: When a user opens this page and presses a key that corresponds with
  * one of our div elements, we should play the audio clip associated with
  * the keypress, add a class to the specific element that matches with the keypress,
  * and then remove that class in order to reset the element to it's original state.
  */
function playSound(e) {
  const soundclip = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyelement = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!soundclip) return; // Stop function from running if key pressed doesn't match up with our elements

  keyelement.classList.add('playing');

  soundclip.currentTime = 0; // Play sound clip from start every time a corresponding key is pressed
  soundclip.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not a transform event
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // Find all elements in the document with a class 'key'
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
