let userName = prompt ("What's your name ?")
let age = Number(prompt ("Whats your age"))
let email = prompt ("What's your email ?")
let gender = prompt ("What's your gender ?" , "Please insert Male or Female")

if (gender === "Male" || gender === "male" || gender === "Female" || gender === "female") {
    alert (`Welcome ${userName}`)
    console.log ("feito")
} else {
    alert ("Please insert valid data")
}


let newsLetter = confirm ("would you like to subscribe to our newsletter?")
if (newsLetter == true) {
    alert (`Thank you, your email ${email} was registered ` )
} else {
    alert (`Your lost ${userName}` )
}


if (age > 0 && age <= 5 ){
    alert (`With ${age} years old you are a baby`)
} else if (age > 6 && age <= 10 ) {
    alert (`With ${age} years old you are a child`)
} else if (age > 10 && age <= 18 ) {
    alert (`With ${age} years old you are an adolescent` )
} else if (age > 18 && age <= 60 ) {
    alert (`With ${age} years old you are an adult` )
} else if (age > 60 && age <= 120 ) {
    alert (`With ${age} years old you are an old person` )
} else if (age < 0 || age > 120) {
    alert (`If you are ${age} this age you must to be dead`)
} else {
    alert ("Please enter a valid data")
}

