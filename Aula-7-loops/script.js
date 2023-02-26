//EX 1
function password (){
let password //PODERIAMOS TIRAR O PROMPT E DEIXAR SO O LET PASSWORD PQ IRÁ RETORNAR FALSE NA PRIMEIRA TENTATIVA
let i = 0
while (password !== "1234"){
password = prompt("Please insert password:")
i++
if (i == 4 && password !== "1234") {
alert ("You should not pass")
} else if ( password === "1234"){
    alert ("you are logged")
}
}
}




// EX 2

function evenNumber () {
  let countTill = []
let num1 = Number(prompt ("Choose a number: "))
if (!Number.isNaN(num1)) {
  let i = 0
  while ( i < num1) {
    countTill.push(i)
  i = i + 2
  console.log (i)
  }
}
alert (`From 0 your count jumping 2 numbers is ${countTill}`)
}

//ex 3 
function bankCheck () {
let usersList = [
    {
      "balance": "$1,107.16",
      "age": 36,
      "name": "Cantu Mckenzie"
    },
    {
      "balance": "$1,608.24",
      "age": 25,
      "name": "Schultz Sears"
    },
    {
      "balance": "$1,266.22",
      "age": 37,
      "name": "Lana Key"
    },
    {
      "balance": "$1,728.23",
      "age": 24,
      "name": "Maggie Blanchard"
    },
    {
      "balance": "$1,412.79",
      "age": 33,
      "name": "Julianne Curry"
    }
  ]

  for (let value of usersList) {
    console.log (value.name, value.age, value.balance)
  }
}

//ex 4
function ex4() {
let list = {
    "_id": "63f3b7cadf9d3ea073e07d6f",
    "index": 0,
    "guid": "1741cd60-75c7-496e-b880-0e3e5adfd1d5",
    "isActive": true,
    "balance": "$1,412.34",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Mcintosh Mills",
    "gender": "male",
    "company": "BOINK",
    "email": "mcintoshmills@boink.com",
    "phone": "+1 (874) 488-2691",
    "address": "480 Amity Street, Byrnedale, Tennessee, 8254",
    "about": "Cillum nisi officia qui dolore dolor non nisi. Irure velit proident nisi duis voluptate. Velit Lorem anim veniam aute id officia et enim consequat aliquip. Lorem proident officia Lorem sit anim laborum non esse irure occaecat.\r\n",
    "registered": "2015-10-09T02:34:25 -03:00",
    "latitude": 86.307639,
    "longitude": 31.864756,
    "tags": [
      "irure",
      "minim",
      "consequat",
      "ipsum",
      "Lorem",
      "labore",
      "non"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Teresa Horn"
      },
      {
        "id": 1,
        "name": "Tanner Nguyen"
      },
      {
        "id": 2,
        "name": "Shelby Gates"
      }
    ],
    "greeting": "Hello, Mcintosh Mills! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  }
 for (let value in list) {
  console.log (`${value} = > ${list[value]}`)
 }
}


/*let names = [
    "Vitor ",
    "Marcelo",
    "Joana",
    "Lorena"
]
console.log ( "while starts")

let i = 0
while (i < 100) {
    console.log (i)
    i++
}
console.log("while ends")

*/




/*
let num = prompt ("choose a number: ")
let i = num
while (i < 100) {
    console.log (i)
    i++
}
*/



/*

let num = Number(prompt ("choose a number: "))
let num2 = Number(prompt ("choose a second number"))
let i = num
while (i < num2) {
console.log (i)
++i
}

*/



