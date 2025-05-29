/*--------------------------------- Stopwatch ---------------------------------*/
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let hour = 0;
let minute = 0;
let second = 0;
let mili = 0;
startBtn.addEventListener("click", function () {
	timer = true;
	stopwatch();
});
stopBtn.addEventListener("click", function () {
	timer = false;
});
resetBtn.addEventListener("click", function () {
	timer = false;
	hour = 0;
	second = 0;
	minute = 0;
	mili = 0;
	document.getElementById("hrs").innerHTML = "00";
	document.getElementById("mins").innerHTML = "00";
	document.getElementById("secs").innerHTML = "00";
	document.getElementById("milis").innerHTML = "00";
});
function stopwatch() {
	if (timer == true) {
		mili++;
		if (mili == 100) {
			second++;
			mili = 0;
		}
		if (second == 60) {
			minute++;
			second = 0;
		}
		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}
		let hrsOut = hour;
		let minOut = minute;
		let secOut = second;
		let miliOut = mili;
		if (hour < 10) hrsOut = "0" + hrsOut;
		if (minute < 10) minOut = "0" + minOut;
		if (second < 10) secOut = "0" + secOut;
		if (mili < 10) miliOut = "0" + miliOut;
		document.getElementById("hrs").innerHTML = hrsOut;
		document.getElementById("mins").innerHTML = minOut;
		document.getElementById("secs").innerHTML = secOut;
		document.getElementById("milis").innerHTML = miliOut;
		setTimeout(stopwatch, 10);
	}
}
/*--------------------------------- To Do List ---------------------------------*/
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
	if (inputBox.value === " ") alert("You must write something down!");
	else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = " ";
}
listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") e.target.classList.toggle("checked");
		else if (e.target.tagName === "SPAN") e.target.parentElement.remove();
	},
	false
);
const string = ["Do laundry", "Make bed", "Pay bills"];
function addSgstTask(i) {
	let li = document.createElement("li");
	li.innerHTML = string[i];
	listContainer.appendChild(li);
	let span = document.createElement("span");
	span.innerHTML = "\u00d7";
	li.appendChild(span);
}
/*--------------------------------- Connect 4 ---------------------------------*/
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
	[0, 1, 2, 3],
	[1, 2, 3, 4],
	[2, 3, 4, 5],
	[3, 4, 5, 6],
	[7, 8, 9, 10],
	[8, 9, 10, 11],
	[9, 10, 11, 12],
	[10, 11, 12, 13],
	[14, 15, 16, 17],
	[15, 16, 17, 18],
	[16, 17, 18, 19],
	[17, 18, 19, 20],
	[21, 22, 23, 24],
	[22, 23, 24, 25],
	[23, 24, 25, 26],
	[24, 25, 26, 27],
	[28, 29, 30, 31],
	[29, 30, 31, 32],
	[30, 31, 32, 33],
	[31, 32, 33, 34],
	[35, 36, 37, 38],
	[36, 37, 38, 39],
	[37, 38, 39, 40],
	[38, 39, 40, 41],
	[0, 7, 14, 21],
	[7, 14, 21, 28],
	[14, 21, 28, 35],
	[1, 8, 15, 22],
	[8, 15, 22, 29],
	[15, 22, 29, 36],
	[2, 9, 16, 23],
	[9, 16, 23, 30],
	[16, 23, 30, 37],
	[3, 10, 17, 24],
	[10, 17, 24, 31],
	[17, 24, 31, 38],
	[4, 11, 18, 25],
	[11, 18, 25, 32],
	[18, 25, 32, 39],
	[5, 12, 19, 26],
	[12, 19, 26, 33],
	[19, 26, 33, 40],
	[6, 13, 20, 27],
	[13, 20, 27, 34],
	[20, 27, 34, 41],
	[0, 8, 16, 24],
	[1, 9, 17, 25],
	[2, 10, 18, 26],
	[3, 11, 19, 27],
	[7, 15, 23, 31],
	[8, 16, 24, 32],
	[9, 17, 25, 33],
	[10, 18, 26, 34],
	[14, 22, 30, 38],
	[15, 23, 31, 39],
	[16, 24, 32, 40],
	[17, 25, 33, 41],
	[3, 9, 15, 21],
	[4, 10, 16, 22],
	[5, 11, 17, 23],
	[6, 12, 18, 24],
	[31, 25, 19, 13],
	[30, 24, 18, 12],
	[29, 23, 17, 11],
	[28, 22, 16, 10],
	[38, 32, 26, 20],
	[37, 31, 25, 19],
	[36, 30, 24, 18],
	[35, 29, 23, 17]
];
let options = ["", "", "", "", "", "","", "", "", "", "", "", "","", "", "", "", "", "", "","", "", "", "", "", "", "","", "", "", "", "", "", "","", "", "", "", "", "", "","", "", "", "", "", "", "","", "", "", "", "", "", "",""]; 
let currentPlayer = "🔴";
let running = false;
initializeGame();
function initializeGame() {
	cells.forEach((cell) => cell.addEventListener("click", cellClicked));
	restartBtn.addEventListener("click", restartGame);
	statusText.textContent = `${currentPlayer}'s turn`;
	running = true;
}
function cellClicked() {
	const cellIndex = this.getAttribute("cellIndex");
	if (options[cellIndex] != "" || !running) return;
	updateCell(this, cellIndex);
	checkWinner();
}
function updateCell(cell, index) {
	options[index] = currentPlayer;
	cell.textContent = currentPlayer;
}
function changePlayer() {
	currentPlayer = currentPlayer == "🔴" ? "🟡" : "🔴";
	statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner() {
	let roundWon = false;
	for (let i = 0; i < winConditions.length; i++) {
		const condition = winConditions[i];
		const cellA = options[condition[0]];
		const cellB = options[condition[1]];
		const cellC = options[condition[2]];
		const cellD = options[condition[3]];

		if (cellA == "" || cellB == "" || cellC == "" || cellD == "") continue;
		if (cellA == cellB && cellB == cellC && cellA == cellD) {
			roundWon = true;
			break;
		}
	}
	if (roundWon) {
		statusText.textContent = `${currentPlayer} wins!`;
		running = false;
	} else if (!options.includes("")) {
		statusText.textContent = `Draw!`;
		running = false;
	} else changePlayer();
}
function restartGame() {
	currentPlayer = "🔴";
	options = [
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	];
	statusText.textContent = `${currentPlayer}'s turn`;
	cells.forEach((cell) => (cell.textContent = ""));
	running = true;
}
