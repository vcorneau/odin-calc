// Operation functions
function add(leftNumber, rightNumber) {
  return leftNumber + rightNumber
}
function sub(leftNumber, rightNumber) {
  return leftNumber - rightNumber;
}
function mult(leftNumber, rightNumber) {
  return leftNumber*rightNumber;
}
function div(leftNumber, rightNumber) {
  return leftNumber / rightNumber;

const buttons = document.getElementsByClassName('button')
const newInputBuffer = []
}

function operate(operator) {
  if(operator === '+') {
    display.innerHTML = add()
  } else if(operator === '-') {
    display.innerHTML = sub()
  } else if(operator === '*') {
    display.innerHTML = mult();
  } else if(operator === '/' && rightNumber !== 0) {
    display.innerHTML = div();
  } else if(operator === '/' && rightNumber === 0) {
    display.innerHTML = '80085';
  }
}

const buttons = document.getElementsByClassName('button')
let buttonClass
let newInputBuffer = []
let numberBuffer = []
let leftNumber = 0
let rightNumber = 0
let number
let operator
const display = document.getElementById('display')
let decimalUsed = false

function resetData() {
  newInputBuffer = []
  numberBuffer = []
  number = null
  operator = null
  decimalUsed = false
  display.innerHTML = ''
}

for (const button of buttons) {
  button.addEventListener('click', function() {
    buttonClass = button.classList

    if (buttonClass.contains('number')) {
      newInputBuffer.push(button.innerHTML)
      numberBuffer = newInputBuffer.join('')
      number = parseFloat(numberBuffer)
      display.innerHTML = number
    } else if (buttonClass.contains('decimal') && decimalUsed === false) {
      newInputBuffer.push(button.innerHTML)
      numberBuffer = newInputBuffer.join('')
      number = parseFloat(numberBuffer)
      decimalUsed = true
      display.innerHTML = number
    } else if (buttonClass.contains('operator')) {
      operator = button.innerHTML
      leftNumber = number
      console.log(leftNumber)
      resetData()
    } else if (buttonClass.contains('equal')) {
      rightNumber = number
      console.log(rightNumber)
      operate()
    } else if (buttonClass.contains('clear')) {
      resetData()
    }
  })
}

