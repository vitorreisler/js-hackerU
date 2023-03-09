let levels = document.getElementById("numOfLevels") //pega o numero de levels
let res = document.getElementById("res") //pega a div res no html
let submit = document.getElementById("submit") //pega o button
submit.addEventListener("click", piramide) // ativa a funcao quando clicamos
function piramide(){
    res.innerHTML = "" //muda o campo res para uma string vazia
    for (let i = 0; i < levels.value; i++) { //esse loop serve para criar os divs de linha
        let line = document.createElement("div") //cria o div
        line.classList.add("line") // add classe ao div recem criado
        let blocks = i + 1 //define a variavel blocos (q vai ser utilizada mais adiante)
        for (let b = 0; b < blocks; b++){ //esse loop cria os blocos dentro das linhas criadas no outro loop
            let block = document.createElement("div") //cria o div do bloco
            block.classList.add("block") //adiciona class ao bloco recem criado
            line.appendChild(block) //adiciona o div.block na div.line
        }
        res.appendChild(line) //adiciona o div.line no div#res
    }
}