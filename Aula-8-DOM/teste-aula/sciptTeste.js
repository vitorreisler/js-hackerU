let $userNameInput = document.getElementById("userNameInput")
let $userAgeInput = document.getElementById("userAgeInput")
let $userEmailInput = document.getElementById("userEmailInput")
let submitBtn = document.getElementById("ex1")
let res = document.getElementById ("res")


submitBtn.addEventListener("click", userInfos)
function userInfos(){
    let userName = $userNameInput.value
    let userAge = $userAgeInput.value
    let userEmail = $userEmailInput.value
res.innerHTML = `${userName}, ${userAge}, ${userEmail}`
 }



//ex 2
let fruits = ["apple", "banana", "orange", "grapes", "watermelon"]
let changeBackground = document.getElementById("changeBackground")
let changeBorder = document.getElementById("changeBorder")
let changeText = document.getElementById("changeText")
let result = document.getElementById("res_ex2")

changeBackground.addEventListener("click", doChangeBackground)
function doChangeBackground () {
  let chooseBackgroundColor = prompt("which color do you want the Background?")
  chooseBackgroundColor.toLowerCase()
    result.style.background = chooseBackgroundColor
}
changeBorder.addEventListener("click", doChangeBorder)
function doChangeBorder () {
    result.style.border = "thick solid #000000"
}

changeText.addEventListener("click", doChangeText)
function doChangeText () {
    let randomFruits = fruits[Math.floor(Math.random()*fruits.length)]
    result.innerHTML = randomFruits
}



//EX 3
let test_ex3 = document.getElementById("res_ex3")
function createDiv() {
  let newDiv = document.createElement('div')
  //let newContent = document.createTextNode("Hi there and greetings!")
  let insideDiv = document.creteElement('div')
  newDiv.appendChild(insideDiv)
  document.body.insertBefore(newDiv ,test_ex3)
  insideDiv.style.background = "red"
  console.log ("newDiv")
}
test_ex3.addEventListener("click", createDiv())


/*
1. create a new project
2. ask the user for name email and age and show as follows (use inputs, divs, addEventListener)
	"Daniel (28) - zaodk.@gamil.com"
3. create three buttons one will change a divs background one will change the border and one will change the text randomly from the following array
(use classList)
["apple", "banana", "orange", "grapes", "watermelon"]


🤚🏾

BONUS 
4. create input which the user will tell how many levels and show in div
4.1 instead of * use <div></div> with some styling

*/ 



/* const nameInput = document.querySelector(".ex1 .name-input");
const ageInput = document.querySelector(".ex1 .age-input");
const emailInput = document.querySelector(".ex1 .email-input");
const ex1_sendBtn = document.querySelector(".ex1 .send-btn");
const ex1_result = document.querySelector(".ex1 .result");

ex1_sendBtn.addEventListener("click", ex1_showUserInfo);

function ex1_showUserInfo() {
  const name = nameInput.value;
  const age = ageInput.value;
  const email = emailInput.value;

  ex1_result.innerHTML = `${name} (${age}) - ${email}`;
}

// EX 2
let ex2_result = document.querySelector(".ex2 .result");
let changeBorderBtn = document.querySelector(".ex2 .change-border-btn");
let changeBackgroundBtn = document.querySelector(".ex2 .change-background-btn");
let changeTextBtn = document.querySelector(".ex2 .change-text-btn");

let texts = ["apple", "banana", "orange", "grapes", "watermelon"];

changeBorderBtn.addEventListener("click", changeBorder);
changeBackgroundBtn.addEventListener("click", changeBackground);
changeTextBtn.addEventListener("click", changeText);

function changeBackground() {
  ex2_result.classList.toggle("background");
}
function changeBorder() {
  ex2_result.classList.toggle("border");
}
function changeText() {
  ex2_result.innerHTML = getRandomElement(texts);
}

function getRandomElement(arr) {
  return arr[getRandomInt(0, arr.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// EX_3

const levelsInput = document.querySelector(".ex3 .levels");
const charInput = document.querySelector(".ex3 .char");
const ex3_result = document.querySelector(".ex3 .result");

levelsInput.addEventListener("change", function () {
  ex3_result.innerHTML = createPyramid(levelsInput.value, charInput.value);
});

function createPyramid(levels, char) {
  if (levels <= 0) {
    return "";
  }

  let result = "";
  for (let i = 1; i <= levels; i++) {
    let padding = levels - i;
    result += repeat(" ", padding) + repeat(`${char} `, i) + "\r\n";
  }

  return result;
}

function repeat(char, times) {
  let str = "";
  for (let i = 0; i < times; i++) {
    str += char;
  }
  return str;
}
 */