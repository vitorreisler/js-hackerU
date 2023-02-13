let userAgeInput = prompt ("How old are you ? ")
let age = Number(userAgeInput) 
function getUserAge () {
        if (userAgeInput) {
            if (!Number.isNaN(age)) {
                return age
            }
            return null
        }
        
    }
    console.log (age)
    console.log (typeof age)
  
function gameAge () {
if ( !age) {
    alert ("Please insert a valid number")
} else if (age <= 0 || age > 120) {
    alert (`Your age is ${age} and you should be dead`)
} else if (age >= 0 && age < 12) {
        alert(`Your age is ${age} and you are a Child`)
} else if (age >= 12 && age < 18) {
    alert(`Your age is ${age} and you are an adolescent`)
} else if (age >= 18 && age < 50) {
    alert(`Your age is ${age} and you are an adult`)
} else if (age > 50 && age <= 100) {
    alert(`Your age is ${age} and you are an old person`)
} 
}

gameAge()


