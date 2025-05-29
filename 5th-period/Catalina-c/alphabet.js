const alphabet = [
  {
    letter: "A",
    question: "What letter comes after A?",
    answer: "B",
    hint: "The next letter is the first letter of a word that is a common object to play with outside",
  },
  {
    letter: "B",
    question: "What letter comes after B?",
    answer: "C",
    hint: "The next letter is the first letter of a word that is a common household pet",
  },
  {
    letter: "C",
    question: "What is the lowercase letter for C?",
    answer: "c",
    hint: "The lowercase version of C looks almost identical to the uppercase version",
  },
  {
    letter: "D",
    question: "What is the lowercase version for letter D?",
    answer: "d",
    hint: "The lowercase version of D is the opposite of lowercase letter b",
  },
  {
    letter: "E",
    question: "What was the letter that comes before E?",
    answer: "D",
    hint: "The letter that comes before E is the first letter of an animal that swims in the pond.",
  },
  {
    letter: "F",
    question: "What number is the letter F in the alphabetic order?",
    answer: "5",
    hint: "Subtract 10 from 15",
  },
  {
    letter: "Gg",
    question: "What word starts with 'G'?",
    answer: "Game",
    hint: "Hint...Hint..you’re playing a 'Game'!!!",
  },
  {
    letter: "H",
    question: "What letter comes after G?",
    answer: "H",
    hint: "The letter is the first letter of a word you use when greeting someone",
  },
  {
    letter: "I",
    question: "What is the first letter of the word 'ice cream'?",
    answer: "i",
    hint: "It looks like a flower without the petals!",
  },
  {
    letter: "J",
    question: "A yummy treat often shaped like a bean. What’s the first letter of 'Jellybean'?",
    answer: "J",
    hint: "It's sweet with rainbow colors!",
  },
  {
    letter: "K",
    question: "What letter does a ruler of a kingdom start with?",
    answer: "K",
    hint: "It's the husband of a queen",
  },
  {
    letter: "L",
    question: "This yellow fruit is sour. What is the first letter of 'Lemon'?",
    answer: "L",
    hint: "It's an oval-shaped citrus fruit",
  },
  {
    letter: "M",
    question: "This animal swings from tree to tree. What’s the first letter of 'Monkey'?",
    answer: "M",
    hint: "They love bananas!",
  },
  {
    letter: "N",
    question: "What letter comes before D?",
    answer: "C",
    hint: "What dessert do you eat on your birthday?",
  },
  {
    letter: "O",
    question: "What letter looks like a big round hug?",
    answer: "O",
    hint: "It's like the shape of a donut!",
  },
  {
    letter: "P",
    question: "What letter looks like a straight line, but with a balloon on top?",
    answer: "P",
    hint: "It's the first letter of 'pop'!",
  },
  {
    letter: "Q",
    question: "What does 'Q' look like when it's written in lowercase?",
    answer: "q",
    hint: "It's a letter that looks like 'p', but with a tail!",
  },
  {
    letter: "R",
    question: "What number is the letter 'R' in the alphabet?",
    answer: "18",
    hint: "It's an even number.",
  },
  {
    letter: "S",
    question: "What does 'S' look like when it's written in lowercase?",
    answer: "s",
    hint: "It's easier than you think... think a mini version of 'S'!",
  },
  {
    letter: "T",
    question: "What capital letter comes before 'T'?",
    answer: "S",
    hint: "It might just come before 't' in the word 'Store'...",
  },
  {
    letter: "U",
    question: "What lowercase letter comes after 'U'?",
    answer: "v",
    hint: "It may just be the mini version of 'V'...",
  },
  {
    letter: "V",
    question: "What number is the letter 'V' in the alphabet?",
    answer: "22",
    hint: "What's 11 + 11?",
  },
  {
    letter: "W",
    question: "What word starts with the sound of 'W'?",
    answer: "What",
    hint: "It's the first word in the question!",
  },
  {
    letter: "X",
    question: "How many lines does the letter 'X' have?",
    answer: "2",
    hint: "What comes after '1' but before '3'?",
  },
  {
    letter: "Y",
    question: "What did the yak say after eating a yam?",
    answer: "yammy",
    hint: "It's 'yummy' without the 'u' but with an 'a'...",
  },
  {
    letter: "Z",
    question: "What number is the letter 'Z' in the alphabet?",
    answer: "26",
    hint: "If you know how many letters in the alphabet there are (2 and 6 put next to each other), then you know 'Z' is at the very end...",
  }
];

let currentQuestionIndex = -1;

function getRandomQuestion() {
    // Randomly select a question from the alphabet array
    currentQuestionIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[currentQuestionIndex];
}

function startGame() {
    const questionObj = getRandomQuestion();
    document.getElementById("letter").textContent = `Letter: ${questionObj.letter}`;
    document.getElementById("question").textContent = questionObj.question;
    document.getElementById("hint").textContent = questionObj.hint;

    // Ensure the hint is hidden at the start of the quiz
    document.getElementById("hint").classList.add("hidden");

    // Reset the feedback and input field
    document.getElementById("feedback").textContent = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = alphabet[currentQuestionIndex].answer.toLowerCase();
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Good job! You got it right!";
    } else {
        feedback.textContent = "Oh no, it's okay! Maybe next time!!";
    }

    // After checking the answer, show the next question after a short delay
    setTimeout(startGame, 4000);  // Wait 4 seconds before showing the next question
}

function showHint() {
    // When the user clicks the button, remove the 'hidden' class to show the hint
    document.getElementById("hint").classList.remove("hidden");
}

// Add event listeners to the buttons
document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("hint-button").addEventListener("click", showHint);

// Start the quiz as soon as the page loads
startGame();

