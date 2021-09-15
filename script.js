//Set variables
const player1Color = "Red";
const player2Color = "Blue";
let player1turn = true

//Add listener to each square
const getCells = document.querySelectorAll(".square")
console.log (getCells)


//Change Square colors

const changeSquareColor = (event) =>{
    console.log ("square clicked")
    if (player1turn == true){
        event.target.style.backgroundColor = player1Color
    }
    else {
        event.target.style.backgroundColor = player2Color
    }
    player1turn = !player1turn
}
    for (i=0; i< getCells.length; i++) {
            getCells[i].addEventListener("click", changeSquareColor)
        
    }
    
    

