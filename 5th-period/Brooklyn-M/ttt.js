

let boxes = document.querySelectorAll(".box");

let turn = "X"; //game starts with player X
let isGameOver = false; //indicates end of the game

// Score variables
let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;

// Elements for displaying the score
const scoreBoardX = document.querySelector("#score-X");
const scoreBoardO = document.querySelector("#score-O");
const scoreBoardDraw = document.querySelector("#score-Draw");

boxes.forEach(e =>{
    e.innerHTML = "" //all cells are initially empty
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){ //game only continues if game is not over and the clicked cell is empty
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})

function changeTurn(){ //function alternates between player x and player O's turns
    if(turn === "X"){ //if PLayer X's turn, switch to PLayer O
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn = "X"; //switch to player x's turn
        document.querySelector(".bg").style.left = "0";
    }
}

function checkWin(){
    let winConditions = [//win if you get any of these combinations
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 !== "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " wins!";
            document.querySelector("#play-again").style.display = "inline"
          // Update score
            if (turn === "X") {
                scoreX++;
                scoreBoardX.innerHTML = `Player X: ${scoreX}`;
            } else {
                scoreO++;
                scoreBoardO.innerHTML = `Player O: ${scoreO}`;
            }

            for(j = 0; j<3; j++){//changes the bacground color on win
                boxes[winConditions[i][j]].style.backgroundColor = "#4A4E69"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}

function checkDraw(){//checks if the game is a draw
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){//if the game is a draw
            isGameOver = true;//the game is over
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
            // Update draw score
            scoreDraw++;
            scoreBoardDraw.innerHTML = `Draws: ${scoreDraw}`;
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{//if play again button is clicked
    isGameOver = false;//the game in not over anymore
    turn = "X";//starts with X's turn
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";//boxes become empty again
        e.style.removeProperty("background-color");//win color is removed
        e.style.color = "#fff"
    })
})
