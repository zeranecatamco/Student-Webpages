document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");//stores canvas from HTML in "canvas"
  const ctx = canvas.getContext("2d");//allows you to make 2d shapes in canvas and stores in ctx
  
  const color = "#22223B"//make "color" the color I choose
  ctx.font = "25px Raleway";//font and size for the beginning nstructions
  ctx.fillStyle = color;//fills shapes with color
  ctx.textAlign= "center";//puts text in center
  ctx.textBaseline= "middle";//puts text in middle
  ctx.fillText("Press Space to Start Game!", 225, 210);//what the text says and the position of the text on the canvas
 
  //constants
  const paddleHeight = 10;
  const paddleWidth = 110;
  let paddleX = (canvas.width - paddleWidth)/2;
  
  const ballRadius = 8;
  let x = canvas.width/2;
  let y = canvas.height - 30;
  let dx = 4;
  let dy = -4;
  
  
  let score = 0;
  let lives = 3;
  
  let boxHeight = 10;
  let boxWidth = 50;

  
  function drawPaddle(){//makes the paddle
    ctx.beginPath();//starts making shape
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);//makes a rectangle based on the constants previously declared
    ctx.fillStyle = color;//makes shape "color"
    ctx.fill();//fills shape with "color"
    ctx.closePath();//finished making the shape
  }   
  
  function drawBall(){//makes a ball
    ctx.beginPath();//starts making shape
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);//makes a circle based on the constants above
    ctx.fillStyle = color;//makes the shape "color"
    ctx.fill();//fills shape with "color"
    ctx. closePath();//finshes making the shape
  }
  
function drawScore(){//puts in the score of the player
  ctx.font = "16px Raleway";//font size and type
  ctx.fillStyle = color;//color of font
  ctx.fillText("Score: " + score, 65 , 35);//fills the text with what it's supposed to say and the position
}

function drawLives(){//insetrts the live te player has left
  ctx.font = "16px Raleway";//font size and style
  ctx.fillStyle = color;//chages the color of the font
  ctx.fillText("Lives: " + lives, 375, 35);//fills the text with what it's supposed to say and the position of the text on the canvas
}  
  
  let isGameStart = true;
  let continueAnimating = true;
 
  const brickRowCount = 4;
  const brickColumnCount = 5;
  const brickWidth = 75;
  const brickHeight = 20;
  const brickPadding = 10;
  const brickOffSetTop = 60;
  const brickOffSetLeft = 17;

 
  let bricks = [];

  for(let c = 0; c < brickColumnCount; c++){//outer loop -loops the columns; if c is less than the the constant brickColumnCount then c incriments
    bricks[c]=[];//if the parameters are met then the value of c is initialized to an empty array
     for(let r = 0; r < brickRowCount; r++){//inner loop responsible for the rows; if r is less than the constant value of brickRowCOunt then r increments
       bricks[c][r]={x:0, y:0, status: 1, opacity: 1}//the brick are step up in an array and are made visible
     }
  }
  function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {//outer loop
    for (let r = 0; r < brickRowCount; r++) {//inner loop
      if (bricks[c][r].status === 1) {//if the brick at a certian spot on the canvas is visible and renders in
        const brickX = c * (brickWidth + brickPadding) + brickOffSetLeft;//sets the x position of the brick
        const brickY = r * (brickHeight + brickPadding) + brickOffSetTop;//sets the y position of the brick
        bricks[c][r].x = brickX;//updates position in brickX
        bricks[c][r].y = brickY;//updates position in brickY

        // Set the brick color with the current opacity
        brickColorWithOpacity(r, bricks[c][r].opacity);

        ctx.beginPath();
        const radius = 5;
        ctx.moveTo(brickX + radius, brickY);
        ctx.lineTo(brickX + brickWidth - radius, brickY);
        ctx.arcTo(brickX + brickWidth, brickY, brickX + brickWidth, brickY + brickHeight, radius);
        ctx.lineTo(brickX + brickWidth, brickY + brickHeight - radius);
        ctx.arcTo(brickX + brickWidth, brickY + brickHeight, brickX + brickWidth - radius, brickY + brickHeight, radius);
        ctx.lineTo(brickX + radius, brickY + brickHeight);
        ctx.arcTo(brickX, brickY + brickHeight, brickX, brickY + brickHeight - radius, radius);
        ctx.lineTo(brickX, brickY + radius);
        ctx.arcTo(brickX, brickY, brickX + radius, brickY, radius);
        ctx.closePath();

        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.lineWidth = 1;
      }
    }
  }
}

function brickColorWithOpacity(row, opacity) {//changes the color of the bricks and had opacity
  let color;
  switch (row) {
    case 0://the first row
      color = "rgba(34, 34, 59, " + opacity + ")"; //set to dark green and has the opacity value
      break;
    case 1://the second row
      color = "rgba(74, 78, 105, " + opacity + ")"; //set to a lighter green and has the opacity value
      break;
    case 2://the third row
      color = "rgba(154, 140, 152, " + opacity + ")"; //set to an even lighter shad of green and has an opacity value
      break;
    case 3://fourth row
      color = "rgba(201, 173, 167, " + opacity + ")"; //set to the lightese shade of green and has an opacity value
      break;
    default://sets the default
      color = "rgba(0, 0, 0, " + opacity + ")"; //black with opacity
  }
  ctx.fillStyle = color;//tells the canvas to fill the shape with the variable color
}
  
let rightPressed = false;//sets rightPresesed to false
 let leftPressed = false;//sets leftPressed to false
  
document.addEventListener("keydown", keyDownHandler);//checks if there is a key being pressed
document.addEventListener("keyup", keyUpHandler);//checkes if a key is released
document.addEventListener("mousemove", mouseMoverHandler);//allows the function to be called once the mouse pad is touched or the mouse is used
  
function keyDownHandler(e){//parametres are the event
  if(e.key==="Right" || e.key==="ArrowRight"){//if the right arrow key is pressed down
    rightPressed=true//moves right
  }
  else if(e.key==="Left" || e.key==="ArrowLeft"){//if the left arrow key is pressed down or held
    leftPressed=true;//moves left
  }
  if((e.key == " " || e.code == "Space" || e.keyCode == 32) && isGameStart){//if space is pressed and it is the start of the game
    x = canvas.width/2;//sets the value of x to be half of the canvas width
    y = canvas.height - 30;//sets the value of y to be half of the canvas height
    
    score = 0;//score will be 0
    lives = 3;//lives will be 3
    
     bricks=[];//initializes the bricks array as empty
  for(let c = 0; c < brickColumnCount; c++){//outer loop
    bricks[c] = [];//sets the bricks array to 
    for(let r = 0; r < brickRowCount; r++){//inner loop
      bricks[c][r] = {x: 0, y: 0, status: 1, opacity: 1};//stes each brick to have an x value, y value, status, and an opacity
    }
  }
    
    isGameStart = false;//isGameStart is no longer true since game has started
   continueAnimating = true;
    draw();//calls the draw function which has all the draw functions in it
    
  }
}
  
  
function keyUpHandler(e){
   if(e.key==="Right" || e.key==="ArrowRight"){//whan the right key is let go or no longer being held
    rightPressed=false;//stops moving right
  }
  else if(e.key==="Left" || e.key==="ArrowLeft"){//when the left arrow key is let go or stops being held
    leftPressed=false;//stops moving left
  }
}

function mouseMoverHandler(e){
 const relativeX = e.clientX - canvas.offsetLeft;//sets relativeX to the horizontal position of the mouse minus the distance between the webpage and the canvas 
  if(relativeX > 0 && relativeX < canvas.width){//if relativeX > 0 and relativeX < width of the canvas
    paddleX = relativeX - paddleWidth / 2;//paddleX updates to relativeX - width of the paddle divided by 2
  } 
}
  
 function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

  
  for (let c = 0; c < brickColumnCount; c++) {//outer loop
    for (let r = 0; r < brickRowCount; r++) {//inner loop
      let brick = bricks[c][r];//
      if (brick.status === 1 && brick.opacity < 1) {//if the brick is visible and the opacity is less than 1, or not completly opaque
        brick.opacity += 0.005; // fade in ussing the opacity
        if (brick.opacity > 1) {//if the brick is completely opaque
          brick.opacity = 1; // Ensure max opacity is 1
        }
      }
    } 
  }

   //calls functions
  drawBricks();
  drawPaddle();
  drawBall();
  drawScore();
  drawLives();
  collisionDetection();
  checkAndAddNewRow();


  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {//if the ball hits one of the walls of the canvas
    dx = -dx;//it changes the direction the ball moves in
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {//if the paddle is moved to the right and the baddle has not hit the wall
    paddleX += 7;//the paddle move to the right by 7 pixels
  } else if (leftPressed && paddleX > 0) {//if the paddle is moved left and not touchhing the left wall 
    paddleX -= 7;//the paddle moves to the left by 7 pixels
  }

  x += dx; // Update ball position
  y += dy;

  if (y + dy < ballRadius) {//checks if the ball hits the top
    dy = -dy;//if so it chages directions
  } else if (y + dy > canvas.height - ballRadius) {//otherwise if the ball its the bottom
    if (x > paddleX && x < paddleX + paddleWidth) {//if the ball hits the paddle
      dy = -dy;//the ball chages directions
    } else {//in any other case
      lives--;//the lives decrease
      if (!lives) {//if there are no lives
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);//wrute game over
        ctx.fillText(`Your Score: ${score}`, canvas.width / 2, canvas.height / 2 + 30);//write score
        ctx.fillText("Press Space to Play Again",canvas.width / 2, canvas.height / 2 + 60)//writes a message to restart game
        isGameStart = true;//game Start is set to how it was before the game started
        continueAnimating = false;//it stops animating the shapes
      } else {//otherwise
        x = canvas.width / 2;//reset ball 
        y = canvas.height - 30;//also reset ball
        dx = 4;//ball speed
        dy = -4;//ball speed
        paddleX = (canvas.width - paddleWidth) / 2;//reset paddle
      }
    }
  }

  if (continueAnimating) {//checks if continue animating is true
    requestAnimationFrame(draw);//continues to animate basde of the draw function
  }
}

  function collisionDetection(){
    for(let c = 0; c < brickColumnCount; c++){//outer loop
      for(let r = 0; r < brickRowCount; r++){//inner loop
        const b = bricks[c][r];//sets b to be a constant that is the value of each brick
       
        if(b.status === 1){//if the brick has not been hit and still renders in the game
          if(
             x > b.x && //cheks the ball's hrizontal position in relation to the left side of the brick
             x < b.x + brickWidth && //cheks the ball's hrizontal position in relation to the right side of the brick
             y > b.y && //checks the ball's vertical position of the brick in relation to the bottom of the brick
             y < b.y + brickHeight){//checks the ball's vertical position of the brick in relation to the top of the brick
            dy = -dy//chages direction when it bounces off the brick
            
            b.status = 0;//gets rid of the brick
            
            score += 50;//adds 50 points for the brick being hit

          }
        }
      }
    }
  }
  
  function checkAndAddNewRow(){
    let bottomRowCleared = true;//bottom row cleared is set to true
    for(let c = 0; c < brickColumnCount; c++){//loops throught the columns
        if(bricks[c][brickRowCount - 1].status === 1){//checks if the brick is still visible
            bottomRowCleared = false; //is so the bottom row is not clear
            break;
        }
    }
    if(bottomRowCleared){//if the bottom row is ckeared
        for(let c = 0; c < brickColumnCount; c++){//loops through the column
            for(let r = brickRowCount - 1; r > 0; r--){//loops through the rows
                bricks[c][r].status = bricks[c][r - 1].status;//carry down the old status
                bricks[c][r].opacity = bricks[c][r - 1].opacity; // carry down old opacity
            }
            bricks[c][0].status = 1;    // New brick at the top
            bricks[c][0].opacity = 0;   // makes them fade in by starting opacity at 0
        }
    }
}

});
