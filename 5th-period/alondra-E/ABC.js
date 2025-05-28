const alphabet = [
  {
    letter: "Aa",
    question: "What uppercase letter comes after 'A'?",
    answer: "B",
    hint: "The next letter is the first letter of a word that is a common object to play with outside.",
  },
  {
    letter: "Bb",
    question: "What uppercase letter comes after 'B'?",
    answer: "C",
    hint: "The next letter is the first letter of a word that is a common household pet, it might meow.",
  },
  {
    letter: "C",
    question: "What is the lowercase letter for 'C'?",
    answer: "c",
    hint: "The lowercase version of C looks identical to the uppercase version, only smaller.",
  },
  {
    letter: "D",
    question: "What is the lowercase version for letter D?",
    answer: "d",
    hint: "The lowercase version of 'D' is the inverse of lowercase letter 'b'.",
  },
  {
    letter: "Ee",
    question: "What is the uppercase letter that comes before 'E'?",
    answer: "D",
    hint: "The letter that comes before E is the first letter of an animal that swims in the pond.",
  },
  {
    letter: "Ff",
    question: "What number is the letter 'F' in the alphabetic order?",
    answer: "6",
    hint: "Subtract 9 from 15",
  },
  {
    letter: "Gg",
    question: "What word starts with 'G'?",
    answer: "Game",
    hint: "Hint...Hint..you’re playing a 'Game'!!!",
  },
  {
    letter: "Hh",
    question: "What uppercase letter comes after 'H'?",
    answer: "I",
    hint: "The letter is also a word you use to refer to yourself.",
  },
  {
    letter: "I",
    question: "What is the first letter of the word 'ice cream'?",
    answer: "i",
    hint: "It looks like a flower without the petals!",
  },
  {
    letter: "Jj",
    question: "A yummy treat often shaped like a bean. What is it?",
    answer: "Jellybean",
    hint: "It's sweet with rainbow colors! Jelly + bean",
  },
  {
    letter: "Kk",
    question: "What lowercase letter does a ruler of a kingdom start with?",
    answer: "k",
    hint: "It's the husband of a queen",
  },
  {
    letter: "Ll",
    question: "This yellow fruit is sour. What is it?",
    answer: "Lemon",
    hint: "It's an oval-shaped citrus fruit.",
  },
  {
    letter: "Mm",
    question: "This animal swings from tree to tree. What is it??",
    answer: "Monkey",
    hint: "It loves bananas!",
  },
  {
    letter: "Nn",
    question: "What's a part of your body that starts with 'N'?",
    answer: "Nose",
    hint: "You use it to smell!",
  },
  {
    letter: "Oo",
    question: "What uppercase letter looks like a big round hug?",
    answer: "O",
    hint: "It's like the shape of a donut!",
  },
  {
    letter: "Pp",
    question: "What uppercase letter looks like a straight line, but with a balloon on top?",
    answer: "P",
    hint: "It's the first letter of 'Pop'!",
  },
  {
    letter: "Q",
    question: "What does 'Q' look like when it's written in lowercase?",
    answer: "q",
    hint: "It's a letter that looks like 'p', but with a tail!",
  },
  {
    letter: "Rr",
    question: "What number is the letter 'R' in the alphabet?",
    answer: "18",
    hint: "It's an even number.",
  },
  {
    letter: "S",
    question: "What does 'S' look like when it's written in lowercase?",
    answer: "s",
    hint: "It's easier than you think... think of a mini version of 'S'!",
  },
  {
    letter: "Tt",
    question: "What capital letter comes before 'T'?",
    answer: "S",
    hint: "It might just come before 't' in the word 'Store'...",
  },
  {
    letter: "Uu",
    question: "What lowercase letter comes after 'U'?",
    answer: "v",
    hint: "It may just be the mini version of 'V'...",
  },
  {
    letter: "Vv",
    question: "What number is the letter 'V' in the alphabet?",
    answer: "22",
    hint: "What's 11 + 11?",
  },
  {
    letter: "Ww",
    question: "What word starts with the sound of 'W'?",
    answer: "What",
    hint: "It's the first word in the question!",
  },
  {
    letter: "Xx",
    question: "How many lines does the letter 'X' have?",
    answer: "2",
    hint: "What comes after '1' but before '3'?",
  },
  {
    letter: "Yy",
    question: "What did the yak say after eating a yam?",
    answer: "yammy",
    hint: "It's 'yummy' without the 'u' but with an 'a'...",
  },
  {
    letter: "Zz",
    question: "What number is the letter 'Z' in the alphabet?",
    answer: "26",
    hint: "If you know how many letters in the alphabet there are (2 and 6 put next to each other), then you know 'Z' is at the very end...",
  }
]; //array of letters with their corresponding question, answer, and hint (array that holds objects for each letter of the alphabet)

let currentQuestionIndex = -1; //initalize a variable to track the index of the current question

function getRandomQuestion() { //Function that randomly selects a question from alphabet array
    currentQuestionIndex = Math.floor(Math.random() * alphabet.length); //randomly selects index from 0 to alphabet length - 1
    return alphabet[currentQuestionIndex]; //returns randomized question's index
}

function startGame() { //function to start game
    const questionObj = getRandomQuestion(); 
  
    if (!questionObj) return; //If no question object is returned, exit the function early

    document.getElementById("letter").textContent = "Letter: " + questionObj.letter; //Set the text content of the 'letter' element to display the letter from the question object
    document.getElementById("question").textContent = questionObj.question; //Set the text content of the 'question' element to display the question from the question object
    document.getElementById("hint").textContent = questionObj.hint; // Set the text content of the 'hint' element to display the hint from the question object

    document.getElementById("hint").classList.add("hidden"); //Hides the hint at the initial start of the game

    document.getElementById("feedback").textContent = ""; //resets/clears the feedback text
    document.getElementById("answer").value = ""; //resets/clears the answer input (the "Enter your answer" box)
}

function checkAnswer() { //function to check the user's inputted answer
    const userAnswer = document.getElementById("answer").value;
    const correctAnswer = alphabet[currentQuestionIndex].answer; //Checks correct answer from current question object
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Good job! You got it right!"; //If user's input is correct and matches the correct answer, output this
    } else {
        feedback.textContent = "Oh no, it's okay! Maybe next time!!"; //Otherwise, output this
    }

    setTimeout(startGame, 4000);  //After checking the answer, wait 4 seconds before showing the next question
}

function showHint() {
    document.getElementById("hint").classList.remove("hidden"); //When user clicks the button, 'hidden' class is removed to show the hint
}

//Add event listeners to the buttons
document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("hint-button").addEventListener("click", showHint);


startGame(); //Start the game when the page loads

