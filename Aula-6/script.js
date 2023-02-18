let name = "vitor"

const message = {
    allowedVariableName: "some value 1", 
    "not a valid variable Name" : "some value 2",
    [name]: "some message",
    name, // name : name
    ["b" + name]: "some message",
    theNameForTheFunction () {}, // theNameOfTheFunction: function theNameOfTheFunction () {,}
}
console.log (message.allowedVariableName)
console.log (message["not a valid variable Name"])
console.log ()
console.log (message)
console.log (message.vitor)

let key = "not a valid " + "variable name"
console.log (message[key])

function fn1(){
    return "not a valid " + "variable Name"
}
console.log(message[fn1()])
console.log (new Date())

function data(){
    console.log(new Date())
}

data()


//   ARRAYS


new Array (10)
console.log(new Array(10))


let arr1 = new Array (3)
console.log (arr1)

let arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log ([])
console.log([function () {}])
let i = 5
console.log (arr2[0])
console.log (arr2[i]) // mostra o numero 6 no console.log
console.log (arr2[i + 2]) // mostra o numero 8 no console.log
console.log (arr2[11]) // mostra undefined no console.log

console.log ("the array length", arr2.length)

console.log(arr2.push("hello"))
console.log(arr2)

console.log(arr2.pop())
console.log(arr2)

console.log (arr2.fill(7, 5, 8))