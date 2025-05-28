// Initialize game variables
let currentRound = 0;
let score = 0;

// Flags data: flag images, correct answers, and options for each round
const flags = [
    {
        image: 'https://i.insider.com/5b1feba65e48ec1f008b45a3?width=600&format=jpeg&auto=webp', // Flag for Jamaica
        correctAnswer: 'Dominica',
        options: ['Jamaica', 'Grenada', 'Germany', 'Dominica']
    },
    {
        image: 'https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg', // Flag for Germany
        correctAnswer: 'Germany',
        options: ['Jamaica', 'Grenada', 'Germany', 'Dominica']
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/1200px-Flag_of_Grenada.svg.png', // Flag for Grenada
        correctAnswer: 'Grenada',
        options: ['Jamaica', 'Grenada', 'Germany', 'Dominica']
    }
];

// Load the flag and answer options for the current round
function loadFlag(round) {
    const flag = flags[round];
    document.getElementById('flag').src = flag.image; // Change flag image

    const buttons = document.querySelectorAll('#answer-buttons .btn'); // Get answer buttons
    flag.options.forEach((option, index) => {
        buttons[index].textContent = option; // Update button text with options
    });
}

// Function to check the selected answer
function checkAnswer(answer) {
    const correctAnswer = flags[currentRound].correctAnswer;
    const feedbackElement = document.getElementById('feedback'); // Element to display feedback

    if (answer === correctAnswer) {
        feedbackElement.textContent = 'Correct!'; // Correct answer message
        score++; // Increase score
    } else {
        feedbackElement.textContent = 'Wrong! The correct answer was ' + correctAnswer; // Wrong answer message
    }

    // Disable all buttons after an answer is selected
    const buttons = document.querySelectorAll('#answer-buttons .btn');
    buttons.forEach(button => {
        button.disabled = true; // Disable answer buttons
    });
}

// Function to go to the next round
function nextFlag() {
    currentRound++;
    if (currentRound >= flags.length) {
        alert('Game Over! Your score is ' + score); // Show final score when game is over
        resetGame(); // Reset game for a new round
    } else {
        loadFlag(currentRound); // Load next flag and options
        document.getElementById('feedback').textContent = ''; // Clear feedback text
        const buttons = document.querySelectorAll('#answer-buttons .btn');
        buttons.forEach(button => {
            button.disabled = false; // Enable buttons for next round
        });
    }
}

// Reset the game to start over
function resetGame() {
    currentRound = 0;
    score = 0;
    loadFlag(currentRound); // Load the first flag again
}

// Load the first flag when the page is ready
loadFlag(currentRound);
