let numOfLevels = document.getElementById("numOfLevels").value
let doPiramide = document.getElementById("doPiramide")
let res = document.getElementById("res")
doPiramide.addEventListener("click", numberOfRows)

function numberOfRows (){
    res.innerHTML = ""
    console.log (numOfLevels.value)
    for (i = 0 ; i < numOfLevels.value; i++) {
        let row = document.createElement("div")
        row.classList.add("divRow")

        let numBlocks = i * 2 + 1

        for (let j = 0; j < numBlocks; j++) {
            let block = document.createElement("div");
            block.classList.add("pyramid-block");
            row.appendChild(block);
          }
          res.appendChild(row);

        
    }
}