// add function
function add(a,b) {
    return a+b;
}

// subtract function
function sub(a,b) {
    return a-b;
}

// multiply function
function mult(a,b) {
    return a*b;
}

// divide function
function div(a,b) {
    return a/b;
}

let firstNumber;
let secondNumber;
let operator;

// Function to calculate based on input

function operate(operator,firstNumber,secondNumber) {
    let a = parseInt(firstNumber);
    let b = parseInt(secondNumber);

    if(operator === "+") {
        return add(a,b);
    } else if(operator === "-"){
        return sub(a,b);
    } else if(operator === "*"){
        return mult(a,b);
    } else if(operator === "/"){
        return div(a,b);
    }
}

// On button click, add numbers to buffer

let newInputBuffer = [];
let calcBuffer = [];
let operatorBuffer = [];
let display = document.getElementById('display');
let clearButton = document.getElementById('buttonClear');
let currentDisplay;

let buttons = document.getElementsByClassName("button");

// Receives user input and puts numbers and decimal in a buffer
function receiveFirstUserInput(event) {
  if (event.target.id === "button1") {
    newInputBuffer.push(1);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
  } else if (event.target.id === "button2") {
    newInputBuffer.push(2);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
  } else if (event.target.id === "button3") {
    newInputBuffer.push(3);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
} else if (event.target.id === "button4") {
    newInputBuffer.push(4);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
} else if (event.target.id === "button5") {
    newInputBuffer.push(5);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
} else if (event.target.id === "button6") {
    newInputBuffer.push(6);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
} else if (event.target.id === "button7") {
    newInputBuffer.push(7);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
} else if (event.target.id === "button8") {
    newInputBuffer.push(8);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
} else if (event.target.id === "button9") {
    newInputBuffer.push(9);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
} else if (event.target.id === "button0") {
    newInputBuffer.push(0);
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
} else if (event.target.id === "buttonDec") {
    if(newInputBuffer.includes('.')) {
      return;
    }
    newInputBuffer.push('.');
    calcBuffer = newInputBuffer.join('');
    firstNumber = parseFloat(calcBuffer);
    console.log(firstNumber);
}
display.innerHTML = firstNumber;
}

function resetData() {
  newInputBuffer = [];
  calcBuffer = [];
  operatorBuffer = [];
  firstNumber = null;
  display.innerHTML = '';
}

for (let button of buttons) {
  button.addEventListener('click', receiveFirstUserInput);
}

buttonClear.addEventListener('click', resetData);

//  Display number to be added in display

//  Store first number into variable when operator is pressed and clear display.
//  First number will be stored in an array, concat the array, then parseInt

//  Store second number when operator is pressed and clear display
//

//  Display result when = is pressed