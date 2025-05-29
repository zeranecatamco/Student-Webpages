

const cards = document.querySelectorAll(".card");
const counter = document.querySelector(".moves");
const timer = document.querySelector(".timer");
const difficultyBtns = document.querySelectorAll(".difficulty-btn");

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let pairs = 0,
    moves = 0,
    seconds = 0,
    minutes = 0,
    interval;
let currentDifficulty = "easy"; // Default difficulty

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");
    moveCounter();

    if (!hasFlippedCard) {
        firstCard = this;
        hasFlippedCard = true;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.tech === secondCard.dataset.tech;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    pairs++;

    if (pairs === getPairsForDifficulty()) endGame();

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle(cardList) {
    cardList.forEach((card) => {
        let randomPos = Math.floor(Math.random() * cardList.length);
        card.style.order = randomPos;
    });
}

function endGame() {
    setTimeout(() => {
        stopTimer();
        alert(`You won in ${moves} moves!`);
    }, 300);
}

function moveCounter() {
    moves++;
    counter.innerHTML = moves;

    if (moves === 1) {
        startTimer();
    }
}

function startTimer() {
    interval = setInterval(() => {
        timer.innerHTML = minutes + "mins " + seconds + "secs";
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function getCardCountForDifficulty(difficulty) {
    switch (difficulty) {
        case "easy":
            return 12;
        case "medium":
            return 16;
        case "hard":
            return 20;
        default:
            return 12;
    }
}

function getPairsForDifficulty() {
    return getCardCountForDifficulty(currentDifficulty) / 2;
}

function resetGame() {
    pairs = 0;
    moves = 0;
    seconds = 0;
    minutes = 0;
    counter.innerHTML = moves;
    timer.innerHTML = "0mins 0secs";
    stopTimer();
}

function setupGame(difficulty) {
    currentDifficulty = difficulty;
    resetGame();

    const cardCount = getCardCountForDifficulty(difficulty);
    const allCards = Array.from(document.querySelectorAll(".card"));
    const selectedCards = allCards.slice(0, cardCount);

    // Hide all cards, then show the selected ones
    cards.forEach(card => card.style.display = 'none');
    selectedCards.forEach(card => {
        card.style.display = ''; // Show selected card
        card.classList.remove("flip"); // Reset card flip state
        card.addEventListener("click", flipCard); // Re-add event listeners

    });

    shuffle(selectedCards);
}

difficultyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        setupGame(btn.dataset.difficulty);
    });
});

// Initial setup for easy difficulty
setupGame("easy");

// Reset Button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
    setupGame(currentDifficulty); // Reset with current difficulty
});

