//Initial References, each container or div created in html
 const letterContainer = document.getElementById("letter-container");
 const optionsContainer = document.getElementById("options-container");
 const userInputSection = document.getElementById("user-input-section");
 const newGameContainer = document.getElementById("new-game-container");
 const newGameButton = document.getElementById("new-game-button");
 const canvas = document.getElementById("canvas");
 const resultText = document.getElementById("result-text");
 
 //potential answers for each category
 let options = {
   characters: [
     "Spongebob",
     "Shrek",
     "Pikachu",
     "Caillou",
     "Scrooge",
     "Goofy",
     "Pluto",
     "Popeye",
     "Scooby",
     "Shaggy",
     "Tinkerbell",
     "Rapunzel",
     "Tigger",
     "Piglet",
     "Pocahontas",
     "Garfield",
     "Gru",
     "Casper",
     "Dexter",
     "Yogi",
     "Dora",
     "Peppa",
     "Stewie",
     "Goku",
     "Naruto",
     "Rick",
     "Morty",
     "Finn",
     "Jake",
     "Wednesday",
     "Grinch",
   ],
   Books: [
     "Twilight",
     "Frankenstein",
     "Matilda",
     "Corduroy",
     "Dracula",
     "Niight",
     "Speak",
     "Wonder",
     "It",
     "Dune",
     "Macbeth",
     "Emma",
     "Holes",
     "Coraline",
     "Lolita",
     "Frindle",
     "Pinocchio",
     "Hatchet",
     "Smile",
       
   ],
   Desserts: [
     "Cookies",
     "Cheesecake",
     "Eclairs",
     "Tiramisu",
     "Macaroons",
     "Macarons",
     "Truffles",
     "Donuts",
     "Muffins",
     "Brownie",
     "Churros",
     "Flan",
     "Cake",
     "Pie",
     "Gingerbread",
     "Jello",
     "Madeleines",
     "Beignets",
     "Croquembouche",
     "Milkshake",
     
   ],
 };
 
 //count how many letters are right and how many letters are pressed, keep track of when the person will win or lose
 let winCount = 0;
 let count = 0;
 
 let chosenWord = "";
 
 //Display option buttons
 const displayOptions = () => {
   optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`; //display message to choose category
   let buttonCon = document.createElement("div");
   for (let value in options) {
     buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;//an option from the category will randomly be chosen, recognizes the amount of letter in said option to display amount of letter spaces
   }
   optionsContainer.appendChild(buttonCon);
 };
 
 //Block all the Buttons
 const blocker = () => {
   let optionsButtons = document.querySelectorAll(".options");
   let letterButtons = document.querySelectorAll(".letters");
   //disable all options
   optionsButtons.forEach((button) => {
     button.disabled = true; // blocks options once an potion is chosen so that button cannot be pressed again
     
   });
   
 
   //disable all letters
   letterButtons.forEach((button) => {
     button.disabled.true; // diables letter buttons so that player cannot get out twice for same letter
   });
   newGameContainer.classList.remove("hide"); // when game ends display option to play again with message
 };
 
 //Word Generator
 const generateWord = (optionValue) => {
   let optionsButtons = document.querySelectorAll(".options");
   //If optionValue matches the button innerText then highlight the button (for some reason only works for the first category)
   optionsButtons.forEach((button) => {
     if (button.innerText.toLowerCase() === optionValue) { // allow uppercase letters, options for letter button are all upper case
       button.classList.add("active"); //button active if pressed
     }
     button.disabled = true; // gets disabled if pressed, active > disabled
   });
 
   //initially hide letters, clear previous word
   letterContainer.classList.remove("hide"); // hides letter boxes before category is pressed
   userInputSection.innerText = "";
 
   let optionArray = options[optionValue];
   //choose random word
   chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
   chosenWord = chosenWord.toUpperCase(); // changes input options to uppercase (originally uppercase) when spelled in the game (does this make sense?)
 
   //replace every letter with span containing dash
   let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
 
   //Display each element as span
   userInputSection.innerHTML = displayItem;
 };
 
 //Initial Function (Called when page loads/user presses new game), restart score when newgame is pressed
 const initializer = () => {
   winCount = 0;
   count = 0;
 
   //Initially erase all content and hide letters and new game button, restart letters and word when newgame is pressed
   userInputSection.innerHTML = "";
   optionsContainer.innerHTML = "";
   letterContainer.classList.add("hide");
   newGameContainer.classList.add("hide");
   letterContainer.innerHTML = "";
 
   //For creating letter buttons
   for (let i = 65; i < 91; i++) {
     let button = document.createElement("button"); // make letter in buttons
     button.classList.add("letters");
     //Number to ASCII[A-Z]
     button.innerText = String.fromCharCode(i);
     //character button click
     button.addEventListener("click", () => {
       let charArray = chosenWord.split("");
       let dashes = document.getElementsByClassName("dashes");
       //if array contains clicked value, replace the matched dash with letter, else draw on canvas
       button.classList.add("used"); // change color of button when pressed ****
       if (charArray.includes(button.innerText)) {
         charArray.forEach((char, index) => {
           //if character in array is same as clicked button
           if (char === button.innerText) {
             //replace dash with letter
             dashes[index].innerText = char;
             //increment counter
             winCount += 1;
             //if winCount equals word length
             if (winCount == charArray.length) { // this means that player wins letters correct == the amount of letters in the random word
               resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
               //block all buttons, cannot be pressed b/c already won
               blocker();
             }
           }
         }); // if lose
       } else {
         //lose count increase
         count += 1;
         //for drawing man
         drawMan(count);
         //Count==6 because head,body,left arm, right arm,left leg,right leg , 6 times to get wrong
         if (count == 6) {
           resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`; // display lose message
           blocker();
         }
       }
       //disable clicked button
       button.disabled = true;
       
     });
     letterContainer.append(button);
   }
 
   displayOptions();
   //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
   let { initialDrawing } = canvasCreator();
   //initialDrawing would draw the frame
   initialDrawing();
 };
 
 //Canvas
 const canvasCreator = () => {
   let context = canvas.getContext("2d");
   context.beginPath();
   context.strokeStyle = "#000";
   context.lineWidth = 2;
 
   //For drawing lines
   const drawLine = (fromX, fromY, toX, toY) => {
     context.moveTo(fromX, fromY);
     context.lineTo(toX, toY);
     context.stroke();
   };
 // drawing each body part
   const head = () => {
     context.beginPath();
     context.arc(70, 30, 10, 0, Math.PI * 2, true);
     context.stroke();
   };
 
   const body = () => {
     drawLine(70, 40, 70, 80);
   };
 
   const leftArm = () => {
     drawLine(70, 50, 50, 70);
   };
 
   const rightArm = () => {
     drawLine(70, 50, 90, 70);
   };
 
   const leftLeg = () => {
     drawLine(70, 80, 50, 110);
   };
 
   const rightLeg = () => {
     drawLine(70, 80, 90, 110);
   };
 
   //initial frame, the hanging thing
   const initialDrawing = () => {
     //clear canvas
     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
     //bottom line
     drawLine(10, 130, 130, 130);
     //left line
     drawLine(10, 10, 10, 131);
     //top line
     drawLine(10, 10, 70, 10);
     //small top line
     drawLine(70, 10, 70, 20);
   };
 
   return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
 };
 
 //draw the man, order of how the drawn things appear when wrong
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
 
 //New Game
 newGameButton.addEventListener("click", initializer);
 window.onload = initializer; //when new game is pressed restart all
