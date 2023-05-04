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

//Function to calculate based on input

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

//On button click, add numbers to buffer

let newInputBuffer = [];
let calcBuffer = [];
let operatorBuffer = [];

let buttonClicked = false;
let buttons = document.getElementsByClassName("button");

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        console.log(event.srcElement.id);
    });
}



//Display number to be added in display

//Store first number into variable when operator is pressed and clear display.
//First number will be stored in an array, concat the array, then parseInt

//Store second number when operator is pressed and clear display
//

//Display result when = is pressed



