

const $colorToBeDiscover = document.querySelector("h3")
const $restartGame = document.getElementById("restartBoard")
$colorToBeDiscover.innerHTML = `rgb(000, 000, 000)`
const $divSquares = document.querySelectorAll("div.squares")
let divsSquares = Array.from($divSquares)
let rC = document.querySelector(".rC")
let colorQuestion 
let colorText = []
let optionsColor = []



//EVENTS
$restartGame.addEventListener("click", restartGame) 
$restartGame.addEventListener("click", shuffleColors)



//FUNCTIONS
function restartGame() {
    colorQuestion =  $colorToBeDiscover.innerHTML = `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`
    colorText.push(colorQuestion)
    console.log(colorText); 
    //console.log(typeof colorQuestion);
    //console.log(colorText.length - 1);
    optionsColor = []
    return colorText
}


//Coloca o ultimo div da direita em baixo como a cor certa
function rightColor (){
let rightColor = ` <div class="squares rC" style="background-color: ${colorQuestion}"></div>`
rC. innerHTML = rightColor
optionsColor.push(rightColor)

console.log(optionsColor.length);
}

// Dá cores aleatórias para os 5 primeiros divs e acrescenta a função right color q dá a cor certa pro ultimo div
function shuffleColors (){
for (let i = 0; i < divsSquares.length - 1; i++) {
    let rgb = ` <div class="squares" style="background-color: rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)}) ;"></div>`
    const element = divsSquares[i];
    element.innerHTML = rgb
    optionsColor.push(rgb)
    //console.log(rgb);
}
rightColor()


}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  




  /*Formas de checar se a cor é a cor pedida:
  - posso usar includes() para checar se a string da cor certa bate com a string escolhida do usuario
  - posso checar atraves de um loop que checa os divs das cores e um if dentro
  */