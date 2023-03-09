let run = document.getElementById ("run")
let res = document.getElementById("res")
let userPassword
function checkPassword () {
    for ( i = 1 ; userPassword !== "1234"; i++){
        userPassword = prompt ("Please write a Password")
        if (i == 4 && userPassword !== "1234") {
            alert ("You can't access")
        } else if (userPassword == "1234") {
            res.innerHTML = "You are logged"

        }
    }
    /*
    if (userPassword !=="1234"){
        alert ("The password isn't correct")
    } else {
        res.innerHTML = "Welcome"
        

    } */
}
run.addEventListener("click", checkPassword)





/* 

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

*/ 