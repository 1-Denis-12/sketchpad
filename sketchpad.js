const container = document.querySelector("#container");


function createsquares(rows){
if (rows > 100){
    console.log("error");
}
else{console.log(typeof(rows));
}
const numberOfSquares = rows * rows + rows;
const mod = rows + 1;
console.log(numberOfSquares);
console.log(mod);



for (i = 1; i <= numberOfSquares; i++){
    const square = document.createElement("div")
    if(i % mod === 0) {
        square.classList.add("emptySpace", "item");
    }
    else{
    square.classList.add("squares", "item");
    square.addEventListener("mouseover", ()=>{
        square.classList.add("coloredSquare")
    })
    }
    container.appendChild(square)
}
}

const button = document.querySelector(".rowsButton");
button.addEventListener("click", ()=> {
    const squares = document.querySelectorAll(".item");
    squares.forEach((square) => {
    container.removeChild(square)
})
    var userInput = document.getElementById("userInput").value;
    console.log(userInput)
    
    createsquares(Number(userInput));
})
