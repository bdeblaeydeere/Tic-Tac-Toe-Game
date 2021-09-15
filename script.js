//Set variables
const player1Color = "Red";
const player2Color = "Blue";
let player1turn = true
const reset =  document.querySelector("#resetBoard")

const getCells = document.querySelectorAll(".square")
let moves = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
let winner = ""
let realwinner = ""
let turnCounter =0

//function to diasable clicks after a win
const disableClick = () => {
    getCells.forEach(getCell => {
        getCell.removeEventListener("click", changeSquareColor)
    })
}

//checking for a winner
const checkWinner = () => {
    if (
    (moves[0] === moves[1] && moves[1] === moves[2]) ||
    (moves[0] === moves[3] && moves[3] === moves[6]) ||
    (moves[0] === moves[4] && moves[4] === moves[8] )) {
         winner = moves[0]
         realwinner = winner.concat( " is the winner!")
         statusText.innerText = realwinner
        // console.log(winner)
        // statusText.innerText = winner
        disableClick()

    }
    else if(
        (moves[1] === moves[4] && moves[4] === moves[7])) {
         winner = moves[1]
         realwinner = winner.concat( " is the winner!")
         statusText.innerText = realwinner
        // statusText.innerText = winner
        disableClick()

        }
    
    else if (
        (moves[2] === moves[5] && moves[5] === moves[8]) ||
        (moves[2] === moves[4] && moves[4] === moves[6])) {
             winner = moves[2]
             realwinner = winner.concat( " is the winner!")
         statusText.innerText = realwinner
        // statusText.innerText = winner
        disableClick()

        }
    
     else if (
         (moves[3] === moves[4] && moves[4] === moves[5])) {
             winner = moves[3]
             realwinner = winner.concat( " is the winner!")
         statusText.innerText = realwinner
            // statusText.innerText = winner
            disableClick()

         }
    else if (
        (moves[6] === moves[7] && moves[7] === moves[8])) {
            winner = moves[6]
            realwinner = winner.concat( " is the winner!")
         statusText.innerText = realwinner
         disableClick()

        //    statusText.innerText = winner
        }
    else if (turnCounter >=9){
        statusText.innerText = "It's a Tie!!"
    }
        //  realwinner = winner.concat( " is the winner!")
        //  statusText.innerText = realwinner
        // console.log (realwinner)
    }




//Change Square colors
const changeSquareColor = (event) =>{
    // console.log ("square clicked")
    if (player1turn == true){
        event.target.style.backgroundColor = player1Color
        moves[event.target.firstElementChild.id] = "red"
        console.log (moves)
        }
    else {
        event.target.style.backgroundColor = player2Color
        moves[event.target.firstElementChild.id] = "blue"
        console.log (moves)
    }
    player1turn = !player1turn
    event.target.removeEventListener ("click",changeSquareColor)
    turnCounter ++
    console.log (turnCounter)
    checkWinner()
}
//Add listener to each square
for (i=0; i< getCells.length; i++) {
        getCells[i].addEventListener("click", changeSquareColor)
    
}

//Reset the board to all white
reset.addEventListener("click", () => {
    getCells.forEach(getCell => {
        getCell.style.backgroundColor = "white"
        getCell.addEventListener("click",changeSquareColor)
    })
    moves = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    turnCounter = 0
    statusText.innerText = ""

    console.log (moves)
})