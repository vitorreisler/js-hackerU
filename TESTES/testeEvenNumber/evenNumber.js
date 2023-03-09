let res = document.getElementById("res")
let run = document.getElementById("run")
run.addEventListener("click", isEvenNum)
function isEvenNum () {
    let num = prompt("Please choose a number")
  if (num % 2 == 0) {
    res.innerHTML = `The number ${num} is Even`
  } else {
    res.innerHTML = `The number ${num} is Odd`
  }
   
}