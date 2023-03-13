let run1 = document.getElementById("run1")
const $num1 = document.getElementById("num1")
const $num2 = document.getElementById("num2")
const res = document.getElementById("res")

run1.addEventListener("click", sum)
function sum(num1, num2){
    num1 = $num1.value
    num2 = $num2.value
    let result = Number(num1) + Number(num2)
    console.log (result)
    res.innerHTML = result
    return result
}

let run2 = document.getElementById("run2")
run2.addEventListener("click", multi)
function multi (num1, num2) {
    num1 = $num1.value
    num2 = $num2.value
    let result = num1 * num2
    res.innerHTML = result
}

let runDivision = document.getElementById("runDivision")
runDivision.addEventListener ("click", division)
function division (num1, num2){
    num1 = $num1.value
    num2 = $num2.value
    let result = (num1 / num2)
    res.innerHTML = result
    return result

}
