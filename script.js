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

//Change color on click


