
 /* let fruit = {
red_fruits: {
    apple: "red",
    strawberrys: "red",
},
green_fruits: {
    grapes: "green",
    pear: "green",
    apple: "green",
    melon: "green",
},
yellow_fruits: {
    banana: "yellow",
    melon: "yello",
    apples: "yellow",
}
}
console.log (fruit)
console.log (fruit.green_fruits)

console.log (fruit.yellow_fruits.apples) */

let allProducts = {
    product1: {
        product: "pen",
        color: "black",
        type: "whiteboard",
        quantity: 0,
    },
    product2: {
        product: "paper",
        color: "white",
        type: "recycled",
        quantity: 0,
    }

};

function plus1Product1() {
allProducts.product1.quantity += 1
}


function less1Product1() {
    if (allProducts.product1.quantity){
        allProducts.product1.quantity -= 1
    } else {
        alert ("Please insert valid data")

    }
}

function toShow ( ) {
    console.log (allProducts)

}

function plus1Product2() {
    allProducts.product2.quantity += 1
    }
    
    
    function less1Product2() {
        if (allProducts.product2.quantity){
            allProducts.product2.quantity -= 1
        } else {
            alert ("Please insert valid data")
    
        }
    }

