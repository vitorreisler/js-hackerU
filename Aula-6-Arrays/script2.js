let users = []

function add1() {
    users.push ({
        name: prompt ("enter your name"),
        age: Number(prompt ("enter your age"))
    })
}
function remove1() {
    users.pop ()
}

function removeAll() {
    users = []
}



function toShow (){
    console.log (users)
}





/* let users = []
function add1() {
    let userName = prompt ("Whats your name ? ")
    let userAge = Number(prompt ("Whats your age ?"))
    users.push ({
        userName,
        userAge,
    })
}

console.log(users)

function toShow() {
    console.log (users)
}

*/