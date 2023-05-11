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

const buttons = document.getElementsByClassName('button')
let buttonClass
let newInputBuffer = []
let numberBuffer = []
let leftNumber
let rightNumber
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
      resetData()
    } else if (buttonClass.contains('clear')) {
      resetData()
    }
  })
}

