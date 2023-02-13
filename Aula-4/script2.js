let userAgeInput = prompt ("How old are you ? ")
let age = Number(userAgeInput)
function getUserAgeInput () {
    console.log (age)
        if (Number.isNaN(age)) {
            alert ( "Please insert valid data") //checking if the number is NaN
        } 
    }

    function ageGame () {
        if (age < 0 || age > 120) {
            alert (`Don't lie to us, you cant be ${age} years old`)
        } else if (age > 0 && age < 8) {
            alert (`${age} oh lord, you are a baby`)
        } else if (age >= 8 && age < 18) {
            alert (`${age} oh lord, you are an adolescent`)
        }
    }
    ageGame ()

