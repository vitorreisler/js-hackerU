
/*
if (7>5) {
    console.log ("Yes its true")

} else {
    console.log ('is not true ')
}


if (10%2 == 0) {
    console.log ('even')
} else {
    console.log ('odd')
}

console.log (Boolean())
console.log (4*2)

console.log (10%2 == 0)

let num1 = document.getElementById (num1)
const x = num1
if (num1%2 == 0) {
    document.getElementById(res).innerHTML = `The number ${x} is even `
console.log(`The number ${x} is even `)
} else {
document.getElementById(res).innerHTML = `The number ${x} is odd `
console.log (`The number ${x} is odd`)
} */

function carregar () {
let num1 = document.getElementById('num').value
const x = num1
const res = document.getElementById('resp')
if (num1 % 2 == 0) {
  res.innerHTML = `The number ${num1} is even`
} else {
  res.innerHTML = `The number ${num1} is odd`
}
}
