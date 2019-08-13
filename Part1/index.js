console.log("this is tight as heck dawg");

 const board = [];


function play(clickedId) {
   const  playerSpan = document.getElementById("player");
   const clickedElement = document.getElementById(clickedId);
   if (playerSpan.innerText === "X"){
       playerSpan.innerText ="O"
       clickedElement.innerText = "X"
       board[clickedId] = "X"
   } else {
       playerSpan.innerText = "X";
       clickedElement.innerText = "O"
       board[clickedId] = "O"

   }
   console.log(board)
   checkForWinner();
}


// -----------This part will check what combo won home dawwwwwwg yee haw 
function checkForWinner(){
    const topLeft = board[0];
    const topCenter =board[1];
    const topRight =board[2];
    const middleLeft=board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft =board[6];
    const bottomCenter =board[7];
    const bottomRight =board[8];


if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
   
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
  
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
  
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
   
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
  
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
 
  }
}

//This will determine if there is a full board & will send out an alert :) <3

let boardFull = true;
for (let i = 0; i<= 8; i++){
    if (board[i]=== undefined ){
        boardFull = false;
    }
}
    if (boardFull === true){
alert("Cat's game, there is no winner")
    }
    

