document.addEventListener('DOMContentLoaded', function() {
  // Get buttons by their IDs
  const snareDrum = document.getElementById("btn1");
  const baseDrum = document.getElementById("btn2");
  const cymbal = document.getElementById("btn3");
  const hihat = document.getElementById("btn4");
  const toms = document.getElementById("btn5");
  const titi = document.getElementById("btn6"); 
  const ta = document.getElementById("btn7"); 

  // Set event listeners for buttons
  snareDrum.addEventListener("click", function() {
    playSound("snare");
  });

  baseDrum.addEventListener("click", function() {
    playSound("base");
  });

  cymbal.addEventListener("click", function() {
    playSound("cymbal");
  });

  hihat.addEventListener("click", function() {
    playSound("hihat");
  });

  toms.addEventListener("click", function() {
    playSound("toms");
  });

  titi.addEventListener("click", function() {
    playSound("titi"); 
  });

  ta.addEventListener("click", function() {
    playSound("ta"); 
  });

  // Function to play sound based on the instrument
  function playSound(instrument) {
    let audio;

    // Load the appropriate audio file
    switch (instrument) {
      case "snare":
        audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav");
        break;
      case "base":
        audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav");
        break;
      case "cymbal":
        audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav");
        break;
      case "hihat":
        audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav");
        break;
      case "toms":
        audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav");
        break;
      case "titi": // Plays twice 
        audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav");
        let playCount = 0;
        audio.addEventListener("ended", function() {
          playCount++;
          if (playCount < 2) {
            audio.currentTime = 0;
            audio.play();
          }
        });
        break;
      case "ta":
        audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav");
        break;
      default:
        console.log("Unknown instrument");
        return;
    }

    audio.play();
  }

  // Add keydown event listener for keyboard interaction
  document.addEventListener("keydown", function(event) {
    // Map the keys to their corresponding instruments
    switch (event.key) {
      case "q": // Snare Drum
        playSound("snare");
        break;
      case "w": // Bass Drum
        playSound("base");
        break;
      case "a": // Cymbal
        playSound("cymbal");
        break;
      case "s": // Hi-Hat
        playSound("hihat");
        break;
      case "z": // Toms
        playSound("toms");
        break;
      case "o": // Ti Ti (Tambourine)
        playSound("titi"); 
        break;
      case "p": // Ta (Tambourine)
        playSound("ta"); 
        break;
      default:
        // If the key doesn't match, nothing happens
        break;
    }
  });
});
