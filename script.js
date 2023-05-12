// Operation functions
function add(leftNumber, rightNumber) {
  let result = leftNumber + rightNumber
  result.parseFloat
  return result
}
function sub(leftNumber, rightNumber) {
  return leftNumber - rightNumber;
}
function mult(leftNumber, rightNumber) {
  return leftNumber*rightNumber;
}
function div(leftNumber, rightNumber) {
  return leftNumber / rightNumber;
}

function operate(operator, leftNumber, rightNumber) {
  let result
  if(operator === '+') {
    result = add(leftNumber, rightNumber)
    return result
  } else if(operator === '-') {
    result = sub(leftNumber, rightNumber)
    return result
  } else if(operator === '*') {
    result = mult(leftNumber, rightNumber)
    return result
  } else if(operator === '/' && rightNumber !== 0) {
    result = mult(leftNumber, rightNumber)
    return result
  } else if(operator === '/' && rightNumber === 0) {
    const divideByZero = '80085'
    return divideByZero
  }
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
  decimalUsed = false
  display.innerHTML = ''
}

function resetOperator() {
  operator = null
}

function resetBuffers() {
  newInputBuffer = []
  numberBuffer = []
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
      console.log(operator)
      resetData()
    } else if (buttonClass.contains('equal')) {
      rightNumber = number
      console.log(rightNumber)
      const equals = operate(operator, leftNumber, rightNumber)
      console.log(operate(operator, leftNumber, rightNumber))
      display.innerHTML = equals
      resetBuffers()
      numberBuffer.push(equals)
      number = parseFloat(numberBuffer)
    } else if (buttonClass.contains('clear')) {
      resetData()
      resetOperator()
    }
  })
}

