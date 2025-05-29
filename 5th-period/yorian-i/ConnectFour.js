const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
  [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
  [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
  [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
  [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
  [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
  [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],
  [0,7,14,21],[7,14,21,28],[14,21,28,35],
  [1,8,15,22],[8,15,22,29],[15,22,29,36],
  [2,9,16,23],[9,16,23,30],[16,23,30,37],
  [3,10,17,24],[10,17,24,31],[17,24,31,38],
  [4,11,18,25],[11,18,25,32],[18,25,32,39],
  [5,12,19,26],[12,19,26,33],[19,26,33,40],
  [6,13,20,27],[13,20,27,34],[20,27,34,41],
  [0,8,16,24],[1,9,17,25],[2,10,18,26],[3,11,19,27],
  [7,15,23,31],[8,16,24,32],[9,17,25,33],[10,18,26,34],
  [14,22,30,38],[15,23,31,39],[16,24,32,40],[17,25,33,41],
  [3,9,15,21],[4,10,16,22],[5,11,17,23],[6,12,18,24],
  [31,25,19,13],[30,24,18,12],[29,23,17,11],[28,22,16,10],
  [38,32,26,20],[37,31,25,19],[36,30,24,18],[35,29,23,17],
];
let options = Array(42).fill("");
let currentPlayer = "🔴";
let running = false;

initializeGame();

function initializeGame() {
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] !== "" || !running) return;
  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer === "🔴" ? "🟡" : "🔴";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c, d] = winConditions[i];
    if (
      options[a] !== "" &&
      options[a] === options[b] &&
      options[a] === options[c] &&
      options[a] === options[d]
    ) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins! 🏆`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = "Draw!";
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = "🔴";
  options.fill("");
  cells.forEach(cell => (cell.textContent = ""));
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}
