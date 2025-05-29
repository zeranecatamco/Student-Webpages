const cells = document.querySelectorAll(".cell"); 
// select all the cells
const statusText = document.querySelector("#statusText");
// select status text
const startBtn = document.querySelector("#startBtn"); 
// select start button
const xScore = document.getElementById("xScore"); 
// select x score
const oScore = document.getElementById("oScore");
// select o score
const changeRound = document.querySelector("#changeButton");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5], 
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6,]
];
// the winning conditions
let scoreOfX = 0;
let scoreOfO = 0;
//set the default score
xScore.textContent = `X: ${scoreOfX}`;
oScore.textContent = `O: ${scoreOfO}`;
// display scores
let options = ["","","","","","","","",""];
// use for click and display tic tac toe game
let currentPlayer = "X";
// X goes first
let running = false;
// game is not running
let roundTimes = 0;
// game is running the number of rounds, 1 match = 3 rounds
startBtn.addEventListener("click", game);
//click to start the game
let firstRound = false;
let thirdRound = false;
let fifthRound = false;

function game(){
  running = true;
  //run the game and allow to play next match after finish. 
  cells.forEach(cell => cell.textContent = "");
  //cell display nothing first
  xScore.textContent = `X: ${scoreOfX}`;
  oScore.textContent = `O: ${scoreOfO}`;
  //display the current  score
  roundOption();
}
// the function  is used for start and restart game
function roundOption(){
  changeRound.innerHTML = '<button id="roundOne"> 1 Round </button> <button id="roundThree"> 3 Round </button> <button id="roundFive"> 5 Round </button>'; 
  const roundOneBtn = document.querySelector("#roundOne");
  const roundThreeBtn = document.querySelector("#roundThree");
  const roundFiveBtn = document.querySelector("#roundFive");
  roundOneBtn.addEventListener("click", initializeGame);
  roundThreeBtn.addEventListener("click", initializeGameThree);
  roundFiveBtn.addEventListener("click", initializeGameFive);
}
function initializeGame(){
  firstRound = true;
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  //cells now can be clicked to play as X and O
  changeRound.innerHTML = '<button id="nextRound"> Next round </button'; 
  changeRound.addEventListener("click", nextRound);
  //button display as next round and able to click to change to the next round
  statusText.textContent = `${currentPlayer}'s turn`;
  //show who is going now
}
function initializeGameThree(){
  thirdRound = true;
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  //cells now can be clicked to play as X and O
  changeRound.innerHTML = '<button id="nextRound"> Next round </button'; 
  changeRound.addEventListener("click", nextRound);
  //button display as next round and able to click to change to the next round
  statusText.textContent = `${currentPlayer}'s turn`;
  //show who is going now
}
function initializeGameFive(){
  fifthRound = true; 
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  //cells now can be clicked to play as X and O
  changeRound.innerHTML = '<button id="nextRound"> Next round </button'; 
  changeRound.addEventListener("click", nextRound);
  //button display as next round and able to click to change to the next round
  statusText.textContent = `${currentPlayer}'s turn`;
  //show who is going now
}
//moving to the next round and allow player to play
function cellClicked (){
  const cellIndex = this.getAttribute("cellIndex");
  //link to the cell's index in html
  if(options[cellIndex] != "" || !running){
    return;
  }
  // if the cells are not empty or game is not running then return nothing
  updateCell(this, cellIndex);
  changePlayer();
  checkWinner();
  // call the functions
}
// allow cells to be clicke

function updateCell(cell, index){
  options[index] = currentPlayer;
  // the current player X or O will become the value of the index of cell
  cell.textContent = currentPlayer;
  // display X or O
}
// display X and O of the cell get clicked
function changePlayer(){
  if (currentPlayer == "X"){
    currentPlayer = "O";
  }
  else {
    currentPlayer = "X";
  }
  // change player after clicked
  statusText.textContent = `${currentPlayer}'s turn`;
  // display player's turn
}
// change player
function checkWinner(){
  let roundWon = false;
  changePlayer(); 
  // allow change player after each time click
  for(let i = 0; i < winConditions.length; i++){
    const condition = winConditions[i]; 
    // get the win condition
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];
    // the cell's positions to win
    if(cellA == "" || cellB == "" || cellC == ""){
      continue; 
    }
    // if the cell is not match to the win condition position, keep continue
    if (cellA == cellB && cellB == cellC){
      roundWon = true;
      break;
    }
    // if they match the win condition, the round won and stop the loop
  }
  if (roundWon){
    statusText.textContent = `${currentPlayer} wins!`;
    roundTimes++;
    //display the winner of that round and increment the number of rounds
    if(currentPlayer == "X"){
      scoreOfX++;
      xScore.textContent = `X: ${scoreOfX}`;
    }
    // if X won then X get point and showed
    if(currentPlayer == "O"){
      scoreOfO++;
      oScore.textContent = `O: ${scoreOfO}`;
    }
    // same as X but for O
    roundWon = false;
    running = false;
    // set them to false so player can't continue in that same round
  }
  else if (!options.includes("")){
    statusText.textContent = 'Draw!';
    roundTimes++; 
  }
  // increment the number of rounds but in draw case
   else {
      changePlayer();
    }
  // continue if no one win or draw
  
  if(firstRound && roundTimes == 1){
    //for player who choose play 1 round
      if(scoreOfX == scoreOfO){
        statusText.textContent = 'No Winner!';
        roundTimes = 0;
        scoreOfX = 0;
        scoreOfO = 0;
        currentPlayer = "X";
        options = ["","","","","","","","",""];
        startBtn.textContent = "New Game";
        startBtn.addEventListener("click", game);
        //allow to start new match
        running = false;
        changeRound.textContent="";
        firstRound = false;
      }
      // when player finish and their points are equal, then they draw and everything get reset for the next match
      else if (scoreOfX > scoreOfO) {
        statusText.textContent = "X is the champion!";
        roundTimes = 0;
        scoreOfX = 0;
        scoreOfO = 0;
        currentPlayer = "X";
        options = ["","","","","","","","",""];
        startBtn.textContent = "New Game";
        startBtn.addEventListener("click", game);
        running = false;
        changeRound.textContent="";
        firstRound = false;
      }
      // same but X wins instead of draw
      else {
        statusText.textContent = "O is the champion!";
        roundTimes = 0;
        scoreOfX = 0;
        scoreOfO = 0;
        currentPlayer = "X";
        options = ["","","","","","","","",""];
        startBtn.textContent = "New Game";
        startBtn.addEventListener("click", game);
        running = false;
        changeRound.textContent="";
        firstRound = false;
      }
      // same as X but O wins
    }
  if(thirdRound && roundTimes == 3){
    if(scoreOfX > scoreOfO){
      statusText.textContent = "X is the champion!";
      roundTimes = 0;
      scoreOfX = 0;
      scoreOfO = 0;
      currentPlayer = "X";
      options = ["","","","","","","","",""];
      startBtn.textContent = "New Game";
      startBtn.addEventListener("click", game);
      running = false;
      changeRound.textContent="";
      thirdRound = false; 
    }
    else if (scoreOfO > scoreOfX){
      statusText.textContent = "O is the champion!";
      roundTimes = 0;
      scoreOfX = 0;
      scoreOfO = 0;
      currentPlayer = "X";
      options = ["","","","","","","","",""];
      startBtn.textContent = "New Game";
      startBtn.addEventListener("click", game);
      running = false;
      changeRound.textContent="";
      thirdRound = false;
    }
    else {
      statusText.textContent = 'No Winner!';
      roundTimes = 0;
      scoreOfX = 0;
      scoreOfO = 0;
      currentPlayer = "X";
      options = ["","","","","","","","",""];
      startBtn.textContent = "New Game";
      startBtn.addEventListener("click", game);
      //allow to start new match
      running = false;
      changeRound.textContent="";
      thirdRound = false;
    }
  }
  if(fifthRound && roundTimes == 5){
    //for player who choose play 5 rounds
    if(scoreOfX == scoreOfO){
      statusText.textContent = 'No Winner!';
      roundTimes = 0;
      scoreOfX = 0;
      scoreOfO = 0;
      currentPlayer = "X";
      options = ["","","","","","","","",""];
      startBtn.textContent = "New Game";
      startBtn.addEventListener("click", game);
      running = false;
      changeRound.textContent="";
      fifthRound = false;
    }
    else if (scoreOfX > scoreOfO) {
      statusText.textContent = "X is the champion!";
      roundTimes = 0;
      scoreOfX = 0;
      scoreOfO = 0;
      currentPlayer = "X";
      options = ["","","","","","","","",""];
      startBtn.textContent = "New Game";
      startBtn.addEventListener("click", game);
      running = false;
      changeRound.textContent="";      
      fifthRound = false;
    }
    else {
      statusText.textContent = "O is the champion!";
      roundTimes = 0;
      scoreOfX = 0;
      scoreOfO = 0;
      currentPlayer = "X";
      options = ["","","","","","","","",""];
      startBtn.textContent = "New Game";
      startBtn.addEventListener("click", game);
      running = false;
      changeRound.textContent="";  
      fifthRound = false;
    }
  }
}

function nextRound(){
  currentPlayer = "X";
  if(roundTimes > 0){
      if(scoreOfX == (scoreOfO + 1)){
      currentPlayer = "X";
      changePlayer();
      }
      if (scoreOfO == (scoreOfX + 1)){
      currentPlayer = "O";
      changePlayer();
      }
  }
  options = ["","","","","","","","",""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
}
// move to next round and reset the table

const lightModeBtn = document.getElementById("lightMode");
const darkModeBtn = document.getElementById("darkMode");
lightModeBtn.addEventListener("click",lightMode);
darkModeBtn.addEventListener("click",darkMode);
//2 separate buttons to change mode
function lightMode(){
  document.body.style.background = "white";
  document.body.style.color = "black";
  document.querySelectorAll('div').forEach(v=>v.style.background= "white");
  document.querySelectorAll('div').forEach(di=>di.style.color = "black");
  document.querySelectorAll('#startBtn').forEach(a=>a.style.background="white");
  document.querySelectorAll('#startBtn').forEach(b=>b.style.color="black");
  document.querySelectorAll('#lightMode').forEach(c=>c.style.color = "white");
  document.querySelectorAll('#lightMode').forEach(c=>c.style.background = "white");
  document.querySelectorAll('#darkMode').forEach(e=>e.style.background = "white");
  document.querySelectorAll('#darkMode').forEach(es=>es.style.color = "black");
}
//change to white color
function darkMode(){
  document.body.style.background = "black";
  document.body.style.color = "white";
  document.querySelectorAll('div').forEach(v=>v.style.background= "black");
  document.querySelectorAll('div').forEach(di=>di.style.color = "white");
  document.querySelectorAll('#startBtn').forEach(a=>a.style.background="black");
  document.querySelectorAll('#startBtn').forEach(b=>b.style.color="white");
  document.querySelectorAll('#lightMode').forEach(c=>c.style.color = "white");
  document.querySelectorAll('#lightMode').forEach(c=>c.style.background = "black");
  document.querySelectorAll('#darkMode').forEach(e=>e.style.background = "black");
  document.querySelectorAll('#darkMode').forEach(es=>es.style.color = "black");
}
