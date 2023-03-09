let userNum = document.getElementById("userNum")
let run = document.getElementById("run")
let res = document.getElementById("res")
run.addEventListener("click",countTill)
function countTill(){
    let userCount = []
    
    for ( i = 1 ; i < userNum.value ; i++){
        userCount.push(i)
    }
    res.innerHTML = userCount 
}
   /* let i = 0
while (i < userNum.value) {
    userCount.push(i)
i++
res.innerHTML = ""
}
res.innerHTML = userCount */

let userNumEx2 = document.getElementById("userNumEx2")
let run2 = document.getElementById("runEx2")
let res2 = document.getElementById("resEx2")

run2.addEventListener("click", countJumping)
function countJumping(){
    let steps = Number(prompt ("How many steps do you want to jump"))
    let listNums = []
    for ( i = 0 ; i < userNumEx2.value ; i+= steps) {
        listNums.push(i)
    }
    res2.innerHTML = listNums
}

let cleanRes = document.getElementById ("clean")
function clean (){
    let cleanChoose = prompt ("Which one do you want to clean 1 or 2")
    if (cleanChoose === "1"){
        res.innerText = ""
    } else if (cleanChoose === "2") {
        res2.innerText = ""
    }
}
cleanRes.addEventListener("click", clean)
