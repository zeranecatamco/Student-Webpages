const words = [
  {
    main: "cat",
    correctAnswer: ["hat", "fat"],
    options: ["dog", "hat", "fish", "fat", "tree"]
  },
  {
    main: "sun",
    correctAnswer: ["fun"],
    options: ["car", "moon", "fun", "drum", "shoe"]
  },
  {
    main: "blue",
    correctAnswer: ["clue", "true"],
    options: ["red", "book", "clue", "true", "green"]
  },
  {
    main: "light",
    correctAnswer: ["night", "fight"],
    options: ["day", "dark", "moon", "fight", "night"]
  },
  {
    main: "car",
    correctAnswer: ["star", "far"],
    options: ["bus", "star", "train", "far", "book"]
  }
];

let currentIndex = 0;

const mainWordEl = document.getElementById("main-word");//where main word will be displayed
const optionsEl = document.getElementById("options");//this just shows the list of options 
const feedbackEl = document.getElementById("feedback");//just the feedback like correct or try again
const nextButton = document.getElementById("next-button"); //hopefully gets the button to go to the next word

function loadWord() {//function to help load the current word and options to the screen
  const current = words[currentIndex];// the main word and its options
  mainWordEl.textContent = current.main;//just displays the main word like "cat" 
  optionsEl.innerHTML = "";//just clears the old options 
  feedbackEl.textContent = ""; //clears thefeedback
  nextButton.classList.add("hidden");// this hides the next button until the user selects thr right answwr

  for (let i = 0; i < current.options.length; i++) { //goes through each option for the rhyming word
    const option = current.options[i]; //gets the current option text 
    const btn = document.createElement("button"); //makes the buttons
    btn.textContent = option;//the button text forthe options in the quiz

    btn.addEventListener("click", function() { //when this button is clicked it 
      checkAnswer(btn, option, current.correctAnswer); //checks if the clicked answer is right
    });

    optionsEl.appendChild(btn); //adds the button to the page
  }
}

function checkAnswer(button, selected, correctAnswers) { //function to hceck if the answer is correct
  const isCorrect = correctAnswers.includes(selected); //checks if the answer selected is correct in the list like for cat its hat and fat
  feedbackEl.textContent = isCorrect ? "youre correct!" : "try again!"; //shwos feedback whether it was right or wrong
  feedbackEl.style.color = isCorrect ? "white" : "brown"; //the color of the feedback for right or wrong

  const buttons = optionsEl.questionSelectorAll("button"); //the answer buttons 
  for (let i = 0; i < buttons.length; i++) { //goes through each button
    buttons[i].disabled = true; //once clicked an answer you cant click again
  }
}

nextButton.addEventListener("click", function() { //when the next button option is clicked u go to the next question
  currentIndex++;
  if (currentIndex < words.length) { //if there are more questions youre gonna load into the next one 
    loadWord();
  } else { //else if there are no more questions you are given feedback
    mainWordEl.textContent = "you're done! yay ";
    optionsEl.innerHTML = ""; //remove all the buttons
    feedbackEl.textContent = "good job!"; //shows the finished message
    nextButton.classList.add("");
  }
});

loadWord();// starts the quiz
