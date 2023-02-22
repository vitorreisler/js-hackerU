function countTillNum() {
    let num1 = Number(prompt("Please choose a number"))
    let i = 0
    while (i < num1) {
        i++
        console.log (i)
    }
}

function num1ToNum2() {
    let num1 = Number(prompt("Please choose a number"))
    let i = num1
    if (Number.isNaN(num1)) {
        alert ( 'Is not a valid number')
    } else {
    let num2 = Number(prompt("Please choose another number"))
    if (Number.isNaN(num2)) {
        alert ("Please insert valid data")
    } else if (i < num2) {
        while (i < num2) {
            i = i + 2
            console.log (i)
        }
    } else if (i > num2) {
        while (i > num2) {
            i = i - 2
            console.log (i)
        }

    }
    
} }

function multi() {
    let i = 0
    let multiNum = 1
    let num1 = Number(prompt ("Please choose a number that you want to know the multiplication table: "))
    if (Number.isNaN(num1)) {
        alert ("Please insert valid data")
    } else {
    let num2 = Number(prompt ("Please choose till which number you want to know: "))
    if (Number.isNaN(num2)) {
        alert ("Please insert valid data")
    } else {
        while (i < num2) {
            let result = num1 * multiNum
            i++
            ++multiNum
            console.log(result)
        }
    }
    }
}

function build() {
   for (let i= 0; i < 5; i++){
    console.log (i)
   }
}


