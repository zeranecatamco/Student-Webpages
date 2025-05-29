let totalWins = 0; // total number of wins counter

// initial references for the different elements in the game
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

// options for categories and words
let options = {
  Games: [
    "Terraria",
    "Minecraft",
    "Roblox",
    "Fortnite",
    "Lethal Company",
    "Suits Absolute Power",
    "Dead by Daylight",
    "Sonic the Hedgehog",
    "Sea of Thieves",
    "Red Dead Redemption",
    "Portal",
    "Undertale",
    "Mario",
    "Hollow Knight",
    "Stardew Valley",
    "Tetris",
    "Overwatch",
    "Monster Hunter",
    "Halo",
    "Wii Sports",
    "Elden Ring",
    "Metal Gear",
    "Resident Evil",
    "Kirby",
    "Legend of Zelda",
  ],
  Stores: ["Target", "Best Buy", "Kmart", "Walmart", "Costco", "Ross", "Gamestop", "Miniso", "H and M", "Macys", "JCPenney", "UNIQLO", "Sephora", "Bath and Body works", "Michaels",],
  Candy: [
    "Toffee",
    "Chocolate",
    "Lollipop",
    "Sour Patch Kids",
    "Gummy Bears",
    "Skittles",
    "Starburst",
    "Hersheys",
    "Candy Corn",
    "Kitkat",
    "M and Ms",
  ],
};

// game state variables to track wins and mistakes and the word
let winCount = 0;
let count = 0;

// random word selected
let chosenWord = "";

// function to display the category buttons for the user to choose from
const displayOptions = () => {
  optionsContainer.innerHTML = `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  // a loop through the options to create buttons for each category
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

// function that blocks excessive interaction when game ends (win/lose)
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  // disables all the category buttons
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  // disable all the letter buttons
  letterButtons.forEach((button) => {
    button.disabled = true;
  });
  newGameContainer.classList.remove("hide");
};

// function generating a random word from the selected category
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");

  optionsButtons.forEach((button) => {
    if (button.innerText === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];

  // chooses a random word and make it uppercase
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)].toUpperCase();

  // shows the word with blanks for every letter
  userInputSection.innerHTML = chosenWord
    .split("") // Split word into an array of characters
    .map((char) => (char === " " ? `<span class="space"> </span>` : `<span class="dashes">_</span>`))
    .join("");
};

// function that sets up the game
const initializer = () => {
  winCount = 0; // reset win count
  count = 0; // reset mistakes

  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  // creation of letter buttons (the alphabet)
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    // ASCII to letter and add event listener for each letter
    button.innerText = String.fromCharCode(i);
    button.addEventListener("click", () => {
      if (button.disabled) return; // stops clicking the same button

      let charArray = chosenWord.split(""); // changes chosen word into an array
      let placeholders = document.querySelectorAll(".dashes, .space"); // get the placeholders for letters

      let found = false; // see if the letter was found in the word

      // a loop through the word to check if the letter is correct
      charArray.forEach((char, index) => {
        if (char.toUpperCase() === button.innerText.toUpperCase() && char !== " ") {
          placeholders[index].innerText = char; // reveals correct letter
          winCount++; // increase win count
          found = true;
        }
      });

      // if letter is wrong, mistake count is increased and part of hangman is drawn
      if (!found) {
        count++;
        drawMan(count); // call function to draw hangman
      }

      // win condition: checks if all letters are revealed
      let totalLetters = chosenWord.replace(/ /g, "").length;

      const updateWinCounter = () => {
        document.getElementById("win-counter").innerText = `Total Wins: ${totalWins}`;
      };

      // checks if the user has won
      if (winCount === totalLetters) {
        resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
        totalWins++;  // adds 1 to total wins
        updateWinCounter();  // updates the total wins
        blocker();  // stops excessive interaction after winning
      }

      // loss condition: if 6 mistakes are made (6 parts to the hangman)
      if (count === 6) {
        resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
        blocker(); // disbales excessive interaction after losing
      }

      // disables the clicked letter button
      button.disabled = true;
    });

    letterContainer.append(button);
  }

  displayOptions(); // function to display category options
  // canvascreator initializing hangman frame
  let { initialDrawing } = canvasCreator();
  initialDrawing(); // draws frame of the hangman
};

// function to create and return the canvas for the hangman game
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  // function drawing line on canvas
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  // function to draw each part of the hangman
  // function for dominiks face (thanks to kierian aren bautistas help)
  const head = () => {
    const img = new Image();
    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7c57373-558e-4348-8cd0-b4fcc03a1fbb/djdqvjl-e5f5ed21-8370-44d9-854e-82a578b2fb69.png/v1/fit/w_419,h_559/crawfish_by_apcompsci3rdperiod_djdqvjl-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU5IiwicGF0aCI6IlwvZlwvYjdjNTczNzMtNTU4ZS00MzQ4LThjZDAtYjRmY2MwM2ExZmJiXC9kamRxdmpsLWU1ZjVlZDIxLTgzNzAtNDRkOS04NTRlLTgyYTU3OGIyZmI2OS5wbmciLCJ3aWR0aCI6Ijw9NDE5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.MR7MDwC1cY3y1NQ2gx41c_FUI30qm3o2UpXwKkpoJx8";

    img.onload = () => {
      context.drawImage(img, 50, 10, 40, 50);
    };
  };

  const body = () => {
    drawLine(70, 53, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 53, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 53, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  const initialDrawing = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawLine(10, 130, 130, 130); // bottom line
    drawLine(10, 10, 10, 131); // left line
    drawLine(10, 10, 70, 10); // top line
    drawLine(70, 10, 70, 20); // smaller top line
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

// function drawing the hangman when mistakes are made
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

// event listener for new game
newGameButton.addEventListener("click", initializer);

// initialize the game when the page loads
window.onload = initializer;
