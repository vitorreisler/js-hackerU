
function getRandomColor(){
    return `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`
}


// Data + process on data
function checkColor (color){
    return color === correctColor
}

let correctColor
let colors = []

function shuffleColors(){
    colors = []

    let correctIndex = getRandomInt(0, 6)
    
    for (let i = 0; i < 6; i++){
        const color = getRandomColor()
        if (i === correctIndex) {
            correctColor = color
        }
        colors.push(color)
    }
    return colors
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


  
  //render 

  const $colorsBoard = document.querySelector(".colors")
  const $regenerateBoarder = document.getElementById("regenerate-btn")
  const $guessPanel = document.querySelector(".header > h3")
  
  $regenerateBoarder.addEventListener("click", renderBoard)
  renderBoard()

  function renderBoard(){
    // pergar as cores que estão armazenadas em shuffleColors()
    // jogar elas pra dentro do html
    const colors = shuffleColors()

  
    let html = ""
    for (const color of colors){
    html += `<div onclick="handleColorClick('${color}')" style="background-color: ${color}"></div>`
 }
$guessPanel.innerHTML = correctColor
$colorsBoard.innerHTML = html
}

function handleColorClick (color){
    if (checkColor(color)){
        alert ("win")
    } else {
        alert ("try again")
    }
console.log(checkColor(color));
}

