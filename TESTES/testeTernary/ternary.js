const border = ["solid", "dashed", "dotted", "double", "groove"]
const run = document.getElementById("run")
const res = document.getElementById("res")
let currentBorderI = 0
run.addEventListener("click", changeBorder)
function changeBorder(){
    currentBorderI = currentBorderI >= border.length ? 0 : currentBorderI + 1
    /*
    if (currentBorderI >= border.length){
        currentBorderI = 0
    } else {
        currentBorderI + 1
    }
    */
    res.style.border = `2px ${border[currentBorderI]} red` 
}
