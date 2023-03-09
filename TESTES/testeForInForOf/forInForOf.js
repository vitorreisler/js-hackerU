let res = document.getElementById("res")
let arr1 = []
arr1.push(2)
arr1.push(5)
for (let value of arr1) {
    console.log (value, arr1)
}
arr1.push(100)
arr1.push(300)
arr1.push(51)
arr1.push(7)
console.log (Math.floor(Math.random(arr1)))
res.innerHTML = arr1
for (let value of arr1) {
    console.log (value, arr1)
} 