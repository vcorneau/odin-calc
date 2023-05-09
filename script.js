let leftNumber
let rightNumber
let operator

let newInputBuffer = []
let calcBuffer = []
let operatorBuffer = []

let display = document.getElementById('display')
let clearButton = document.getElementById('buttonClear')
let currentDisplay

let buttons = document.getElementsByClassName('button')

function processUserInput () {
  newInputBuffer.push(Element.innerHTML)
  calcBuffer = newInputBuffer.join('')

  if (leftNumber === null && EventTarget.class === 'number') {
    leftNumber = parseFloat(calcBuffer)
    return leftNumber
  }

  rightNumber = parseFloat(calcBuffer)
  return rightNumber
}

function getUserInput(leftNumber, rightNumber) {
  for (let button of buttons) {
    button.addEventListener('click', userInput)
  }
}


// add function
function add (leftNumber, rightNumber) {
  return leftNumber + rightNumber
}

// subtract function
function sub (leftNumber, rightNumber) {
  return leftNumber - rightNumber
}

// multiply function
function mult (leftNumber, rightNumber) {
  return leftNumber * rightNumber
}

// divide function
function div (leftNumber, rightNumber) {
  return leftNumber / rightNumber
}

// Function resets data
function resetData () {
  newInputBuffer = []
  calcBuffer = []
  operatorBuffer = []
  firstNumber = null
  display.innerHTML = ''
}

buttonClear.addEventListener('click', resetData)

//  Display number to be added in display

//  Store first number into variable when operator is pressed and clear display.
//  First number will be stored in an array, concat the array, then parseInt

//  Store second number when operator is pressed and clear display
//

//  Display result when = is pressed
