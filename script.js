function playSound(e) {
  // get audio based on given key id's
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops the function if an unassigned key is played
    audio.currentTime = 0; // allows to play same key before sound finishes
    audio.play();
    key.classList.add('playing');
  }

function playSoundOnClick(e) { 
  let path = event.path;
  for (let i = 0; i < path.length; i++) {

    if(path[i].hasAttribute("data-key")){
      const pathAttributeValue = path[i].attributes["data-key"].value;
      const audio = document.querySelector(`audio[data-key="${pathAttributeValue}"]`);
      const key = document.querySelector(`div[data-key="${pathAttributeValue}"]`);
        // if key that doesn't exist is pressed, do nothing/ just return
      if (!audio) {
        return;
      }
      audio.currentTime = 0; //rewind to start when key is pressed again
      audio.play(); // self explanatory right?
      key.classList.add("playing"); //add class of playing to it
    }
  }
}



  function removeTransition(e) {
    if (e.propertyName !=='transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  keys.forEach(key => {
  key.addEventListener("click", playSoundOnClick);
});
/* remove applied class when transition is done */
  keys.forEach(pad =>
  key.addEventListener("transitionend", removeTransition)
);