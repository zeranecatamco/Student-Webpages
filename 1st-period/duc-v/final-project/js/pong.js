const gameBoard = document.querySelector("#pongCanvas");

const ctx = gameBoard.getContext("2d");

const gameWidth = gameBoard.width;

const gameHeight = gameBoard.height;

const start = document.querySelector("#startGame");

const ballRadius = 8;

const boardColor = "black";

const paddleBorder = "black";

const paddleColor = "white";

const scoreDisplay = document.querySelector("#scoreDisplay");

let playAlone = false;

let playTogether = false;

let paddleSpeed = 10;

const deadZone = 10;

let ballSpeed = 1;    

let player1Score = 0;

let player2Score = 0;

let ballX = gameWidth / 2;

let ballY = gameHeight / 2;

let ballXDirection = 0;

let ballYDirection = 0;

let paddleLeft = {

  x: gameWidth / 2 - 200,

  y: gameHeight / 2 - 25,

  width: 2,

  height: 45

};

let paddleRight = {

  x: gameWidth / 2 + 200,

  y: gameHeight / 2 - 25,

  width: 2,

  height: 45

};

//the paddle for 1 player

let paddle1 ={

  x: gameWidth / 2,

  y: gameHeight - 50,

  width: 55,

  height: 2

}; 

let intervalID;

window.addEventListener('keydown', startGame);

window.addEventListener('keydown', changeDirection);


function gameStart(){

    createBall();

    nextTick();

}

function nextTick(){
    intervalID = setTimeout(()=>{
      clearBoard();
      drawPaddle();
      moveBall();
      drawBall(ballX, ballY);
      collision();
      nextTick();
    }, 10);
}

function drawPaddle(){
  ctx.strokeStyle = paddleColor;
  ctx.fillStyle = paddleColor;
  if(playTogether == true && playAlone == false){
    ctx.fillRect(paddleLeft.x, paddleLeft.y, paddleLeft.width, paddleLeft.height);
    ctx.strokeRect(paddleLeft.x, paddleLeft.y, paddleLeft.width, paddleLeft.height);
    ctx.fillRect(paddleRight.x, paddleRight.y, paddleRight.width, paddleRight.height);
    ctx.strokeRect(paddleRight.x, paddleRight.y, paddleRight.width, paddleRight.height);
  }
  if(playAlone == true && playTogether == false){
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  }
}

//blank board

function clearBoard(){

    ctx.fillStyle = boardColor;

    ctx.fillRect(0, 0, gameWidth, gameHeight);

}

function createBall(){

  ballSpeed = 1;

//randomly generated the direction of ball

    if(Math.round(Math.random()) == 1){

        ballXDirection = 1; 

    }

    else {

        ballXDirection = -1;

    }

    if(Math.round(Math.random()) == 1){

        ballYDirection =  1;

    }

    else {

        ballYDirection =  -1;

    }

//position of ball of each game option

if(playTogether == true && playAlone == false){

    ballX = gameWidth / 2;

    ballY = gameHeight / 2;

    drawBall(ballX, ballY);

  }

 if(playAlone == true && playTogether == false){

      ballX = gameWidth / 4;

      ballY = gameHeight / 4;

      drawBall(ballX, ballY);

  }

}

//ball move as the direction

function moveBall(){

    ballX += (ballSpeed * ballXDirection);

    ballY += (ballSpeed * ballYDirection);

}

function drawBall(ballX, ballY){

    ctx.fillStyle = "white";

    ctx.strokeStyle = "white";

    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);

    ctx.stroke();

    ctx.fill();

}

//check collision and bounce if ball hit something

function collision(){

  if(playTogether == true && playAlone == false){

    if(ballY >= (gameHeight - ballRadius)){

      ballYDirection *= -1;

    }

    if(ballY <= 0+ballRadius){

      ballYDirection *= -1;

    }

    if(ballX <= (paddleLeft.width + paddleLeft.x + ballRadius)) {

      if(ballY >= paddleLeft.y && ballY <= paddleLeft.y + paddleLeft.height){

        ballX = paddleLeft.x + paddleRight.width + ballRadius;

        ballXDirection *= -1;

        ballSpeed += 0.1;

      }

    }

    if(ballX >= (paddleRight.x - ballRadius)) {

      if(ballY >= paddleRight.y && ballY <= paddleRight.y + paddleRight.height){

        ballX = paddleRight.x - ballRadius;

        ballXDirection *= -1;

        ballSpeed += 0.1;

      }

    }

//earn points when ball passed a paddle

    if(ballX <= deadZone){

      player2Score += 10;

      updateScore();

      createBall();

      return;

    }

    if(ballX >= gameWidth - deadZone){

      player1Score += 10;

      updateScore();

      createBall();

      return;

    }

  }

  if(playAlone == true && playTogether == false){

    if(ballY >= (gameHeight - ballRadius)){

    ballYDirection *= -1;

    }

    if(ballY <= 0+ballRadius){

      ballYDirection *= -1;

    }

    if(ballX <= 0+ballRadius){

      ballXDirection *= -1;

    }

    if(ballX >= gameWidth - ballRadius){

      ballXDirection *= -1;

    }

//earn points when hit

    if(ballY >= paddle1.y - (paddle1.height+ballRadius)){

      if(ballX >= paddle1.x && ballX <= paddle1.x+paddle1.width){

        ballY = paddle1.y - (ballRadius + paddle1.height);

        ballYDirection *= -1;

        ballSpeed += 1;

        paddleSpeed += 1;

        player1Score += 10;

        updateScore();

        return;

      }

    }

//lose if cant block the ball 3 times

    if(ballY >= gameHeight - deadZone){

      createBall();

      player2Score += 10;

      updateScore();

      return;

    }

  }

}

//control paddles

function changeDirection(event){

    const keyPressed = event.keyCode;

    const paddle1Up = 87;

    const paddle1Down = 83;

    const paddle2Up = 38;

    const paddle2Down = 40;

    const moveLeft = 65;

    const moveRight = 68;

    switch(keyPressed){

        case (paddle1Up):

            if(paddleLeft.y > 0 ){

                paddleLeft.y -= paddleSpeed;

            }
            break;
        case(paddle1Down):
            if(paddleLeft.y < gameHeight - paddleLeft.height){
                paddleLeft.y += paddleSpeed;
            }
            break;
        case(paddle2Up):
            if(paddleRight.y > 0 ){
                paddleRight.y -= paddleSpeed;
            }
            break;
        case(paddle2Down):
            if(paddleRight.y < gameHeight - paddleRight.height ){
                paddleRight.y += paddleSpeed;
            }
            break;
        case (moveLeft):
            if(paddle1.x > 0 ){
                paddle1.x -= paddleSpeed;
            }
            break;
        case (moveRight):
            if(paddle1.x < gameWidth - paddle1.width ){
                paddle1.x += paddleSpeed;
            }
            break;
    }
}

function updateScore() {
  if(playTogether == true && playAlone == false){
    scoreDisplay.textContent = `Player 1: ${player1Score} | Player 2: ${player2Score}`;

    if (player1Score >= 100) {
      start.textContent = "Player 1 is the winner! Press Enter to restart";
      resetGame();
    }

    if(player2Score >= 100){
      start.textContent = "Player 2 is the winner! Press Enter to restart";
      resetGame();
    }
  }

  if(playAlone == true && playTogether == false){
    scoreDisplay.textContent = `Player 1: ${player1Score}`;

    if (player1Score >= 50) {
      scoreDisplay.textContent = `Player 1: ${player1Score}`;
      start.textContent = "You win! Press Enter to restart";
      resetGame();
    }

    if(player2Score >= 30){
      start.textContent = "You lose! Press Enter to restart";
      resetGame();
    }
  }    
}

function optionInPlayer(eve){ 
  const keyOption = eve.keyCode;
  const num1 = 49;
  const num2 = 50;
  const enter = 13;
  
  if(keyOption == num1){
    scoreDisplay.textContent = `Player 1: ${player1Score}`;
    start.textContent ="Press Enter to restart";
    player1Score = 0;
    player2Score = 0;
    updateScore();
    playAlone = true;
    playTogether = false;
    clearInterval(intervalID);
    gameStart();
  }

  else if(keyOption == num2){
    scoreDisplay.textContent = `Player 1: ${player1Score} | Player 2: ${player2Score}`;
    start.textContent ="Press Enter to restart";
    player1Score = 0;
    player2Score = 0;
    playAlone = false;
    updateScore();
    playTogether = true;
    clearInterval(intervalID);
    gameStart();
  }
  if(keyOption == enter){
    clearBoard();
    resetGame();
  }
}

function resetGame(ev){
  paddleLeft = {
  x: gameWidth / 2 - 200,
  y: gameHeight / 2 - 25,
  width: 2,
  height: 45
};
  paddleRight = {
  x: gameWidth / 2 + 200,
  y: gameHeight / 2 - 25,
  width: 2,
  height: 45
};
  paddle1 ={
  x: gameWidth / 2,
  y: gameHeight - 50,
  width: 55,
  height: 2
}
  ballSpeed = 1;    
  player1Score = 0;
  player2Score = 0;
  ballX = gameWidth / 2;
  ballY = gameHeight / 2;
  ballXDirection = 0;
  ballYDirection = 0;
  paddleSpeed = 10;
  updateScore();
  clearBoard();
  playAlone = false;
  playTogether = false;
  clearInterval(intervalID);
  const keyEnter = ev.keyCode;
  const enter = 13;
  if(keyEnter == enter){
    startGame();
  }
}
function startGame(e){
  start.textContent = "Press Enter To Play";
  const keyEnter = e.keyCode;
  const enter = 13;
  if(keyEnter == enter){
    start.textContent = "Press 1 for 1 player and 2 for 2 players";
    window.addEventListener('keydown', optionInPlayer);
  }
}
