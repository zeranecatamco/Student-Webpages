const textDisplay = document.getElementById('text-display'); //get the paragrpah to show a random sentence
const inputBox = document.getElementById('input-box'); //text area where the user will type
const timeDisplay = document.getElementById('time'); //span to show how much time is left
const wpmDisplay = document.getElementById('wpm'); //span showing the words per minute (WPM)
const sentences = [ //the list of random sentences that will be displayed
  "Timmy loves chocolate milk. He drinks a glass everyday and every night. This morning he's noticed he's run out of milk. He grabs his bag and money off the counter to buy some more. He returns home from the grocery store with his milk. He can now start his day!",
  "Freddy was a frog who loved hopping through the grass in the rain. He saw a train and decided to hop on! The train went fast and made a loud choo! choo! sound. Freddy held tight onto the train.",
  "In the town of Wiggle, the sky isn't blue and cows don't say moo. There lived a wibble wobble creature named Wiggle Woo! He bounced when he walked, and spun when he ran.",
  "My name is Honey the bee, I buzz when I flap and flap when I buzz. I take pollen baths and drink nectar tea's! I am a very busy bee you see. I greet the queen everyday, 'Have a buzzing day!' I say."
];
let timer; //timer variable will control countdown
let timeLeft = 60; //starting time is set to 60 seconds.
let isRunning = false; //flag that will check if test is running
let currentSentence = ''; //store the sentence that the user must type
function getRandomSentence() { //function that will pick a random sentence
  const randomIndex = Math.floor(Math.random() * sentences.length); //pick random index
  return sentences[randomIndex];
}
function startTest() { //function to start or restart the test
  clearInterval(timer); //will stop any other previous timer
  timeLeft = 60; // reset time to 60
  isRunning = true; //test is marked as running
  inputBox.disabled = false; //enable typing box
  inputBox.value = ""; //clear typing box
  inputBox.focus(); //focus is set to typing box
  wpmDisplay.textContent = '0'; // reset the WPM display to zero
  timeDisplay.textContent = timeLeft;// update the time displayed on screen
  currentSentence = getRandomSentence(); //generate a new random sentence from the options given
  textDisplay.textContent = currentSentence; //display the random sentence
  timer = setInterval(() => { //start timer that will countdown every second
    timeLeft--; //decrease time left by one
    timeDisplay.textContent = timeLeft; //update the time on the screen
    if (timeLeft <= 0) { 
      endTest(); //end the typing test if time runs out
    }
  }, 1000); 
}
inputBox.addEventListener('input', () => { //event: when user types something
  if (!isRunning) return; //if the test isnt running, dont do anything
  // Check if user's input exactly matches the full sentence
  if (inputBox.value === currentSentence) { //if the users input is an exact match to the sentence provided
    endTest();//test will end early
  }
});
function endTest() { //function to stop the test and display WPM
  clearInterval(timer); //stop timer
  inputBox.disabled = true; //disable typing box
  isRunning = false; 
  const typedText = inputBox.value; //get what the user typed
  const wordCount = countWords(typedText); //count how many words were typed
  const timeTaken = 60 - timeLeft || 1; //calculate the time that was spent typing
  const wpm = Math.round((wordCount / timeTaken) * 60); //calculate WPM
  wpmDisplay.textContent = wpm; //show WPM
}
function countWords(text) { //function to count the words in the provided sentence
  let count = 0; //word count is set to zero
  let insideWord = false; //check if we're inside a word
  for (let i = 0; i < text.length; i++) { //loop through every character
    if (text[i] !== ' ') { //if character isnt a space
      if (!insideWord) { //if not inside a word previously
        count++; //begin a new word
        insideWord = true; //currently inside a word
      }
    } else { //character is a space
      insideWord = false; //are outside a word
    }
  }
  return count; //return total number of words
}
