let num_12 = 111_222_333_444
console.log (num_12)

let name = "Vitor"
let  email = "vitor@gmail.com"
let age = 30
let gender = "Male"

console.log (`Hello ${name} you are ${age} years old, your email is ${email} and you are ${gender} and dont forget that you choose the number ${num_12} as a number with 12 numbers`)

console.log ("hello " + name + " you are " + age + " years old, your email is " + email + "and you are " + gender + " and don't forget that you choose the number " + num_12 + " as a number with 12 numbers")

function fn () {
    return "aaaa"
}
let user = {
    name : "vitor",
    email: "vitor@gmail.com",
    age: 30,
    isLogged: true,
    gender: "male",
    addres: {
        city: "ramat gan",
        street: "rashi",
        number: 15102,
    },
    sayHello: function () {},
    a: fn(), // a will be the returned true
    b: fn, // the actual function
};

let car = {
    engine: {
        model: "v8",
        cylinders: 8,
        liters: {
            value: 1200,
            unit: "cc",
        },
    },
};

console.log (car.engine.model)
console.log (user.addres.city)

let d1 = new Date ()
console.log (d1)


let trabalhadores = {
    Vitor : "bom",
    Eran: "bom",
    Yanina: "Ruim",
    Greg: "Mediano",
    };

    let trabalhadores2 = {
        bons: {
            Vitor: "bom",
            khason: "bom",
            arin: "bom",
            alaa: "bom",
        },
        ruins: {
            liem: "ruim",
            dorin: "ruim",
        }
    }

    console.log (trabalhadores.Yanina)
    console.log (trabalhadores2.bons)

    let car2 = {
        engine: {
            v4 : "weak",
            v6: "medium",
            v8: "strong",
        },
        isOn: {
            turnOn: "on",
            turnOff: "off",
        },
        speed: {
            slow: "100km/h",
            medium: "200km/h",
        },
        color: {
            popular: "red",
            rare: "gold",
            ultra_rare: "rainbow",
        },
        tank: "250l",
        tiers: 17,
        type: "car",
        carNumber: 01233210,
        gear: {
            manual: "manual",
            automatic: "automatic",
        }
    }
    console.log (car2)
    console.log (car2.engine.v8)
    console.log (car2.color.rare)
    console.log (car2.speed.slow)
    car2.tank = "300l",
    console.log (car2.tank)

    function changeType () {
        car2.type = "motorcycle"
    }

    function showType () {
        console.log (car2.type)
    }